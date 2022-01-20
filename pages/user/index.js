import styles from "../../styles/User.module.css"

import Link from "next/link";
import Head from "next/head";
import useSWR from 'swr'
import { useRouter } from "next/router";
import jsonUsers from '../../user.json';
import TextField from "@mui/material/TextField";

// const fetcher= async (url)=> await fetch(url).then((res)=> res.json());
//  function User(){
//      const address=`https://jsonplaceholder.typicode.com/users?_limit=3`
//     const {data,error} =useSWR(address,fetcher);
//     if(error) return <div>Fail to load</div>
//     if(!data) return <div>Loading....</div>
//     return (
//         <>
//         <Head>
//                 <title>User | User List</title>
//             </Head>
//             <div>
//                 <h1>This is User List</h1>
//                 {data.map(user => (
//                     <Link href={"/user/" +user.id} key={user.id} >
//                         <a className={styles.single}>
//                             <h3>  {user.name}</h3>
//                         </a>
//                     </Link>
//                 ))}
//             </div>
//         </>
//     )
// }
export const getServerSideProps = async ({ query: { page = 1 } }) => {
    // export const getStaticSideProps = async ({query :{page=1}}) => {
    const limit = 7;
    const start=+page===1 ? 0 : (+page-1)*limit;
    // const data=usersJson;
    // const numberOfData=await fetch(`https://jsonplaceholder.typicode.com/users`).then((response)=>response.json());
    // const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}&_start=${start}`);
    const res = await jsonUsers;
    const data = await res;
    const count =Object.keys(jsonUsers).length
    return {
        props: {
            users: data,
            page: +page,
            count:count,
            limit:limit,
        }
    }
}
const searchUser= async(e) =>{
    console.log(e);
}

const User = ({ users, page,count,limit }) => {
    const router = useRouter();
    console.log(router);
    const lastpage =Math.ceil(count/limit);
    const start=page===1 ? 0 : ((page)-1)*limit;
    return (
        <>
            <Head>
                <title>User | User List</title> 
            </Head>
            <div>
                <h1>This is User List    <span className="count">Total:  {count}</span> </h1>
                <div className="">
        <TextField fullWidth label="Search " id="fullWidth"  onChange={e=>searchUser(e.target.value)}/>
      </div>
                {jsonUsers.slice(start,(page*limit)).map(user => (
                    <Link href={"/user/" + user.id} key={user.id} >
                        <a className={styles.single}>
                            <h3>  {user.first_name} {user.last_name}</h3>
                        </a>
                    </Link>
                ))}
                <div className="pagination">
                <button onClick={() => router.push(`/user?page=${page - 1}`)} disabled={page <=1}>Previous</button>
                <button onClick={() => router.push(`/user?page=${page + 1}`)} disabled={page>=lastpage}>Next</button>
            </div>

            </div>
            

        </>

    );
}

export default User;

