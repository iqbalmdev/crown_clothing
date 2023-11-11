import { AnyAction } from "redux"

export type ActioWithPayload<T,P> = {
    type:T;
    payload:P;
}

export type Action<T> = {
    type:T
}
// function overlaoding
export function  createAction<T extends string,P>(type:T,payload:P):ActioWithPayload<T,P>;
export function createAction <T extends string>(type:T,payload:void):Action<T>;
export function createAction <T extends string,P>(type:T,payload:P){
    return {type,payload};
}