import { useEffect, useState } from "react";
import "./DeleteCustomer.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

function DeleteCustomer(): JSX.Element {
     
    let register : number;
    

    
        async function deleteCustomer(){
            try{
           
                await adminService.deleteCustomer(register);
                alert("Company was deleted successfully!")

            }
            catch (error : any){
                console.log(error);
                alert("Failed to retrieve data from server")
            }
        }

    
    
    return (
        <div className="DeleteCustomer">
			
            <legend>Id :</legend>
          
                <input type="number" value={register}/>
                <button type="submit" onClick={deleteCustomer}>Check</button>
        
        </div>
    );
}

export default DeleteCustomer;