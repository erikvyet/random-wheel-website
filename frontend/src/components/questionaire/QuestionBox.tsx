import { Box, Stack, Typography } from "@mui/material";
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
                <Typography className="font-semibold!" variant="h3">{question}</Typography>
            </Box>
            <Stack className="w-full flex-9/20 grow-0 shrink-0 flex-wrap justify-center items-center gap-4" direction={"row"}>
                {options.map((option, index) =>
                    <Box className={`flex-[220px] h-full p-1 grow-0 shrink-0 shadow-md shadow-zinc-400 rounded-2xl cursor-pointer hover:outline-4 ${option.outerColor} transition-discrete duration-200 ease-linear`} key={index} onClick={() => handleAnswerClick(index)}>
                        <Box className={`size-full rounded-xl place-content-center text-white ${option.innerColor}`}>
                            {option.icon !== undefined && <Box className="size-30 justify-self-center">{option.icon}</Box>}
                            <Typography className="justify-self-center font-semibold!" variant="h5">{option.label}</Typography>
                        </Box>
                    </Box>
                )}
            </Stack>
        </Stack>
    );
}

export default QuestionBox;