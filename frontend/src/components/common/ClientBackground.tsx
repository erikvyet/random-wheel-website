import { Box } from "@mui/material";

function ClientBackground() {
    return (
        <Box className="absolute -z-10 top-0 left-0 size-full">
            <Box className="size-full relative">
                <Box className="absolute top-0 left-0 h-1/3 w-full bg-linear-to-r from-green-500 from-0% via-green-300 via-40% to-green-500 to-100%" sx={{ clipPath: "ellipse(65% 100% at 50% 0%)" }}/>
                <Box className="absolute bottom-0 left-0 h-2/5 w-full bg-cover bg-no-repeat bg-[url('./src/assets/images/wave.svg')] opacity-50"/>
            </Box>
        </Box>
    );
}

export default ClientBackground;