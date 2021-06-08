export declare const initialState: {
    fontSize: string;
    fontWeight: string;
};
interface Action {
    type: number;
}
export declare const reducer: (state: {
    fontSize: string;
    fontWeight: string;
} | undefined, action: Action) => {
    fontSize: string;
    fontWeight: string;
};
export {};
