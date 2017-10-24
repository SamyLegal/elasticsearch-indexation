const _ = require('lodash');
const elasticsearch = require('elasticsearch');
const Promise = require('bluebird');
const tiers = require('../ressources/tiers');
const demandesFinancement = require('../ressources/demandesFinancement');

// Nom de l'index
const indexName = 'index-parent-child';

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

function deleteIndice(indexName) {
  return client.indices
    .exists({
      index: indexName
    })
    .then((result) => {
      if (result === true) {
        return client.indices.delete({
          index: indexName
        });
      }
    })
}

function createIndice() {
  return client.indices.create({
    index: indexName,
    body: {
      mappings: {
        demandeFinancement: {},
        tiers: {
          _parent: {
            type: 'demandeFinancement'
          }
        }
      }
    }
  });
}

function createTiers() {
  const tiersToCreate = [];
  _.each(tiers, (tiers) => {
    tiersToCreate.push(client.index({
      index: indexName,
      type: 'tiers',
      parent: '/referentiel-financement/api/tenants/test/demandes-financement/' + tiers.reference,
      id: tiers.id,
      body: tiers
    }));
  });

  return Promise.all(tiersToCreate);
}

function createDemandesFinancement() {
  const demandesFinancementToCreate = [];
  _.each(demandesFinancement, (demandeFinancement) => {
    demandesFinancementToCreate.push(client.index({
      index: indexName,
      type: 'demandeFinancement',
      id: demandeFinancement.id,
      body: demandeFinancement
    }));
  });

  return Promise.all(demandesFinancementToCreate);
}

module.exports = function executeScenarioParentChild() {
  return deleteIndice(indexName)
    .then(() => {
      return createIndice();
    })
    .then(() => {
      return createDemandesFinancement();
    })
    .then(() => {
      return createTiers();
    })
    .catch((err) => {
      console.log(err)
    });
};





