import { ReactNode } from "react";

export interface ICard {
    title?: string | ReactNode;
    description?: string | ReactNode;
    src?: string;
    cardClassName?: string
}