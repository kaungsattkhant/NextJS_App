import {  useQuery } from '@apollo/client';
import gql from 'graphql-tag';
export const GET_COUNTRY = gql`
  query GetCountries {
    countries {
        name
        code
        emoji
        phone
        currency
        capital
        native
    }
  }
`;