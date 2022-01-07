import Main from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./sidebar";

const Layout = ({children}) => {
    return ( 
        // <div className="content">
        //     <Navbar />
        //     {children}
        //     <Footer />
        // </div>
        <div className="wrapper">
            <SideBar />
            <Main children={children}/>
        </div>
     );
}
 
export default Layout;