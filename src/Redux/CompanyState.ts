import { createStore } from "redux";
import CompanyUserModel from "../Models/CompanyUserModel";
import UserModel from "../Models/UserModel";
import { AuthState, authStore } from "./AuthState";


export class CompanyState {
    public users: CompanyUserModel[] = [];
}


export enum CompanyActionType {
    addCompany,
    UpdateCompany,
    getCompany,
    deleteCompany,
    companyExists,
    uploadImage
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
    id : number

) : CompanyAction {

    return {type : CompanyActionType.deleteCompany , payload : id };
}
export function updateCompanyAction(
    company : CompanyUserModel

) : CompanyAction {

    return {type : CompanyActionType.UpdateCompany , payload : company };
}
export function findCompanyExists(
    id : number

) : CompanyAction {

    return {type : CompanyActionType.companyExists , payload : id };
}
export function postUploadImage(
    file : File

) : CompanyAction {

    return {type : CompanyActionType.companyExists , payload : file};
}

export const setAuthHeader = (token: string, isFormData: boolean = false) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    };
    return { headers };
  };

export function companyReducer (currentState : CompanyState = new CompanyState(), action : CompanyAction) : CompanyState {
    const newState = {... currentState};
    switch(action.type) {
        case CompanyActionType.getCompany :
            newState.users  = (action.payload);
            break;
            
        case CompanyActionType.addCompany :
                newState.users.push(action.payload);
                break;
        case CompanyActionType.UpdateCompany :
                const indexToUpdate = newState.users.findIndex(p => p.id === action.payload);
                if (indexToUpdate >= 0) newState.users[indexToUpdate] = action.payload;
                break;
                case CompanyActionType.deleteCompany :
                    const indexToDelete = newState.users = action.payload.delete()
                    if (indexToDelete >= 0) newState.users.splice(indexToDelete, 1);
                break;
            
                case CompanyActionType.uploadImage :
                    newState.users.push(action.payload);
                   
                break;
            
            
    }
    return newState;
}

export const companyStore = createStore(companyReducer);