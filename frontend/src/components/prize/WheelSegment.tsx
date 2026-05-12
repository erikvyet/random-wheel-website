import { Box, Stack, Typography } from "@mui/material";

type WheelSegmentProps = {
    lineRotation: number,
    textRotation: number,
    label?: string,
    icon?: any
}

function WheelSegment({ lineRotation, textRotation, label = "", icon }: WheelSegmentProps) {
    return (
        <>
            <Box className="absolute w-1/2 border lg:border-2 z-0 border-amber-300 bottom-1/2 left-1/2 origin-left" sx={{ rotate: `${lineRotation}deg` }} />
            <Stack className="absolute w-1/2 h-15 bottom-1/2 left-1/2 origin-left items-center justify-center translate-y-1/2" sx={{ rotate: `${textRotation}deg` }}>
                <Typography className="font-bold! pb-12 lg:pb-24 2xl:pb-32 w-1/2 text-center text-md! md:text-xl! lg:text-2xl! xl:text-4xl! 2xl:text-5xl!" sx={{ transform: 'rotate(90deg)' }}>
                    {label}
                    {icon}
                </Typography>
            </Stack>
        </>
    );
}

export default WheelSegment;