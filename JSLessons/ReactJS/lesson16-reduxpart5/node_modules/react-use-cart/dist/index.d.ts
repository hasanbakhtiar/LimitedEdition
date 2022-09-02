import * as React from "react";
export interface Item {
    id: string;
    price: number;
    quantity?: number;
    itemTotal?: number;
    [key: string]: any;
}
interface InitialState {
    id: string;
    items: Item[];
    isEmpty: boolean;
    totalItems: number;
    totalUniqueItems: number;
    cartTotal: number;
    metadata?: Metadata;
}
export interface Metadata {
    [key: string]: any;
}
interface CartProviderState extends InitialState {
    addItem: (item: Item, quantity?: number) => void;
    removeItem: (id: Item["id"]) => void;
    updateItem: (id: Item["id"], payload: object) => void;
    setItems: (items: Item[]) => void;
    updateItemQuantity: (id: Item["id"], quantity: number) => void;
    emptyCart: () => void;
    getItem: (id: Item["id"]) => any | undefined;
    inCart: (id: Item["id"]) => boolean;
    clearCartMetadata: () => void;
    setCartMetadata: (metadata: Metadata) => void;
    updateCartMetadata: (metadata: Metadata) => void;
}
export declare type Actions = {
    type: "SET_ITEMS";
    payload: Item[];
} | {
    type: "ADD_ITEM";
    payload: Item;
} | {
    type: "REMOVE_ITEM";
    id: Item["id"];
} | {
    type: "UPDATE_ITEM";
    id: Item["id"];
    payload: object;
} | {
    type: "EMPTY_CART";
} | {
    type: "CLEAR_CART_META";
} | {
    type: "SET_CART_META";
    payload: Metadata;
} | {
    type: "UPDATE_CART_META";
    payload: Metadata;
};
export declare const initialState: any;
export declare const createCartIdentifier: (len?: number) => string;
export declare const useCart: () => CartProviderState;
export declare const CartProvider: React.FC<{
    children?: React.ReactNode;
    id?: string;
    defaultItems?: Item[];
    onSetItems?: (items: Item[]) => void;
    onItemAdd?: (payload: Item) => void;
    onItemUpdate?: (payload: object) => void;
    onItemRemove?: (id: Item["id"]) => void;
    storage?: (key: string, initialValue: string) => [string, (value: Function | string) => void];
    metadata?: Metadata;
}>;
export {};
