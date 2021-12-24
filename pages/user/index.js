import styles from "../../styles/User.module.css"
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { users: data}
    }

}

const User = ({ users }) => {
    return (
        <>
            <Head>
                <title>User | User List</title>
            </Head>
            <div>
                <h1>This is User List</h1>
                {users.map(user => (
                    <Link href={"/user/" +user.id} key={user.id} >
                        <a className={styles.single}>
                            <h3>  {user.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>

    );
}

export default User;