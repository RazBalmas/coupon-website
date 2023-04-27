import companyService from "../../../Service/CompanyService";
import "./DeleteCoupon.css";

function DeleteCoupon(): JSX.Element {
    let register : number;
    

    
        async function deleteCoupon(){
            try{
           
                await companyService.deleteCoupon(register);
                alert("Company was deleted successfully!")

            }
            catch (error : any){
                console.log(error);
                alert("Failed to retrieve data from server")
            }
        }

    
    return (
        
			
            <div className="DeleteCoupon">
			
            <legend>Coupon number :</legend>
          
                <input type="number" value={register}/>
                <button type="submit" onClick={deleteCoupon}>Check</button>
        
       

        </div>
    );
}

export default DeleteCoupon;
