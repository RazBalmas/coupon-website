import axios from "axios";
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";
import CompanyUserModel from "../Models/CompanyUserModel";

class CompanyService {
    
    
    public async updateCompany(company : CompanyUserModel){
        
        await axios.put<void>(appConfig.companyServiceUrl + "updateCompany/" + company);
        
    }
    
    public async addCoupon(coupon : CouponModel) : Promise<number> {
        
        const response = await axios.post<number>(appConfig.companyServiceUrl + "addCoupon/" + coupon);
        const id = response.data;
        return id;
    }
    
    
    public async updateCoupon(coupon : CouponModel){
        
        await axios.put<void>(appConfig.companyServiceUrl + "updateCoupon/" + coupon);
        
    }
    
    public async deleteCoupon(id : number){
        
        await axios.delete<void>(appConfig.companyServiceUrl + "deleteCoupon/" + id);
        
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