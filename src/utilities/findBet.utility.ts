import { IBet } from "@/models";

export const findBet = (id: string, state: IBet[]) => !!state.find(b => b.id === id);