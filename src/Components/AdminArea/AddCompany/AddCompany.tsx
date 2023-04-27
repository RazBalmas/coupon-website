import "./AddCompany.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ClientType from "../../../Models/ClientType";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Service/AuthService";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import { getValue } from "@testing-library/user-event/dist/utils";
import adminService from "../../../Service/AdminService";

function AddCompany(): JSX.Element {
    const {register, handleSubmit} = useForm <CompanyUserModel>();
   
 

   async function send(credentials: CompanyUserModel) {
        try {
           
            await adminService.addCompany(credentials);
            alert("Success!")
            

        } catch (err: any) {
            alert("Failed!")
        }
   } 
    return (
        <div className="AddCompany">
			<form onSubmit={handleSubmit(send)}>

                <legend>Name : </legend>
                <input type="text"  {...register("name")} />
                <br />
                <legend>ClientType : </legend>
                <input type="text" {...register("clientType")} value={ClientType.COMPANY}/>
               
                <br />
                <br />

                <legend>Email : </legend>
                <input type="Email Input" required {...register("email")}/>
                <br />
                <br />

                <legend>Password : </legend>
                <input type="Password Input" required {...register("password")} />
                <br />
                <br />

                <button>submit</button>
            </form>
        </div>
    );
}

export default AddCompany;
