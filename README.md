# Elasticsearch

Projet permettant de tester les différentes manières d'indexer 
des entitées liées ainsi que les jointures au niveau des index dans Elasticsearch.

## Stratégies d'indexation

Elasticsearch propose différentes solutions pour indexer de la donnée liée : 

- Denormalizing Your Data

La première solution est d'avoir des données redondantes dau niveau des documents de nos
index ce qui évite d'avoir à faire des jointures. 
On peut faire des requêtes de recherche sur chaque index à partir des données dupliquées.

- Nested document




- Parent/child relationship

Dans la relation "Parent/child", le document parent et le document enfant sont des documents 
séparés au contraire des nested documents.

La relation "Parent/Child" permet de lier des documents d'un type avec un autre type au niveau du même index.
Cette solution est limitée car le lien ne peut se faire qu'entre un type et un autre type. 

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

Cette section explique les concepts inhérent à Elasticsearch. 

### Concepts

#### Cluster

Un cluster est une collection de plusieurs noeuds (serveurs).

#### Node

Un noeud correspond à un serveur, faisant partie d'un cluster, qui stocke les 
données et qui participe à l'indexation et à la recherche de donneés
au niveau du cluster.

#### Index

Un index est une collection de documents qui ont des caractéristiques similaires
Un index est identifié par un nom unique qui doit être en minuscule.

#### Type

Dans un index, vous pouvez définir un ou plusieurs types. 
Un type est une catégorie / partition logique de votre index dont la sémantique dépend entièrement de vous.
Imaginons que vous developpez une plate-forme de microblogging et que vous décidiez de tout mettre 
dans un seul index. Dans cet index, vous pourriez définir un type "user", "blogPost" et "comment".

#### Mapping

Le mapping indique comment un document et ses propriétés sont stockées
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