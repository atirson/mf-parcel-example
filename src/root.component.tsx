import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Users from '@app/pages/Users';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cla1od2o0159701uk3tyf24lt/master',
  cache: new InMemoryCache(),
});

export default function Root() {
  return (
    <ApolloProvider client={client}>
      <Users />
    </ApolloProvider>
  );
}
