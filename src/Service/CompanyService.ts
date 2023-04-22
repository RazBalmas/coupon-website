import axios from "axios";
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";
import CompanyUserModel from "../Models/CompanyUserModel";
import CustomerUserModel from "../Models/CustomerUserModel";

class CompanyService {
    
    
    public async updateCompany(company : CompanyUserModel){
        
        await axios.put<void>(appConfig.adminServiceUrl + "updateCompany/" + company);
        
    }
    
    public async addCoupon(coupon : CouponModel) : Promise<number> {
        
        const response = await axios.post<number>(appConfig.adminServiceUrl + "addCoupon/" + coupon);
        const id = response.data;
        return id;
    }
    
    
    public async updateCoupon(coupon : CouponModel){
        
        await axios.put<void>(appConfig.adminServiceUrl + "updateCoupon/" + coupon);
        
    }
    
    public async deleteCoupon(id : number){
        
        await axios.delete<void>(appConfig.adminServiceUrl + "deleteCoupon/" + id);
        
    }
    
    public async allMyCoupons() : Promise<CouponModel[]>{
    
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "allMyCoupons/");
        const companyCoupons = response.data;
        return companyCoupons;
    }
 
    
    
    

    
}
const companyService = new CompanyService();

export default companyService;