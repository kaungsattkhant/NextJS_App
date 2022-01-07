import ClientOnly from "../components/ClientOnly";
import Countries from "../components/Countries";

const ClientSide = () => {
    return ( 
        <>
        <ClientOnly>
            <Countries />
        </ClientOnly>
        </>
     );
}
 
export default ClientSide;