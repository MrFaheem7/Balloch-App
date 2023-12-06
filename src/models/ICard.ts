import { ReactNode } from "react";

export interface ICard {
    data?: any;
    content?: any;
    title?: string | ReactNode;
    text?: string | ReactNode;
    description?: string | ReactNode;
    src?: string;
    cardClassName?: string
}