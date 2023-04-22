import axios from "axios";
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";
import CompanyUserModel from "../Models/CompanyUserModel";

class GeneralService {
    public async getAllCoupons() : Promise<CouponModel[]>{
        const response = await axios.get<CouponModel[]>(appConfig.generalServiceUrl + "allCoupons/");
        const coupons = response.data;
        return coupons;
    }

    
}
const generalService = new GeneralService();

export default generalService;