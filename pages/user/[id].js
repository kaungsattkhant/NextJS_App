export const getStaticPaths = async () => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
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
    const res=await fetch('https://jsonplaceholder.typicode.com/users/' +id );
    const data=await res.json();
    return {
        props :{
            user :data, 
        }
    }
}

const Detail = ({user}) => {
    return ( 
        <div>
            <h1>User Detail</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
     );
}
 
export default Detail;