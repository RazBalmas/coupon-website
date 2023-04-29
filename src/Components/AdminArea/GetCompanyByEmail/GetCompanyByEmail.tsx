import { useState, useEffect } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./GetCompanyByEmail.css";
import adminService from "../../../Service/AdminService";
import CompanyCard from "../../CardsArea/CompanyCard/CompanyCard";
import { useParams } from "react-router-dom";


function GetCompanyByEmail(): JSX.Element {
     
    
    const [company, setCompany] = useState<CompanyUserModel | undefined>(undefined);
    const [register, setRegister] = useState<string>("");
    
    
    const handleCheckClick = async () => {
      try {
        console.log(register);
        const answer = await adminService.getCompanyByEmail(register);
        setCompany(answer);
      } catch (error: any) {
        console.log(error);
        alert("No Company by specified Email");
      }
    };

return (
  <div className="GetCompanyByEmail">

      <legend>Email :</legend>
      <br />
      <input
        type="text"
        value={register}
        onChange={(e) => setRegister(String(e.target.value))}
      />
       <button onClick={handleCheckClick}>Check</button>

  
    {company !== undefined ? (
      <div>
        <CompanyCard key={company.id} company={company} />
      </div>
    ) : (
      <p>No company data to display</p>
    )}
  </div>
);
}

export default GetCompanyByEmail;