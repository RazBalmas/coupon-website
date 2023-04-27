import "./AddCoupon.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ClientType from "../../../Models/ClientType";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Service/AuthService";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import { getValue } from "@testing-library/user-event/dist/utils";
import adminService from "../../../Service/AdminService";
import CouponModel from "../../../Models/CouponModel";
import Catagory from "../../../Models/CouponCatagory";
import companyService from "../../../Service/CompanyService";

function AddCoupon(): JSX.Element {
    const {register, handleSubmit} = useForm <CouponModel>();
   
 

   async function send(credentials: CouponModel) {
        try {
           
            await companyService.addCoupon(credentials);
            alert("Success!")
            

        } catch (err: any) {
            alert("Failed!")
        }
   } 
    return (
        <div className="AddCoupon">
			<form onSubmit={handleSubmit(send)}>

                <legend>Title : </legend>
                <input type="text"  {...register("title")} />
                <br />

                <legend>Category Type : </legend>
                    <select className="Catagory-Input" defaultValue="" size={1} required {...register("catagory")}>
                        <option disabled value="">Select Category :</option>
                        <option value={Catagory.APLLIENCES}>Appliances</option>
                        <option value={ Catagory.AUTOMOBILE}>Automobile</option>
                        <option value={Catagory.ELECTRICITY}>Electricity</option>
                        <option value={Catagory.FOOD}>Food</option>
                        <option value={Catagory.GARDENING}>Gardening</option>
                        <option value={Catagory.HEALTH_CARE}>Health Care</option>
                        <option value={Catagory.HOME}>Home</option>
                        <option value={Catagory.RESTAURANT}>Restaurant</option>
                        <option value={Catagory.VACATION}>Vacation</option>
                    </select>
                <br />
                <br />
                <legend>Price per unit : </legend>
                <input type="number" required {...register("price")}/>
                <br />
                <br />

                <legend>Amount of coupons : </legend>
                <input type="number" required {...register("amount")} />
                <br />
                <br />
                <legend>Start Date : </legend>
                <input type="date" required {...register("startDate")} />
                <br />
                <br />
                <legend>End Date : </legend>
                <input type="date" required {...register("endDate")} />
                <br />
                <br />
                
                <legend>Description : </legend>
                <input type="text" {...register("description")}/>
               
                <br />
                <br />

                <legend>Image : </legend>
                <br />
                <input type="file" {...register("image")}/>
               
                <br />
                <br />

                <input type="number" {...register("id")}  value={0} disabled/>
              

                <br />
                <button>submit</button>
            </form>
        </div>
    );
}

export default AddCoupon;
