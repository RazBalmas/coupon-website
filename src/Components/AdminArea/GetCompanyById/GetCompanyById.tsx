import { useState } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./GetCompanyById.css";
import adminService from "../../../Service/AdminService";



import CompanyCard from "../../CardsArea/CompanyCard/CompanyCard";

function GetCompanyById(): JSX.Element {
     
    let register : number;
    const [company, setCompany] = useState<CompanyUserModel | undefined>(null);
    

    async function companyById(){
        try{
            const answer = await adminService.getCompanyById(register);
            setCompany(answer);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }

    
    return (
        <div className="GetCompanyById">
            <legend>Id :</legend>
            <br />
            <input type="number" value={register}/>
            <button type="submit" onClick={companyById} >Check</button>
              
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
              <p>No company data to display</p>
            )}
        </div>
            
    );
}

export default GetCompanyById;