
import { createStore } from "redux";
import CompanyUserModel from "../Models/CompanyUserModel";
import UserModel from "../Models/UserModel";
import { AuthState, authStore } from "./AuthState";
import CouponModel from "../Models/CouponModel";


export class CouponState {
    public coupons: CouponModel[] = [];
}


export enum CouponActionType {
    addCoupon,
    UpdateCoupon,
    getCoupon,
    deleteCoupon,
  
}

export interface CouponAction {
    type : CouponActionType;
    payload :any;
}

export function fetchCouponAction(
    coupon : CouponModel

) : CouponAction {

    return {type : CouponActionType.getCoupon , payload : coupon };
}
export function addCouponAction(
    coupon : CouponModel

) : CouponAction {

    return {type : CouponActionType.addCoupon , payload : coupon };
}
export function deleteCouponAction(
    id : number

) : CouponAction {

    return {type : CouponActionType.deleteCoupon , payload : id };
}
export function updateCouponAction(
    coupon : CouponModel

) : CouponAction {

    return {type : CouponActionType.UpdateCoupon , payload : coupon };
}


export const setAuthHeader = (token : string) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
    return { headers };
  };

export function couponReducer (currentState : CouponState = new CouponState(), action : CouponAction) : CouponState {
    const newState = {... currentState};
    switch(action.type) {
        case CouponActionType.getCoupon :
            newState.coupons  = (action.payload);
            break;
            
        case CouponActionType.addCoupon :
                newState.coupons.push(action.payload);
                break;
        case CouponActionType.UpdateCoupon :
                const indexToUpdate = newState.coupons.findIndex(p => p.id === action.payload);
                if (indexToUpdate >= 0) newState.coupons[indexToUpdate] = action.payload;
                break;
                case CouponActionType.deleteCoupon :
                    const indexToDelete = newState.coupons = action.payload.delete()
                    if (indexToDelete >= 0) newState.coupons.splice(indexToDelete, 1);
                break;
            
            
    }
    return newState;
}

export const companyStore = createStore(couponReducer);