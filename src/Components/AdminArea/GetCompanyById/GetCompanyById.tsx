import { useState, useEffect } from "react";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import "./GetCompanyById.css";
import adminService from "../../../Service/AdminService";
import CompanyCard from "../../CardsArea/CompanyCard/CompanyCard";
import { useParams } from "react-router-dom";


function GetCompanyById(): JSX.Element {
     
    
    const [company, setCompany] = useState<CompanyUserModel | undefined>(undefined);
    const [register, setRegister] = useState<number>(0);
    
    
    const handleCheckClick = async () => {
      try {
        console.log(register);
        const answer = await adminService.getCompanyById(register);
        setCompany(answer);
      } catch (error: any) {
        console.log(error);
        alert("No Company by specified Id");
      }
    };

return (
  <div className="GetCompanyById">

      <legend>Id :</legend>
      <br />
      <input
        type="number"
        value={register}
        onChange={(e) => setRegister(Number(e.target.value))}
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

export default GetCompanyById;