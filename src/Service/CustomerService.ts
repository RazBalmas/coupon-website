import axios from "axios";
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";
import CompanyUserModel from "../Models/CompanyUserModel";
import CustomerUserModel from "../Models/CustomerUserModel";
import CouponCatagory from "../Models/CouponCatagory";

class CustomerService {

 
    public async updateCustomer(customer : CustomerUserModel){
        
        await axios.put<void>(appConfig.adminServiceUrl + "updateCustomer/" + customer);
        
    }
    
    public async customerCoupons() : Promise<CouponModel[]>{
    
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "customerCoupons/" );
        const companyCoupons = response.data;
        return companyCoupons;
    }
    
    public async findCouponById(id : number) : Promise<CouponModel>{
    
        const response = await axios.get<CouponModel>(appConfig.adminServiceUrl + "findCouponById/" + id);
        const coupon = response.data;
        return coupon;
    }
    public async findCouponByCatagory(catagory : CouponCatagory) : Promise<CouponModel[]>{
    
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "findCouponByCatagory/" + catagory);
        const couponList = response.data;
        return couponList;
    }
    public async allCoupons() : Promise<CouponModel[]>{
    
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "allCoupons/");
        const allCoupons = response.data;
        return allCoupons;
    }
   
     
    public async addPurches(customerId : number , couponId: number){
        
        await axios.post<void>(appConfig.adminServiceUrl + "addPurches/" + customerId + "/" + couponId);
        
    }
    public async deletePurches(customerId : number , couponId: number){
        
        await axios.delete<void>(appConfig.adminServiceUrl + "deletePurches/" + customerId + "/" + couponId);
        
    }
    
    
    

    
}
const customerService = new CustomerService();

export default customerService;