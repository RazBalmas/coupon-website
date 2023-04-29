import { AuthState } from "../../../Redux/AuthState";
import customerService from "../../../Service/CustomerService";
import "./AddPurches.css";

function AddPurches(): JSX.Element {
    
    let authState = new AuthState();
    const userDetails = {
        company : authState.user
    }
   
   

    async function send(couponId: number) {
         try {

             await customerService.addPurches(userDetails.company.id,couponId);
             alert("Success!")
             
 
         } catch (err: any) {
             alert("Failed!")
         }
    } 
    return (
        <div className="AddPurches">
			<legend>Coupon id : </legend>
        <input type="number"  {...send} />
        </div>
    );
}

export default AddPurches;
