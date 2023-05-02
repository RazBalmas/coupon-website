import axios from "axios";
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";
import CompanyUserModel from "../Models/CompanyUserModel";
import CustomerUserModel from "../Models/CustomerUserModel";
import companyService from "./CompanyService";
import { CompanyActionType, addCompanyAction, companyStore, fetchCompanyAction, postUploadImage, setAuthHeader } from "../Redux/CompanyState";
import { authStore } from "../Redux/AuthState";
import interceptors from "../Utils/Interceptors";


class AdminService {
    
    public token: string;
    constructor () {
        this.token = sessionStorage.getItem("token");
        
    }


    public async getAllCoupons() : Promise<CouponModel[]>{
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "allCoupons");
        const coupons = response.data;
        companyStore.dispatch({type: CompanyActionType.getCompany, payload: coupons});

        return coupons;
    }

    public async getOneCoupon(id : number) : Promise<CouponModel>{
        console.log(id);
        const response = await axios.get<CouponModel>(appConfig.adminServiceUrl + "CouponById?coupon_id=" + id);
        const coupon = response.data;
        return coupon;
    }
    
    public async companyExistsById(id : number) : Promise<boolean>{
        
        const response = await axios.get<boolean>(appConfig.adminServiceUrl + "companyExistsById?companyId=" + id);
        const exists = response.data;
        console.log(exists);
        return exists;
    }
    public async companyExistsByEmail(email : string) : Promise<boolean>{
        console.log(email);
        const response = await axios.get<boolean>(appConfig.adminServiceUrl + "companyExistsByEmail?email=" + email);
        const exists = response.data;
        console.log(exists);
        return exists;
    }
    public async addCompany(company : CompanyUserModel) : Promise<CompanyUserModel>{
   
        const response = await axios.post<CompanyUserModel>(appConfig.adminServiceUrl + "addCompany" , company);
        const updatedCompany = response.data;
        companyStore.dispatch({type: CompanyActionType.addCompany, payload: updatedCompany});
        return updatedCompany;
    }
    public async updateCompany(company : CompanyUserModel){
        
        const response =  await axios.put<CompanyUserModel>(appConfig.adminServiceUrl + "updateCompany", company);
        const updatedCompany = response.data;
        companyStore.dispatch({type: CompanyActionType.UpdateCompany, payload: updatedCompany});
        return updatedCompany;
    }
    public async deleteCompany(id : number) {
        
        await axios.delete<void>(appConfig.adminServiceUrl + "deleteCompany?companyId=" + id);
    }
    
    public async getAllCompany() : Promise<CompanyUserModel[]>{
    
        const response = await axios.get<CompanyUserModel[]>(appConfig.adminServiceUrl + "getAllCompany/");
        const allCompany = response.data;
        return allCompany;
    }
 
    public async getCompanyById(id : number) : Promise<CompanyUserModel>{
    
        console.log(id);
        const response = await axios.get<CompanyUserModel>(appConfig.adminServiceUrl + "getCompanyById?id=" + id);
        const company = response.data;
        companyStore.dispatch(fetchCompanyAction(company));
        return company;
    }
    public async getCompanyByEmail(email : string) : Promise<CompanyUserModel>{
    
        const response = await axios.get<CompanyUserModel>(appConfig.adminServiceUrl + "getCompanyByEmail?email=" + email);
        const company = response.data;
        return company;
    }
    
    public async addCoupon(coupon : CouponModel){
        
        await axios.post<void>(appConfig.adminServiceUrl + "addCoupon" , coupon);
        
    }
    public async addCustomer(customer : CustomerUserModel){
        
        const response = await axios.post<void>(appConfig.adminServiceUrl + "addCustomer/" , customer);
        const addedCustomer = response.data;
        return addedCustomer;
    }
    
    public async updateCoupon(coupon : CouponModel){
        
        await axios.put<void>(appConfig.adminServiceUrl + "updateCoupon/" + coupon);
        
    }
    public async deleteCoupon(id : number){
        try{
            await axios.delete<void>(appConfig.adminServiceUrl + "deleteCoupon?coupon_id=" + id);
            alert("Coupon was removed sucssefully!")
        }
        catch{alert("Failed..")}
    }
    
    public async couponsByCompanyId(id : number) : Promise<CouponModel[]>{
    
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "CouponsByCompanyId?company_id=" + id);
        const companyCoupons = response.data;
        return companyCoupons;
    }
    
    public async CouponById(id : number) : Promise<CouponModel>{
    
        const response = await axios.get<CouponModel>(appConfig.adminServiceUrl + "CouponById?coupon_id=" + id);
        const coupon = response.data;
        return coupon;
    }
    public async CouponByTitle(title : string) : Promise<CouponModel>{
    
        const response = await axios.get<CouponModel>(appConfig.adminServiceUrl + "CouponByTitle?title=" + title);
        const coupon = response.data;
        return coupon;
    }
    public async allCoupons() : Promise<CouponModel[]>{
    
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "allCoupons/");
        const allCoupons = response.data;
        return allCoupons;
    }
    
    public async customerExistsById(id : number) : Promise<boolean>{
    
        const response = await axios.get<boolean>(appConfig.adminServiceUrl + "customerExistsById?Id=" + id);
        const exists = response.data;
        return exists;
    }
    
    public async customerExistsByEmail(email : string) : Promise<boolean>{
    
        const response = await axios.get<boolean>(appConfig.adminServiceUrl + "customerExistsByEmail?email=" + email);
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
    
        const response = await axios.get<CustomerUserModel>(appConfig.adminServiceUrl + "customerById?customerID=" + id);
        const customer = response.data;
        return customer;
    }
    
    public async customerByEmail(email : string) : Promise<CustomerUserModel>{
        
        const response = await axios.get<CustomerUserModel>(appConfig.adminServiceUrl + "customerByEmail?email=" + email);
        const customer = response.data;
        return customer;
    }
    
    public async customerCoupons(id : number) : Promise<CouponModel[]>{
        
        const response = await axios.get<CouponModel[]>(appConfig.adminServiceUrl + "customerCoupons?customerID=" + id);
        const customer = response.data;
        return customer;
    }
    
    public async addPurches(customerId : number , couponId: number){
        
        await axios.post<void>(appConfig.adminServiceUrl + "addPurches?customerID=" + customerId + "&couponID=" + couponId);
        
    }
    public async deletePurches(customerId : number , couponId: number){
        
        await axios.delete<void>(appConfig.adminServiceUrl + "deletePurches?customerID=" + customerId + "&couponID=" + couponId);
        
    }

    public async uploadImage(file : File) : Promise<string>{
    
        companyStore.dispatch(postUploadImage(file));
        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post<string>(appConfig.adminServiceUrl + "uploadImage", formData);
        const imageName = response.data;
        return imageName;
    }

    public async getImage(fileName : string) : Promise<File>{
    
       
        const response = await axios.get<File>(appConfig.adminServiceUrl + "/getImage/{}" + fileName);
        const image = response.data;
        return image;
    }
    
    
    

    
}
const adminService = new AdminService();

export default adminService;