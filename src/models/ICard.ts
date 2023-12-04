import { ReactNode } from "react";

export interface ICard {
    title?: string | ReactNode;
    text?: string | ReactNode;
    description?: string | ReactNode;
    src?: string;
    cardClassName?: string
}