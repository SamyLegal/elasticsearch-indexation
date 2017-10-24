const elasticsearch = require('elasticsearch');
const Promise = require('bluebird');

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.create({
  index: 'myindex',
  type: 'mytype',
  id: '1',
  body: {
    title: 'Test 1',
    tags: ['y', 'z'],
    published: true,
    published_at: '2013-01-01',
    counter: 1
  }
})

