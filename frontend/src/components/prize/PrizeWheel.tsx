import { Box, Button, Typography } from "@mui/material";
import { motion } from 'motion/react';
import { useState } from "react";
import WheelSegment from "./WheelSegment";
import type { Segment } from "../../interfaces/Segment";
import { useNavigate } from "react-router-dom";

type PrizeWheelProps = {
    segments: Segment[]
}

function PrizeWheel({ segments }: PrizeWheelProps) {
    const navigate = useNavigate();

    const [wheelAngle, setWheelAngle] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [segment, setSegment] = useState<Segment | null>(null);

    const anglePerSegment = 360 / segments.length;
    const initialOffset = -(90 + (180 / segments.length));

    const handleSpinClick = () => {
        if (isSpinning) return;
        const randomIndex = Math.floor(Math.random() * segments.length);
        const distanceToCenter = (360 - (randomIndex * anglePerSegment)) % 360;
        const randomTilt = (Math.random() - 0.5) * (anglePerSegment * 0.6);
        setWheelAngle((prev) => (Math.ceil(prev / 360) * 360) + distanceToCenter + randomTilt + 3600);
        setSegment(segments[randomIndex]);
    };
    const handleSpinCompleted = () => {
        setIsSpinning(false);
        if (segment !== null && segment.value !== 3) {
            navigate("/result", { state: { segment } });
        }
    }

    return (
        <Box className="relative size-80 md:size-110 lg:size-130 xl:size-200 2xl:size-280 p-4 lg:p-6 xl:p-8 2xl:p-10 bg-linear-to-t from-orange-300 to-amber-200 rounded-full place-content-center justify-self-center shadow-lg">
            <Box className="relative size-full rounded-full place-content-center justify-self-center">
                <Box className="absolute top-0 size-full justify-self-center place-content-center bg-white overflow-hidden rounded-full" component={motion.div} initial={{ rotate: initialOffset }} animate={{ rotate: wheelAngle + initialOffset }} transition={{ duration: 10, ease: [0.1, 0, 0, 1] }} onAnimationStart={() => setIsSpinning(true)} onAnimationComplete={handleSpinCompleted}>
                    {segments.map((segment, index) => 
                        <WheelSegment key={index} label={segment.label} lineRotation={index * anglePerSegment} textRotation={anglePerSegment * (index + 0.5)} />
                    )}
                </Box>
                <Box className="relative z-10 place-self-center justify-self-center size-1/7 rounded-full bg-amber-300">
                    <Box className="absolute -top-1/2 size-full bg-amber-300 rotate-180" sx={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }} />
                </Box>
            </Box>
            {!isSpinning && (
                <Button className="absolute! -bottom-4! left-1/2! right-1/2! rounded-full! px-14! py-2! xl:py-4! xl:px-20! 2xl:py-6! 2xl:px-30! justify-self-center! bg-linear-to-t! from-blue-400! via-green-600! to-green-500!" variant="contained" onClick={handleSpinClick}>
                    <Typography className="font-semibold! text-2xl! lg:text-3xl! xl:text-4xl! 2xl:text-6xl!">QUAY</Typography>
                </Button>
            )}
        </Box>
    );
}

export default PrizeWheel;