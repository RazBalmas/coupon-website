import { useEffect, useState } from "react";

import "./GetAllCompany.css";
import adminService from "../../../Service/AdminService";

import CompanyUserModel from "../../../Models/CompanyUserModel";
import CompanyCard from "../../CardsArea/CompanyCard/CompanyCard";

function GetAllCompany(): JSX.Element {
    
    const [companyList, setCompanyList] = useState<CompanyUserModel[]>([]);
    
    useEffect(() => {
        async function getAllCompanies(){
            try{
            const customers = await adminService.getAllCompany();
            setCompanyList(customers);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }
    getAllCompanies();

    },[])
    
    return (
        <div className="GetAllCompany">
			<hr />
            {companyList.map((p)=>(
                <CompanyCard key={p.id} company={p}/>
            ) )}
        </div>
    );
}

export default GetAllCompany;
