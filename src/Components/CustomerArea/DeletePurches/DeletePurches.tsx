import CouponModel from "../../../Models/CouponModel";
import customerService from "../../../Service/CustomerService";
import "./DeletePurches.css";

function DeletePurches(): JSX.Element {
   
    let register : number;
    

    
    async function deletePurches(coupon : CouponModel){
        try{
       
            await customerService.deletePurches(register , coupon.id);
            alert("Company was deleted successfully!")

        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }


    return (
        <div className="DeletePurches">
			
        </div>
    );
}

export default DeletePurches;
