import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import AdminUserModel from "../Models/AdminUserModel";
import ClientType from "../Models/ClientType";
import CompanyUserModel from "../Models/CompanyUserModel";
import CustomerUserModel from "../Models/CustomerUserModel";
import UserModel from "../Models/UserModel";



// 1. Application Sate
export class AuthState{
    public user: UserModel;
    public token: string;

    public constructor() {
        this.token = sessionStorage.getItem("token");
        if(this.token){
            this.user = extractUser(this.token);
        }
    }
}

// 2. Action Type
export enum AuthActionType{
    Login,
    Logout
}

// 3. Action

export interface AuthAction{
    type: AuthActionType;
    payload?: string;
}

// 4. Reducer - a function preforming the needed operation.
// when we call Despatch we call this function.
export function authReducer(currentState = new AuthState() , action: AuthAction) : AuthState{

    // a. Duplicate the state
    // {... } - spread operator true-duplicates the object.
    const newState = {...currentState};

    // b. Preform the action on the duplicated state

    switch(action.type) {

        case AuthActionType.Login:
        
        newState.token = action.payload;
        newState.user = extractUser(newState.token);
        sessionStorage.setItem("token" , newState.token);
        break;
        
        
        case AuthActionType.Logout:
            newState.token = null;
            newState.user=null;
        
        break;

    }
    // c. Return the duplicated state

    return newState;
}
        
function extractUser(token: string): UserModel {
    
    let user: UserModel;
    const container: any = jwtDecode(token);
    
    if(container.ClientType=== ClientType.CUSTOMER){
        user = new CustomerUserModel(container.clientType, container.sub, container.email, container.password,container.firstName, container.lastName);
    }
    else if(container.ClientType=== ClientType.COMPANY){
       user = new CompanyUserModel(container.clientType, container.sub, container.email, container.password, container.name);
       
    }
    else {
       user = new AdminUserModel(container.clientType, container.sub, container.email, container.password);
        
    }

    return user;
}

export const authStore = createStore(authReducer);








