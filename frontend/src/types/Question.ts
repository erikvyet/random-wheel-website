import type { InnerColor } from "../enums/InnerColor"
import type { OuterColor } from "../enums/OuterColor";

type Question = {
    question: string,
    options: { label: string, innerColor: InnerColor, outerColor: OuterColor, icon?: any } [],
    answer: number
}

export type { Question };