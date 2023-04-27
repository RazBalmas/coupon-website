import { useForm } from "react-hook-form";
import ClientType from "../../../Models/ClientType";
import CompanyUserModel from "../../../Models/CompanyUserModel";

import "./UpdateCompany.css";
import companyService from "../../../Service/CompanyService";
import { AuthState } from "../../../Redux/AuthState";

function UpdateCompany(): JSX.Element {
  
    let authState = new AuthState();
    const userDetails = {
        company : authState.user
    }
   
    const {register, handleSubmit} = useForm <CompanyUserModel>();

    async function send(credentials: CompanyUserModel) {
         try {

             await companyService.updateCompany(credentials);
             alert("Success!")
             
 
         } catch (err: any) {
             alert("Failed!")
         }
    } 
    
    console.log(userDetails.company.name);
    return (
        <div className="UpdateCompany">
				<form onSubmit={handleSubmit(send)}>

            <legend>Name : </legend>
            <input type="text"  {...register("name")} placeholder={userDetails.company.name} defaultValue={userDetails.company.name}/>
                
            <br />
            <legend>ClientType : </legend>
            <input type="text" {...register("clientType")} value={ClientType.COMPANY} placeholder={ClientType.COMPANY} disabled/>

            <br />
            <br />

            <legend>Email : </legend>
            <input type="Email Input" required {...register("email")} placeholder={userDetails.company.password} defaultValue={userDetails.company.password}/>
            <br />
            <br />

            <legend>Password : </legend>
            <input type="Password Input" required {...register("password")} placeholder={userDetails.company.email} defaultValue={userDetails.company.email}/>
            <br />
            <br />

            <button>submit</button>
            </form>
        </div>
    );
}

export default UpdateCompany;
