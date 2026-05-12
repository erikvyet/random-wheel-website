import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import type { Segment } from "../interfaces/Segment";
import { OuterColor } from "../enums/OuterColor";
import { InnerColor } from "../enums/InnerColor";

function Result() {
    const { state } = useLocation();
    const segment: Segment = state.segment as Segment;
    if (segment == null) return null;

    return (
        <Container className="min-h-screen h-screen max-h-max justify-evenly items-center" component={Stack} maxWidth={"xl"}>
            <Typography className="text-yellow-200 font-semibold! text-shadow-lg justify-self-center text-4xl! md:text-5xl! lg:text-6xl! xl:text-7xl! 2xl:text-8xl!">CHÚC MỪNG!</Typography>
            <Stack className="w-full flex-2/5 grow-0 shrink-0 justify-center items-center gap-4">
                <Typography className="font-semibold! text-center text-2xl! sm:text-3xl! lg:text-4xl! xl:text-5xl! 2xl:text-6xl!">Bạn đã nhận được:</Typography>
                <Stack className="w-full md:w-3/4 lg:w-2/3 2xl:w-full drop-shadow-lg drop-shadow-zinc-400 justify-center items-center bg-[url('/src/assets/images/ticket.png')] bg-no-repeat bg-contain bg-center" direction={"row"}>
                    <Box className="flex-2/5 grow-0 shrink-0 h-full place-content-center">
                        <Box className="size-3/4 justify-self-end bg-[url('/src/assets/images/gift.png')] bg-no-repeat bg-contain bg-center aspect-square" />
                    </Box>
                    <Box className="flex-3/5 grow-0 shrink-0 h-full text-center place-content-center overflow-hidden">
                        <Typography className="w-4/5 h-full place-content-center justify-self-start text-ellipsis font-semibold! overflow-hidden text-2xl! sm:text-3xl! md:text-4xl! lg:text-6xl! xl:text-7xl! 2xl:text-8xl!">{segment.label}</Typography>
                    </Box>
                </Stack>
            </Stack>
            <Button className={`p-0.75! rounded-full! ${OuterColor.green}`} variant="contained" disableRipple onClick={() => window.location.href = "/questionaire"}>
                <Typography className={`size-full text-xl! md:text-3xl! lg:text-4xl! xl:text-5xl! 2xl:text-7xl! rounded-full font-semibold! py-2 px-10 md:py-3 md:px-15 lg:py-4 lg:px-20 xl:py-5 xl:px-25 2xl:py-6 2xl:px-30 ${InnerColor.green}`}>CHƠI TIẾP</Typography>
            </Button>
        </Container>
    );
}

export default Result;