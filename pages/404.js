import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const NotFound = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])
    return ( 
        <>
         <Head>
                <title>Not Found</title>
            </Head>
        <div className="not-found">
            <h1>Ooooopss...</h1>
            <h2>This page couldn't found</h2>
            <p>Go to the <Link href="/"><a >Home Page</a></Link></p>
        </div>
        </>
       
     );
}
 
export default NotFound;