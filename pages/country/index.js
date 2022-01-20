import { gql } from "@apollo/client";
import client from "../../apollo-client";
import TextField from "@mui/material/TextField";
import CountryStyle from "../../styles/Country.module.css"
import Avatar from '@mui/material/Avatar';
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";


export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
    query Countries{  
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
    `,
  });


  return {
    props: {
      countries: data.countries.slice(0, 100),
    },
  };
}

const searchCountry = async (para) => {
  console.log(para.queryKey[1].name);
  const name = para.queryKey[1].name;
  if (name) {
    const res = await await client.query({
      query: gql`
      query {
        country(code:"AD"){
          name
          code
          emoji
          phone
          currency
          capital
          native
        }
      }
      `,
    });
  
    console.log(res.data.country);
    return res.data.country;
  }
}


const Country = ({ countries }) => {
  
  // console.log(countries);
  // const queryClient = useQueryClient();
  // const [countryName, setCountryName] = useState(null);
  // const { data, status } = useQuery(['countries', { name: countryName }], searchCountry, { initialData: countries });
  // console.log(countries);
  // console.log(status);
  // console.log(data)
  return (
    <>
      {/* <div className={CountryStyle.country_search}>
        <TextField fullWidth label="Search Country" id="fullWidth" onChange={e => setCountryName(e.target.value)} />
      </div> */}
      <div className="country_div">
        {/* {status==='loading...' && <div><span>Loading...</span></div> }
        {status==='loading...' && <div><span>Somethind went wrong!!!</span></div> }
        {statu ==='success' && data.map(c => (
          <div className="country_card" key={c.code}>
            <h3 className={CountryStyle.country_name}>
              {c.name}
            </h3>
            <p>{c.capital}</p>
            <p>
              {c.code} - {c.emoji}
            </p>
            <p>{c.phone}</p>
            <p>{c.currency}</p>
          </div>
        ))} */}
        {countries.map(c => (
          <div className="country_card" key={c.code}>
            <div className={CountryStyle.country_name}>
              {/* {c.name} */}
              {/* <a href="#country-name" aria-hidden="true" class="aal_anchor" id="country-name"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg> */}
              <p className={CountryStyle.avatar}><strong><Avatar >{c.name.slice(0,1)}</Avatar></strong> </p>
              <p><strong>{c.name.slice(1)}</strong></p>
              {/* </a> */}
            </div>
            <p>{c.capital}</p>
            <p>
              {c.code} - {c.emoji}
            </p>
            <p>{c.phone}</p>
            <p>{c.currency}</p>
          </div>
        ))}
      </div>

    </>
  );
}

export default Country;