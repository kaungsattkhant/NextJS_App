import { useRouter } from "next/router";
import UserStyles from '../../styles/User.module.css'
import jsonUsers from '../../user.json';
import Image from "next/image";


export const getStaticPaths = async () => {
    const res=await jsonUsers
    // const data=await res.json();
    const data=await res;
    const paths=data.map(user=>{
        return {
            params:{id :user.id.toString()}
        }
    });
    return {
        paths,
        fallback:false,
    }
}

export const getStaticProps = async ({params}) => {
    const id=params.id;
    const res=await jsonUsers.filter(user=>user.id == id);
    // const data=await res.json();
    const data=await res;
    return {
        props :{
            user :data, 
        }
    }
}

const Detail = ({user}) => {
    // console.log(user.first_name);
    const router=useRouter();
    return ( 
        <>
        {user.map(u=>(
            <div className={UserStyles.userDetail} key={u.id}>
            <h1>User Detail</h1>
            {/* <p><Image src={u.image} width={200} height={200} /></p> */}
            <p>{u.first_name}{u.last_name}</p>
            <p>{u.email}</p>
            <p>{u.phone_number}</p>
            <p>{u.gender}</p>
            <p>{u.address}</p>
        </div>
    ))}
        
        <span onClick={() => router.back()} className="btn">Back</span>
        </>
        

     );
}
 
export default Detail;