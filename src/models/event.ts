import { IMarket } from "./market";

export interface IEvent {
    id: string;
    name: string;
    markets: IMarket[];
    isVisible: boolean;
    hasSelectedBets?: boolean;
  }