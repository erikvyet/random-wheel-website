import { Container } from "@mui/material"
import { Outlet } from "react-router-dom";
import ClientBackground from "../components/common/ClientBackground";

function ClientLayout() {
    return (
        <Container className="relative min-h-screen h-screen max-h-max w-full p-0! m-0!" maxWidth={false}>
            <ClientBackground/>
            <Outlet/>
        </Container>
    );
}

export default ClientLayout;