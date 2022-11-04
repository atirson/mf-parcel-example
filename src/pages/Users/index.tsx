import { useQuery, gql } from '@apollo/client';

const GET_INFORMATIONS = gql`
  query Informations {
    informations {
      id
      name
      description
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_INFORMATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.informations.map(({ id, name, description }) => (
    <div key={id}>
      <h3>{name}</h3>
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default Users;
