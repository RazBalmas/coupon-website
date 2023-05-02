import { useForm } from "react-hook-form";
import CouponModel from "../../../Models/CouponModel";
import { AuthState } from "../../../Redux/AuthState";
import "./UpdateCoupon.css";
import companyService from "../../../Service/CompanyService";
import Catagory from "../../../Models/CouponCatagory";
import customerService from "../../../Service/CustomerService";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import { useState } from "react";
import adminService from "../../../Service/AdminService";

function UpdateCoupon(): JSX.Element {
    
    const[currentCoupon, setCurrentCoupon] = useState<CouponModel>(undefined);

    interface UpdateCouponProps {
        currentCoupon: CouponModel;
      }

    const {register, handleSubmit} = useForm <CouponModel>();
    
    async function getCoupon(id:number) {
        
        const coupon = await adminService.CouponById(id);
        setCurrentCoupon(coupon);
    }

 

    

    async function send(credentials: CouponModel) {
         try {

             await companyService.updateCoupon(credentials);
             alert("Success!")
             
 
         } catch (err: any) {
             alert("Failed!")
         }
    } 
    
    return (
        <div className="UpdateCoupon">

            <span>Coupon To Update Id :</span>

                <input type="number" onChange={(e) => {
                    const id = parseInt(e.target.value);
                    getCoupon(id);
                }}/>

                    {currentCoupon !== undefined &&
        			<form onSubmit={handleSubmit(send)}>

<legend>Title : </legend>
<input type="text"  {...register("title")} placeholder={currentCoupon.title}/>
<br />

<legend>Category Type : </legend>
    <select className="Catagory-Input" defaultValue={currentCoupon.catagory} size={1} required {...register("catagory")}>
        <option disabled value="">Select Category :</option>
        <option value={Catagory.APLLIENCES}>Appliances</option>
        <option value={Catagory.AUTOMOBILE}>Automobile</option>
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
<input type="number" required {...register("price")} defaultValue={currentCoupon.price}/>
<br />
<br />

<legend>Amount of coupons : </legend>
<input type="number" required {...register("amount")} defaultValue={currentCoupon.amount}/>
<br />
<br />
<legend>Start Date : </legend>
<input type="date" required {...register("startDate")} defaultValue={currentCoupon.startDate.toString()}/>
<br />
<br />
<legend>End Date : </legend>
<input type="date" required {...register("endDate")} defaultValue={currentCoupon.endDate.toString()} />
<br />
<br />

<legend>Description : </legend>
<input type="text" {...register("description")} placeholder= {currentCoupon.description}/>

<br />
<br />

<legend>Image : </legend>
<br />
<input type="file" {...register("image")}/>

<br />
<br />

<input type="number" {...register("id")}  value={currentCoupon.id} disabled/>


<br />
<button>submit</button>
</form>
}
</div>
    );
}

export default UpdateCoupon;
