import CouponModel from "../../../Models/CouponModel";
import CustomerUserModel from "../../../Models/CustomerUserModel";
import adminService from "../../../Service/AdminService";
import customerService from "../../../Service/CustomerService";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import "./DeletePurches.css";
import { useState, useEffect} from "react";

function DeletePurches(): JSX.Element {
   
    const [customerId, setCustomerId] = useState<number>();
    const [couponId, setCouponId] = useState<number>();
    const[currentCustomer, setCurrentCustomer] = useState<CustomerUserModel>(undefined);


    
    async function getCustomer(id:number) {
        
        const customer = await adminService.customerById(id);
        setCurrentCustomer(customer);
    }

    const[customerCoupons, setCurrentCoupons] = useState<CouponModel[]>(undefined);

   
  
        async function getCoupons(id:number) {
            
            const customerCoupons = await adminService.customerCoupons(id);
            setCurrentCoupons(customerCoupons);
        }
        
    
    async function send() {
        try {

            await customerService.deletePurches(currentCustomer.id, couponId);
            alert("Success!")
            

        } catch (err: any) {
            alert("Failed!")
        }}

       

    return (
        <div className="DeletePurches">
			
            <span>Customer: </span>

         
      <label>
        <input type="number"  onChange={(e) =>{
          const id = parseInt(e.target.value);
            setCustomerId(id); }} />

      </label>
      <button type="submit" onClick={() => {getCustomer(customerId);
        getCoupons(customerId);
    }}>Submit</button>
    


            {currentCustomer !== undefined &&<>
                {customerCoupons !== undefined && <>
                
                    <hr />
            {customerCoupons.map((p)=>(
                <CouponCard key={p.id} coupon={p}/>
                ))}
                Coupon Id to delete perches:
                <input type="number"  onChange={(e) =>{
                  const id = parseInt(e.target.value);
                    setCouponId(id); }} />
                  <button type="submit" onClick={() => send()}>Submit</button>
                </> }
            
            </>}

        </div>
    );
}

export default DeletePurches;
