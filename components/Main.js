import Footer from "./Footer";
import Navbar from "./Navbar";
const Main = ({children}) => {
    return (  
        <div className="content">
            {children}
            <Footer />
        </div>
    );
}
 
export default Main;