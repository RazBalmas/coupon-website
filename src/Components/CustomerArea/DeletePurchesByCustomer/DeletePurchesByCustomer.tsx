import CouponModel from "../../../Models/CouponModel";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import customerService from "../../../Service/CustomerService";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import "./DeletePurchesByCustomer.css";
import { useState, useEffect} from "react";

function DeletePurchesByCustomer(): JSX.Element {
 
  


    
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
        useEffect(() => {
            async function getCoupons() {
                
                const customerCoupons = await customerService.customerCoupons();
                setCurrentCoupons(customerCoupons);
            }
            
            getCoupons();
        }
        , []) 

    const[customerCoupons, setCurrentCoupons] = useState<CouponModel[]>(undefined);
    const[deleteIndex, setDeleteIndex] = useState<number>(undefined);

   
  
        
    
    async function send() {
        try {

            await customerService.deletePurches(currentCustomer.id, deleteIndex);
            alert("Success!")
            

        } catch (err: any) {
            alert("Failed!")
        }}

       

    return (
        <div className="DeletePurches">
	  <span>Coupon: </span>

<input type="number" onChange={(e) => {
const id = parseInt(e.target.value);
setDeleteIndex(id);
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

{customerCoupons !== undefined &&<>

	<hr />
            {customerCoupons.map((p)=>(
                <CouponCard key={p.id} coupon={p}/>
            ) )}
</>}
<button type="submit" onClick={() => {send()}}>Submit</button>
</div> )}
export default DeletePurchesByCustomer;
