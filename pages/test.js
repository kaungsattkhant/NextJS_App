import {GET_COUNTRY} from '../components/GraphQL/queries'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import React,{ useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

// const GET_COUNTRY = gql`
//   query GetCountries {
//     countries {
//         name
//         code
//         emoji
//         phone
//         currency
//         capital
//         native
//     }
//   }
// `;


const Test = () => {

    const {error,loading,data}=useQuery(GET_COUNTRY);
    const   [countries,setCountries]=useState([]);
    useEffect(()=>{
        // console.log(data.countries);
        if(data){
            setCountries(data.countries);
            console.log(data.countries)
        }
    },[data]);
    return ( 
        <>
        <div>
        <div>
            <Link href="/country/form">
            <Button variant="contained" color="success">
        Add..
      </Button>
            </Link>
           
            </div>
            {countries && countries.map(c=>(    
                    <div key={c.code}>
                        <h3>{c.name}</h3>
                    </div>
            ))}
            <h1>Hello World  </h1>
        </div>
        </>
     );
}
 
export default Test;