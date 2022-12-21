import { ISelection } from "./selection";

export interface IMarket {
    eventId: string;
    id: string;
    name: string;
    hasSelectedBets?: boolean;
    selections: ISelection[];
  }