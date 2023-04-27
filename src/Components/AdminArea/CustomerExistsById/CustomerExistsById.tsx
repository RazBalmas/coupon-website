import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./CustomerExistsById.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

function CustomerExistsById(): JSX.Element {
     
    let register : number;
    const [exists, setExists] = useState<boolean>(false);
    

    
        async function customerExistsById(){
            try{
           
                const answer = await adminService.customerExistsById(register);

                setExists(answer);
            }
            catch (error : any){
                console.log(error);
                alert("Failed to retrieve data from server")
            }
        }

    
    
    return (
        <div className="CustomerExistsById">
			
            <legend>Id :</legend>
          
                <input type="number" value={register}/>
                <button type="submit" onClick={customerExistsById}>Check</button>
         

                <span>{exists}</span>
        </div>
    );
}

export default CustomerExistsById;