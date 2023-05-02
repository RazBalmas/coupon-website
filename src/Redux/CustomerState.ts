import { createStore } from "redux";
import CompanyUserModel from "../Models/CompanyUserModel";
import UserModel from "../Models/UserModel";
import { AuthState, authStore } from "./AuthState";
import CustomerUserModel from "../Models/CustomerUserModel";
import CouponModel from "../Models/CouponModel";


export class CustomerState {
    public users: CustomerUserModel[] = [];
    public coupons : CouponModel[] = [];
}


export enum CustomerActionType {
    addCustomer,
    UpdateCustomer,
    getCustomer,
    deleteCustomer,
    customerExists,
    uploadImage,
    getAllCoupons

}

export interface CustomerAction {
    type : CustomerActionType;
    payload :any;
   
}

export function fetchCustomerAction(
    customer : CustomerUserModel

) : CustomerAction {

    return {type : CustomerActionType.getCustomer , payload : customer };
}
export function fetchCouponsAction(
    allCoupons : CouponModel[],
) : CustomerAction {

    return {type : CustomerActionType.getAllCoupons , payload : allCoupons };
}
export function addCustomerAction(
    customer : CustomerUserModel

) : CustomerAction {

    return {type : CustomerActionType.addCustomer , payload : customer };
}
export function deleteCustomerAction(
    id : number

) : CustomerAction {

    return {type : CustomerActionType.deleteCustomer , payload : id };
}
export function updateCustomerAction(
    customer : CustomerUserModel

) : CustomerAction {

    return {type : CustomerActionType.UpdateCustomer , payload : customer };
}
export function findCustomerExists(
    id : number

) : CustomerAction {

    return {type : CustomerActionType.getCustomer , payload : id };
}
export function postUploadImage(
    file : File

) : CustomerAction {

    return {type : CustomerActionType.uploadImage , payload : file};
}

export const setAuthHeader = (token: string, isFormData: boolean = false) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    };
    return { headers };
  };

export function customerReducer (currentState : CustomerState = new CustomerState(), action : CustomerAction , coupons ?: CouponModel[]) : CustomerState {
    const newState = {... currentState};
    switch(action.type) {
        case CustomerActionType.getCustomer :
            newState.users  = (action.payload);
            break;
        case CustomerActionType.getAllCoupons :
            newState.coupons  = (coupons);
            newState.users = (action.payload);
            break;
        
        case CustomerActionType.addCustomer :
                newState.users.push(action.payload);
                break;
        case CustomerActionType.UpdateCustomer :
                const indexToUpdate = newState.users.findIndex(p => p.id === action.payload);
                if (indexToUpdate >= 0) newState.users[indexToUpdate] = action.payload;
                break;
                case CustomerActionType.deleteCustomer :
                    const indexToDelete = newState.users = action.payload.delete()
                    if (indexToDelete >= 0) newState.users.splice(indexToDelete, 1);
                break;
            
                case CustomerActionType.uploadImage :
                    newState.users.push(action.payload);
                   
                break;
            
            
    }
    return newState;
}

export const customerStore = createStore(customerReducer);