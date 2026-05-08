import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Question } from "../types/Question";

export const QuestionaireContext = createContext<{
    questions: Question[],
    activeQuestion: number,
    setActiveQuestion: Dispatch<SetStateAction<number>>,
} | null>(null);