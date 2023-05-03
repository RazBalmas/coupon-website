import axios from "axios";
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";
import CompanyUserModel from "../Models/CompanyUserModel";

class CompanyService {
    
    
    public async updateCompany(company : CompanyUserModel){
        
        await axios.put<void>(appConfig.companyServiceUrl + "updateCompany" , company);
        
    }
    
    public async addCoupon(coupon : CouponModel) {
        
        await axios.post<void>(appConfig.companyServiceUrl + "addCoupon" , coupon);
        
    }
    
    
    public async updateCoupon(coupon : CouponModel){
        
        await axios.put<void>(appConfig.companyServiceUrl + "updateCoupon" , coupon);
        
    }
    
    public async deleteCoupon(id : number){
        
        await axios.delete<void>(appConfig.companyServiceUrl + "deleteCoupon?coupon_id=" + id);
        
    }
    
    public async allMyCoupons() : Promise<CouponModel[]>{
    
        const response = await axios.get<CouponModel[]>(appConfig.companyServiceUrl + "allMyCoupons/");
        const companyCoupons = response.data;
        return companyCoupons;
    }
    
    public async uploadImage(file : File) : Promise<string>{
        // const formData = new FormData();
        // formData.append("imageFile", file);
        // console.log(formData);
        const response = await axios.post<string>(appConfig.companyServiceUrl + "uploadImage" , file);
        const imageName = response.data;
        return imageName;
    }
 
    
    
    

    
}
const companyService = new CompanyService();

export default companyService;