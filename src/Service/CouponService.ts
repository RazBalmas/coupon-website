import axios from "axios";
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";
import CompanyUserModel from "../Models/CompanyUserModel";

class CouponService {
    public async getAllCoupons() : Promise<CouponModel[]>{
        const response = await axios.get<CouponModel[]>(appConfig.generalServiceUrl + "allCoupons/");
        const coupons = response.data;
        return coupons;
    }

    
}
const couponService = new CouponService();

export default couponService;