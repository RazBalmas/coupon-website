import { useState } from "react";
import { AuthState, authStore } from "../../../Redux/AuthState";
import authService from "../../../Service/AuthService";
import customerService from "../../../Service/CustomerService";
import "./AddPurches.css";
import CustomerUserModel from "../../../Models/CustomerUserModel";
import adminService from "../../../Service/AdminService";
import CouponModel from "../../../Models/CouponModel";
import { useForm } from "react-hook-form";
import ClientType from "../../../Models/ClientType";

function AddPurches(): JSX.Element {
  
    const[currentCustomer, setCurrentCustomer] = useState<CustomerUserModel>(undefined);

    interface UpdateCompanyProps {
        currentCustomer: CustomerUserModel;
      }

    
    async function getCustomer(id:number) {
        
        const customer = await adminService.customerById(id);
        setCurrentCustomer(customer);
    }

    const[currentCoupon, setCurrentCoupon] = useState<CouponModel>(undefined);

    interface UpdateCouponProps {
        currentCoupon: CouponModel;
      }
    
    async function getCoupon(id:number) {
        
        const coupon = await adminService.CouponById(id);
        setCurrentCoupon(coupon);
    }

   

    async function send() {
         try {

             await adminService.addPurches(currentCustomer.id,currentCoupon.id);
             alert("Success!")
             
 
         } catch (err: any) {
             alert("Failed!")
         }
    } 
    return (
        <div className="AddPurches">
			
            <span>Customer: </span>

            <input type="number" onChange={(e) => {
            const id = parseInt(e.target.value);
            getCustomer(id);
            }}/>
            <br />
            <span>Coupon: </span>

            <input type="number" onChange={(e) => {
            const id = parseInt(e.target.value);
            getCoupon(id);
            }}/>

            {currentCustomer !== undefined &&<>
    
                <div>
            <legend>Id : {currentCustomer.id}</legend>
            <br />
            <legend>Name : {currentCustomer.firstName} {currentCustomer.lastName}</legend>
            <br />
            <legend>Email : {currentCustomer.email}</legend>
            <br />
            
            <legend>{currentCustomer.clientType}</legend>
            </div>
           
            </>}

            {currentCoupon !== undefined &&<>
    
            <div>
            <legend>Id : {currentCoupon.id}</legend>
            <br />
            <legend>Coupon Name : {currentCoupon.title}</legend>
            <br />
            <legend>Category : {currentCoupon.catagory}</legend>
            <br />
            <legend>price : {currentCoupon.price}</legend>
            <br />
            <legend>Only {currentCoupon.amount} Left!</legend>
            <br />
            <legend>End of Coupon : {currentCoupon.endDate.toString()}</legend>
            <br />
            <p>{currentCoupon.description}</p>
            </div>
          

            </>}
<button onClick={() => send()}>submit</button>
        
        </div>
    );
}

export default AddPurches;
