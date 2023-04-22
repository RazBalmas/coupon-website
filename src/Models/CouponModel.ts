import CompanyUserModel from "./CompanyUserModel";
import CouponCatagory from "./CouponCatagory";
import CustomerUserModel from "./CustomerUserModel";

class CouponModel {
     id !: number;
	
	amount : number;

	price : number;

	startDate : Date;

    endDate : Date;

	title : string;

	description : string;

	image : string;

	catagory : CouponCatagory;

    company : CompanyUserModel;

    customers ?: CustomerUserModel;
}
export default CouponModel;