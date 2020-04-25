const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { StaticApp } = require('@keystonejs/app-static');
const { NextApp } = require('@keystonejs/app-next');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const PROJECT_NAME = 'keystone-next-adminui';
const adapterConfig = { mongoUri: 'mongodb://localhost/keystone-next-adminui' };


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),
});

keystone.createList('Todo', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    new NextApp({ dir: 'next-admin' }),
  ],
};
