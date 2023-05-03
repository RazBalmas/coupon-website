import { useForm } from "react-hook-form";
import ClientType from "../../../Models/ClientType";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import { useState } from "react";
import "./UpdateCompany.css";
import companyService from "../../../Service/CompanyService";
import { AuthState } from "../../../Redux/AuthState";
import adminService from "../../../Service/AdminService";

function UpdateCompany(): JSX.Element {
  
    const[currentCompany, setCurrentCompany] = useState<CompanyUserModel>(undefined);

    interface UpdateCompanyProps {
        currentCompany: CompanyUserModel;
      }

    const {register, handleSubmit} = useForm <CompanyUserModel>();
    
    async function getCompany(id:number) {
        
        const company = await adminService.getCompanyById(id);
        setCurrentCompany(company);
    }


    async function send(credentials: CompanyUserModel) {
        try {

            await adminService.updateCompany(credentials);
            alert("Success!")
            

        } catch (err: any) {
            alert("Failed!")
        }
   } 

    return (
        <div className="UpdateCompany">
             <span>Company To Update Id :</span>

            <input type="number" onChange={(e) => {
             const id = parseInt(e.target.value);
             getCompany(id);
            }}/>

          {currentCompany !== undefined &&
				<form onSubmit={handleSubmit(send)}>

            <legend>Name : </legend>
            <input type="text"  {...register("name")} defaultValue={currentCompany.name} placeholder={currentCompany.name}/>
                
            <br />
            <legend>ClientType : </legend>
            <input type="enum" {...register("clientType")} value={ClientType.COMPANY}/>

            <br />
            <br />

            <legend>Email : </legend>
            <input type="Email Input" required {...register("email")} defaultValue={currentCompany.email} placeholder={currentCompany.email}/>
            <br />
            <br />

            <legend>Password : </legend>
            <input type="Password Input" required {...register("password")} defaultValue={currentCompany.password} placeholder={currentCompany.password}/>
            <br />
            <br />
            <input type="number" {...register("id")}  value={currentCompany.id} disabled/>
            <br />
            <br />

            <button>submit</button>
            </form>}
        </div>
    );
}

export default UpdateCompany;
