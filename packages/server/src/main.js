import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

async function startServer() {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();

  server.applyMiddleware({ app, cors: { origin: `http://${hostName}:3000` }, bodyParserConfig: true, });
}

startServer();

const port = process.env.port ? parseInt(process.env.port) : 8000;
const hostName = process.env.hostName || '127.0.0.1';
app.listen(port, hostName, () => {
  console.log(`Server is listening at http://${hostName}:${port}`);
});

