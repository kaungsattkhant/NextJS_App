import Link from 'next/link';
import SidebarStyles from '../styles/Sidebar.module.css'
const SideBar = () => {
    return (
        <>

            <div className={SidebarStyles.menu} >
                <ul className={SidebarStyles.menu_items}>
                    <li className={SidebarStyles.special_item}>
                        {/* <div className={SidebarStyles.menu_header_div}> */}
                            <h2 className={SidebarStyles.menu_header}>King Of The World</h2>
                        {/* </div> */}
                    </li>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/test"><li>Test</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/user"><li>User</li></Link>
                    <Link href="/product"><li>Product</li></Link>
                    <Link href="/country"><li>Country</li></Link>
                    <Link href="/logout"><li>Logout</li></Link>
                </ul>
            </div>
        </>

    );
}

export default SideBar;