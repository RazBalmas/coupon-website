import axios from "axios";
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";
import CompanyUserModel from "../Models/CompanyUserModel";
import CustomerUserModel from "../Models/CustomerUserModel";

class AdminService {
    public async getAllCoupons() : Promise<CouponModel[]>{
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "allCoupons/");
        const coupons = response.data;
        return coupons;
    }

    public async getOneCoupon(id : number) : Promise<CouponModel>{

        const response = await axios.get<CouponModel>(appConfig.adminServiceUrl + "getOneCoupon/" + id);
        const coupon = response.data;
        return coupon;
    }
  
    public async companyExistsById(id : number) : Promise<boolean>{

        const response = await axios.get<boolean>(appConfig.adminServiceUrl + "companyExistsById/" + id);
        const exists = response.data;
        return exists;
    }
    public async companyExistsByEmail(email : string) : Promise<boolean>{

        const response = await axios.get<boolean>(appConfig.adminServiceUrl + "companyExistsByEmail/" + email);
        const exists = response.data;
        return exists;
    }
    public async addCompany(company : CompanyUserModel) : Promise<number>{

        const response = await axios.post<CompanyUserModel>(appConfig.adminServiceUrl + "addCompany/" + company);
        const id = response.data;
        return id.id;
    }
    public async updateCompany(company : CompanyUserModel){
        
        await axios.put<void>(appConfig.adminServiceUrl + "updateCompany/" + company);
        
    }
    public async deleteCompany(id : number) {
        
        await axios.delete<void>(appConfig.adminServiceUrl + "deleteCompany/" + id);
    }
    
    public async getAllCompany() : Promise<CompanyUserModel[]>{
    
        const response = await axios.get<CompanyUserModel[]>(appConfig.adminServiceUrl + "getAllCompany/");
        const id = response.data;
        return id;
    }
 
    public async getCompanyById(id : number) : Promise<CompanyUserModel>{
    
        const response = await axios.get<CompanyUserModel>(appConfig.adminServiceUrl + "getCompanyById/" + id);
        const company = response.data;
        return company;
    }
    public async getCompanyByEmail(email : string) : Promise<CompanyUserModel>{
    
        const response = await axios.get<CompanyUserModel>(appConfig.adminServiceUrl + "getCompanyByEmail/" + email);
        const company = response.data;
        return company;
    }
    
    public async addCoupon(coupon : CouponModel){
        
        await axios.post<void>(appConfig.adminServiceUrl + "addCoupon/" + coupon);
        
    }
    public async addCustomer(customer : CustomerUserModel){
        
        await axios.post<void>(appConfig.adminServiceUrl + "addCustomer/" + customer);
        
    }
    
    public async updateCoupon(coupon : CouponModel){
        
        await axios.put<void>(appConfig.adminServiceUrl + "updateCoupon/" + coupon);
        
    }
    public async deleteCoupon(id : number){
        
        await axios.delete<void>(appConfig.adminServiceUrl + "deleteCoupon/" + id);
        
    }
    
    public async CouponsByCompanyId(id : number) : Promise<CouponModel[]>{
    
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "getCompanyByEmail/" + id);
        const companyCoupons = response.data;
        return companyCoupons;
    }
    
    public async CouponById(id : number) : Promise<CouponModel>{
    
        const response = await axios.get<CouponModel>(appConfig.adminServiceUrl + "CouponById/" + id);
        const coupon = response.data;
        return coupon;
    }
    public async CouponByTitle(title : string) : Promise<CouponModel>{
    
        const response = await axios.get<CouponModel>(appConfig.adminServiceUrl + "CouponByTitle/" + title);
        const coupon = response.data;
        return coupon;
    }
    public async allCoupons() : Promise<CouponModel[]>{
    
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "allCoupons/");
        const allCoupons = response.data;
        return allCoupons;
    }
    
    public async customerExistsById(id : number) : Promise<boolean>{
    
        const response = await axios.get<boolean>(appConfig.adminServiceUrl + "customerExistsById/" + id);
        const exists = response.data;
        return exists;
    }
    
    public async customerExistsByEmail(email : string) : Promise<boolean>{
    
        const response = await axios.get<boolean>(appConfig.adminServiceUrl + "customerExistsByEmail/" + email);
        const exists = response.data;
        return exists;
    }

    public async deleteCustomer(id : number){
        
        await axios.delete<void>(appConfig.adminServiceUrl + "deleteCustomer/" + id);
        
    }
    
    public async allCustomers() : Promise<CustomerUserModel[]>{
    
        const response = await axios.get<CustomerUserModel[]>(appConfig.adminServiceUrl + "allCustomers/");
        const allCustomers = response.data;
        return allCustomers;
    }
    
    public async customerById(id : number) : Promise<CustomerUserModel>{
    
        const response = await axios.get<CustomerUserModel>(appConfig.adminServiceUrl + "customerById/" + id);
        const customer = response.data;
        return customer;
    }
    
    public async customerByEmail(email : string) : Promise<CustomerUserModel>{
        
        const response = await axios.get<CustomerUserModel>(appConfig.adminServiceUrl + "customerByEmail/" + email);
        const customer = response.data;
        return customer;
    }
    
    public async customerCoupons(id : number) : Promise<CouponModel[]>{
        
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "customerByEmail/" + id);
        const customer = response.data;
        return customer;
    }
    
    public async addPurches(customerId : number , couponId: number){
        
        await axios.post<void>(appConfig.adminServiceUrl + "addPurches/" + customerId + "/" + couponId);
        
    }
    public async deletePurches(customerId : number , couponId: number){
        
        await axios.delete<void>(appConfig.adminServiceUrl + "deletePurches/" + customerId + "/" + couponId);
        
    }
    
    
    

    
}
const adminService = new AdminService();

export default adminService;