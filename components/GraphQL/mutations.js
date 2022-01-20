import {gql} from '@apollo/client'

export const CREATE_COUNTRY=gql`
mutation createCountry(
    $name:String! 
    $code:String!
    $currency:String!
    )
    {
    createCountry(
        name:$name
        code:$code
        currency:$currency)
        {
            name
    }
}
`;
