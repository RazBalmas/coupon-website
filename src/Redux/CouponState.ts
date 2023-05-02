
import { createStore } from "redux";
import CompanyUserModel from "../Models/CompanyUserModel";
import UserModel from "../Models/UserModel";
import { AuthState, authStore } from "./AuthState";
import CouponModel from "../Models/CouponModel";



// 1. products state - the data we need at global application level
export class ProductsState {
    public Coupons: CouponModel[] = [];
}

// 2. Action Types - list of actions - enum
export enum ProductActionType {
    FetchProducts,
    AddProduct,
    UpdateProduct,
    DeleteProduct
}

// 3. Action - an interface describing a single command
export interface ProductsAction {
    type: ProductActionType; // action type
    payload: any; // action data
}

// 4. action creators - functions to create action objects
export function fetchProductAction(products: CouponModel[]): ProductsAction {
    return { type: ProductActionType.FetchProducts, payload: products };
}

export function addProductAction(product: CouponModel): ProductsAction {
    return { type: ProductActionType.AddProduct, payload: product };
}

export function updateProductAction(product: CouponModel): ProductsAction {
    return { type: ProductActionType.UpdateProduct, payload: product };
}

export function deleteProductAction(id: number): ProductsAction {
    return { type: ProductActionType.DeleteProduct, payload: id };
}




// 5. reducer - a single function performing any of the above actions

export function productReducer(currentState: ProductsState = new ProductsState(), action: ProductsAction): ProductsState {
    const newState = { ...currentState }; // duplicate current state

    switch (action.type) {
        case ProductActionType.FetchProducts: // here payload is all products
            newState.Coupons = action.payload;
            break;
        case ProductActionType.AddProduct: // here payload is a single product to add
            newState.Coupons.push(action.payload);
            break;
        case ProductActionType.UpdateProduct: // here payload is a single product to update
            const indexToUpdate = newState.Coupons.findIndex(p => p.id === action.payload.id);
            if (indexToUpdate >= 0) newState.Coupons[indexToUpdate] = action.payload;
            break;
        case ProductActionType.DeleteProduct: // here payload is an id of product to delete
            const indexToDelete = newState.Coupons.findIndex(p => p.id === action.payload);
            if (indexToDelete >= 0) newState.Coupons.splice(indexToDelete, 1);
            break;
    }

    return newState;
}

// 6 Products Store object to manage all products state

export const productsStore = createStore(productReducer);


