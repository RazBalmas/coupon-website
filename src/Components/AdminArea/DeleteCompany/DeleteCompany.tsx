import { useEffect, useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./DeleteCompany.css";
import adminService from "../../../Service/AdminService";
import { log } from "console";

function DeleteCompany(): JSX.Element {
     
    let register : number;
    

    
        async function deleteCompany(){
            try{
           
                await adminService.deleteCompany(register);
                alert("Company was deleted successfully!")

            }
            catch (error : any){
                console.log(error);
                alert("Failed to retrieve data from server")
            }
        }

    
    
    return (
        <div className="DeleteCompany">
			
            <legend>Id :</legend>
          
                <input type="number" value={register}/>
                <button type="submit" onClick={deleteCompany}>Check</button>
        
        </div>
    );
}

export default DeleteCompany;