import { Box, Typography } from "@mui/material";

type WheelSegmentProps = {
    lineRotation: number,
    textRotation: number,
    label?: string,
    icon?: any
}

function WheelSegment({ lineRotation, textRotation, label = "", icon }: WheelSegmentProps) {
    return (
        <>
            <Box className="absolute w-1/2 border z-0 border-amber-300 bottom-1/2 left-1/2 origin-left" sx={{ rotate: `${lineRotation}deg` }} />
            <Box className="absolute w-1/2 h-10 bottom-1/2 left-1/2 origin-left flex items-center justify-center translate-y-1/2" sx={{ rotate: `${textRotation}deg` }}>
                <Typography className="font-bold! pb-20 w-1/2 text-center" variant="h6" sx={{ transform: 'rotate(90deg)' }}>
                    {label}
                    {icon}
                </Typography>
            </Box>
        </>
    );
}

export default WheelSegment;