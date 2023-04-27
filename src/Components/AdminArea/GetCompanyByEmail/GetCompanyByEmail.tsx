import { useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./GetCompanyByEmail.css";
import adminService from "../../../Service/AdminService";



import CompanyCard from "../../CardsArea/CompanyCard/CompanyCard";

function GetCompanyByEmail(): JSX.Element {
     
    let register : string;
    const [company, setCompany] = useState<CompanyUserModel | undefined>(null);
    

    async function companyByEmail(){
        try{
            const answer = await adminService.getCompanyByEmail(register);
            setCompany(answer);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }

    
    return (
        <div className="GetCompanyByEmail">
            <legend>Email :</legend>
            <br />
            <input type="text" value={register}/>
            <button type="submit" onClick={companyByEmail} >Check</button>
              
            {company !== null ? (
              <div>
                {
                <CompanyCard key={company.id} company={company}/>
                }
                {/* {coupon.title !== undefined && (
                  <p>Coupon Title: {coupon.title}</p>
                )} */}

              </div>
            ) : (
              <p>No coupon data to display</p>
            )}
        </div>
            
    );
}

export default GetCompanyByEmail;