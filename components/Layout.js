import Main from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./sidebar";

const Layout = ({ children }) => {
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
        // <div className="wrapper">
        // <div class="container-fluid">
        //     <div className="row">
        //         <div className="col-3 px-1 bg-dark position-fixed" id="sticky-sidebar">
        //             <SideBar />
        //         </div>
        //         <div className="col-9 offset-3" id="main">
        //             <Main children={children} />

        //         </div>
        //     </div>
        // </div>
    );
}

export default Layout;