import { useState, useEffect } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./GetCompanyById.css";
import adminService from "../../../Service/AdminService";
import CompanyCard from "../../CardsArea/CompanyCard/CompanyCard";
import { useParams } from "react-router-dom";


function GetCompanyById(): JSX.Element {
     
    
    const [company, setCompany] = useState<CompanyUserModel | undefined>(null);
    let register : number;
    

    async function companyById(){
        try{
          console.log(register)
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
            <button type="submit" onSubmit={companyById} >Check</button>
              
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