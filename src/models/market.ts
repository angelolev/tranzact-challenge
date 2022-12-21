import { ISelection } from "./selection";

export interface IMarket {
    eventId: string;
    id: string;
    name: string;
    selections: ISelection[];
  }