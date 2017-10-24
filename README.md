# Elasticsearch

Projet permettant de tester les différentes manières d'indexer 
des entitées liées ainsi que les jointures au niveau des index dans Elasticsearch.

## Stratégies d'indexation

Elasticsearch propose différentes solutions pour indexer de la donnée liée : 

- Denormalizing Your Data
La première solution est d'avoir des données redondantes dans chaque document de différents 
index ce qui évite d'avoir à faire des jointures. On peut faire des requêtes de recherche sur 
chaque index à partir des données dupliquées.

- Nested document


- Parent/child relationship

Dans la relation "Parent/child" le document parent et le document enfant sont des documents 
séparés au contraire des nested documents.

https://www.elastic.co/guide/en/elasticsearch/guide/current/parent-child.html


https://www.elastic.co/guide/en/elasticsearch/guide/current/modeling-your-data.html

### X-Pack

X-Pack est une extension qui permet de mettre en place un système d'alertes
au niveau d'Elasticsearch.
Ces actions sont de différents types : 

- Envoi d'email
- Webhooks

https://www.elastic.co/guide/en/x-pack/current/actions-webhook.html

## Elasticsearch

Cette section explique dans un premier temps comment utiliser Elasticsearch. 

### Concepts

#### Cluster



#### Node

Un noeud correspond à un serveur faisant partie d'un cluster qui stocke les 
données et qui participe à l'indexation et à la recherche de donneés
au niveau du cluster.

#### Index

Un index est une collection de documents qui ont des caractéristiques similaires.

#### Type

Dans un index, vous pouvez définir un ou plusieurs types. 
Un type est

#### Mapping

Le mapping indique commnet un document et ses propriétés sont stockées
et indexer dans Elasticsearch.

Chaque index a un ou plusieurs mappings qui sont utilisées pour séparer 
les documents dans des groupes logiques.

https://www.elastic.co/guide/en/elasticsearch/reference/current/_basic_concepts.html

### Connexion

Par défaut, l'image docker de elasticsearch en version 5.6 contient l'extension X-Pack
de la stack Elastic.
Cette extension permet de gérer la sécurité, le système d'alertes, le monitoring ainsi
que le reporting.

Le compte par défaut pour se connecter à elasticsearch c'est "elastic/changme".

https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html

Il est aussi possible de désactiver l'authentification en passant une
variable d'environnement au niveau de votre container docker.

https://www.elastic.co/guide/en/elasticsearch/reference/5.6/security-settings.html


### Commandes

Récupération de l'état de santé du cluster
```
http://localhost:9200/_cat/health?v
```

Liste des noeuds composant le cluster
```
http://localhost:9200/_cat/nodes?v
```

Liste des index de votre cluster
```
http://localhost:9200
```