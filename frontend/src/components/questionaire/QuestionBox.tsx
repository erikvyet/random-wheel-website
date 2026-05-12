import { Box, Grid, Stack, Typography } from "@mui/material";
import type { Question } from "../../types/Question";
import { useContext } from "react";
import { QuestionaireContext } from "../../contexts/QuestionaireContext";

function QuestionBox({ question, options, answer }: Question) {
    const questionaireContext = useContext(QuestionaireContext);
    if (!questionaireContext) return null;
    const { setActiveQuestion } = questionaireContext;

    const handleAnswerClick = (index: number) => {
        if (index === answer) {
            setActiveQuestion((prev) => prev + 1);
        }
    }

    return (
        <Stack className="size-full items-center">
            <Box className="flex-1/3 grow-0 shrink-0 place-content-center text-center">
                <Typography className="font-semibold! text-4xl! lg:text-5xl! xl:text-6xl! 2xl:text-8xl! leading-snug">{question}</Typography>
            </Box>
            <Grid className="w-full flex-1/2 grow-0 shrink-0 justify-center items-center" container spacing={2}>
                {options.map((option, index) =>
                    <Grid className={`h-1/2 md:h-3/5 lg:h-3/4 p-1 lg:p-1.5 2xl:p-3 rounded-2xl cursor-pointer ${option.outerColor}`} size={{ xs: 6, md: 3 }} key={index} onClick={() => handleAnswerClick(index)}>
                        <Box className={`size-full place-content-center rounded-xl ${option.innerColor}`}>
                            {option.icon !== undefined && (
                                <Box className="aspect-square h-1/2 w-full">
                                    {option.icon}
                                </Box>
                            )}
                            <Typography className="text-zinc-100 justify-self-center text-center text-2xl! md:text-3xl! lg:text-4xl! xl:text-5xl! 2xl:text-7xl! font-semibold!">{option.label}</Typography>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Stack>
    );
}

export default QuestionBox;