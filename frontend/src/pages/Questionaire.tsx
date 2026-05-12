import { Box, Container } from "@mui/material";
import QuestionBox from "../components/questionaire/QuestionBox";
import { InnerColor } from "../enums/InnerColor";
import type { Question } from "../types/Question";
import { useEffect, useState } from "react";
import { QuestionaireContext } from "../contexts/QuestionaireContext";
import { OuterColor } from "../enums/OuterColor";

function Questionaire() {
    const question1: Question = {
        question: "Con vật nào có thể bay?",
        options: [
            { label: "Chim", icon: <Box className="size-full object-contain" component={"img"} src={"/src/assets/images/bird.png"}/>, innerColor: InnerColor.green, outerColor: OuterColor.green },
            { label: "Cá", icon: <Box className="size-full object-contain" component={"img"} src={"/src/assets/images/fish.png"}/>, innerColor: InnerColor.orange, outerColor: OuterColor.orange }
        ],
        answer: 0
    }
    const question2: Question = {
        question: "Đâu là thủ đô của Việt Nam?",
        options: [
            { label: "TP. Hồ Chí Minh", innerColor: InnerColor.blue, outerColor: OuterColor.blue },
            { label: "Hà Nội", innerColor: InnerColor.purple, outerColor: OuterColor.purple },
            { label: "Đà Nẵng", innerColor: InnerColor.orange, outerColor: OuterColor.orange },
            { label: "Cần Thơ", innerColor: InnerColor.green, outerColor: OuterColor.green }
        ],
        answer: 1
    }
    const questions: Question[] = [question1, question2];
    const [activeQuestion, setActiveQuestion] = useState(0);

    useEffect(() => {
        if (activeQuestion === questions.length) {
            window.location.href = "/prize";
        }
    }, [activeQuestion]);

    return (
        <QuestionaireContext.Provider value={{ questions, activeQuestion, setActiveQuestion }}>
            <Container className="md:w-3/4! lg:w-4/5! min-h-screen h-screen max-h-max" maxWidth={false}>
                {activeQuestion < questions.length && (
                    <QuestionBox 
                        question={questions[activeQuestion].question} 
                        options={questions[activeQuestion].options} 
                        answer={questions[activeQuestion].answer}
                    />
                )}
            </Container>
        </QuestionaireContext.Provider>
    );
}

export default Questionaire;