import CouponModel from "../../../Models/CouponModel";
import CustomerUserModel from "../../../Models/CustomerUserModel";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import adminService from "../../../Service/AdminService";
import customerService from "../../../Service/CustomerService";
import "./AddPurchesByCustomer.css";
import { useState, useEffect } from "react";

function AddPurchesByCustomer(): JSX.Element {
     
    const[currentCustomer, setCurrentCustomer] = useState<UserModel>(undefined);

    useEffect(() => {
        async function getCurrentCustomer() {
            setCurrentCustomer(authStore.getState().user);

            authStore.subscribe(()=> {
                setCurrentCustomer(authStore.getState().user);
                });
    
                
        
    }
    getCurrentCustomer();
    })

    const[currentCustomerCoupon, setCurrentCustomerCoupon] = useState<CouponModel>(undefined);

  
    
    async function getCoupon(id:number) {
        let couponForPurches : CouponModel;
        couponForPurches = await customerService.findCouponById(id) as undefined as CouponModel;
        setCurrentCustomerCoupon(couponForPurches);
    }

   

    const send = async (couponId : number) => {
         try {
                console.log(currentCustomer.id , couponId);
             await customerService.addPurches(currentCustomer.id,couponId);
             alert("Success!")
             
 
         } catch (err: any) {
             alert("Failed!")
         }
    } 
    return (
        <div className="AddPurches">
			
           

          
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

            {currentCustomerCoupon !== undefined &&<>
    
            <div>
            <legend>Id : {currentCustomerCoupon.id}</legend>
            <br />
            <legend>Coupon Name : {currentCustomerCoupon.title}</legend>
            <br />
            <legend>Category : {currentCustomerCoupon.catagory}</legend>
            <br />
            <legend>price : {currentCustomerCoupon.price}</legend>
            <br />
            <legend>Only {currentCustomerCoupon.amount} Left!</legend>
            <br />
            <legend>End of Coupon : {currentCustomerCoupon.endDate.toString()}</legend>
            <br />
            <p>{currentCustomerCoupon.description}</p>
            </div>
          

            </>}
<button onClick={() => {
    console.log(currentCustomerCoupon.id)
    console.log(currentCustomer.id)
     send(currentCustomerCoupon.id)}}>submit</button>
        
        </div>
    );}

export default AddPurchesByCustomer;
