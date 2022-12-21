import { IEvent } from "./event";

export interface DataState {
    loading: boolean;
    data: IEvent[];
    error: string | null;
}