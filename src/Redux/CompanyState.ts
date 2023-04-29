import { createStore } from "redux";
import CompanyUserModel from "../Models/CompanyUserModel";
import UserModel from "../Models/UserModel";
import { AuthState, authStore } from "./AuthState";
export class CompanyState {
    public user : UserModel = new AuthState().user;
}


export enum CompanyActionType {
    addCompany,
    UpdateCompany,
    getCompany,
    deleteCompany,
    getAllCompanies
}

export interface CompanyAction {
    type : CompanyActionType;
    payload :any;
}

export function fetchCompanyAction(
    company : CompanyUserModel

) : CompanyAction {

    return {type : CompanyActionType.getCompany , payload : company };
}
export function addCompanyAction(
    company : CompanyUserModel

) : CompanyAction {

    return {type : CompanyActionType.addCompany , payload : company };
}
export function deleteCompanyAction(
    company : CompanyUserModel

) : CompanyAction {

    return {type : CompanyActionType.deleteCompany , payload : company };
}
export function updateCompanyAction(
    company : CompanyUserModel

) : CompanyAction {

    return {type : CompanyActionType.UpdateCompany , payload : company };
}

export function companyReducer (currentState : CompanyState = new CompanyState() , action : CompanyAction) {
    const newState = {...currentState};

    switch(action.type) {
        case CompanyActionType.getCompany :
            newState.user = action.payload;
            break;
            
        case CompanyActionType.addCompany :
                newState.user = action.payload.push(action.payload);
                break;
        case CompanyActionType.UpdateCompany :
                newState.user = action.payload.put(action.payload);
                break;
    }
    return newState;
}

export const companyStore = createStore(companyReducer);