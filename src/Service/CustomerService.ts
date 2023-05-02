import axios from "axios";
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";

import CustomerUserModel from "../Models/CustomerUserModel";
import CouponCatagory from "../Models/CouponCatagory";
import { CustomerActionType, customerStore, fetchCouponsAction } from "../Redux/CustomerState";
import { companyStore } from "../Redux/CompanyState";
import { ProductActionType, fetchProductAction, productsStore } from "../Redux/CouponState";
import Catagory from "../Models/CouponCatagory";

class CustomerService {

    public token: string;
    constructor () {
        this.token = sessionStorage.getItem("token");
        
    }
 
    public async updateCustomer(customer : CustomerUserModel){
        
        const response = await axios.put<CustomerUserModel>(appConfig.customerServiceUrl + "updateCustomer" , customer);
        const updatedCustomer = response.data;
        customerStore.dispatch({type: CustomerActionType.UpdateCustomer, payload: updatedCustomer});
        return updatedCustomer;
    }
    
    public async customerCoupons() : Promise<CouponModel[]>{
        
        const response = await axios.get<CouponModel[]>(appConfig.customerServiceUrl + "customerCoupons/" );
        const customerCoupons = response.data;
        return customerCoupons;
    }
    
    public async findCouponById(id : number) : Promise<CouponModel>{
        
        const response = await axios.get<CouponModel>(appConfig.customerServiceUrl + "findCouponById?coupon_id=" + id);
        const coupon = response.data;
        return coupon;
    }
    public async findCouponByCatagory(catagory : Catagory) : Promise<CouponModel[]>{
        console.log(catagory);
        const response = await axios.get<CouponModel[]>(appConfig.customerServiceUrl + "findCouponByCatagory?catagory=" + catagory);
        const couponList = response.data;
        return couponList;
    }
    public async allCoupons() : Promise<CouponModel[]>{

        const response = await axios.get<CouponModel[]>(appConfig.customerServiceUrl + "allCoupons");
        const coupons = response.data;
        productsStore.dispatch({type: ProductActionType.FetchProducts, payload: coupons});

        return coupons;
   
     }
   
     
    public async addPurches(customerId : number , couponId: number){
            console.log(customerId , couponId);
        // await axios.post<void>(appConfig.customerServiceUrl + "addPurches/" + customerId + "/" + couponId);
        await axios.post<void>(appConfig.customerServiceUrl + "addPurches?customerID=" + customerId + "&couponID=" + couponId);
        
    }
    public async deletePurches(customerId : number , couponId: number){
        
        await axios.delete<void>(appConfig.customerServiceUrl + "deletePurches?customerID=" + customerId + "&couponID=" + couponId);
        
    }
    
    
}
const customerService = new CustomerService();

export default customerService;