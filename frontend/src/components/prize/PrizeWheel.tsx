import { Box, Button, Typography } from "@mui/material";
import { motion } from 'motion/react';
import { useState } from "react";
import WheelSegment from "./WheelSegment";

type PrizeWheelProps = {
    segments: {
        label: string,
        value: number,
        icon?: any
    } []
}

function PrizeWheel({ segments }: PrizeWheelProps) {
    const [wheelAngle, setWheelAngle] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);

    const anglePerSegment = 360 / segments.length;

    const handleSpinClick = () => {
        const randomIndex = Math.floor(Math.random() * segments.length);
        const targetDegree = randomIndex * anglePerSegment;
        console.log(segments[randomIndex].label);
        setWheelAngle((prev) => {
            const nextFullRotation = Math.ceil(prev / 360) * 360;
            return nextFullRotation + 3600 + (360 - targetDegree);
        });
    }
    const handleSpinCompleted = () => setIsSpinning(false);

    return (
        <Box className="relative size-130 p-5 bg-linear-to-t from-orange-300 to-amber-200 rounded-full place-content-center justify-self-center shadow-lg">
            <Box className="relative size-full rounded-full place-content-center justify-self-center">
                <Box className={`absolute top-0 size-full justify-self-center place-content-center bg-white overflow-hidden rounded-full`} sx={{ rotate: `-${90 + (180 / segments.length)}deg` }} component={motion.div} initial={{ rotate: 0 }} animate={{ rotate: wheelAngle }} transition={{ duration: 12, ease: [0.1, 0, 0, 1] }} onAnimationStart={() => setIsSpinning(true)} onAnimationComplete={handleSpinCompleted}>
                    {segments.map((segment, index) =>
                        // lineRotation = index * anglePerSegment;
                        // textRotation = lineRotation + (anglePerSegment / 2);
                        <WheelSegment label={segment.label} lineRotation={index * anglePerSegment} textRotation={anglePerSegment * (index + 0.5)} key={index} />
                    )}
                </Box>
                <Box className="relative place-self-center justify-self-center size-1/6 rounded-full bg-amber-300">
                    <Box className="absolute -top-10 size-full bg-amber-300 rotate-180" sx={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }} />
                </Box>
            </Box>
            {!isSpinning && (
                <Button className="absolute! -bottom-4! left-1/2! right-1/2! rounded-full! px-14! py-2! justify-self-center! bg-linear-to-t! from-blue-400! via-green-600! to-green-500!" variant="contained" disableRipple onClick={handleSpinClick}>
                    <Typography className="font-semibold!" variant="h5">QUAY</Typography>
                </Button>
            )}
        </Box>
    );
}

export default PrizeWheel;