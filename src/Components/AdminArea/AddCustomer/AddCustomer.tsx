import "./AddCustomer.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ClientType from "../../../Models/ClientType";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Service/AuthService";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import { getValue } from "@testing-library/user-event/dist/utils";
import adminService from "../../../Service/AdminService";
import CustomerUserModel from "../../../Models/CustomerUserModel";

function AddCustomer(): JSX.Element {
    const {register, handleSubmit} = useForm <CustomerUserModel>();
   
 

    async function send(credentials: CustomerUserModel) {
         try {
             console.log(credentials);
             await adminService.addCustomer(credentials);
             alert("Success!")
             
 
         } catch (err: any) {
             alert("Failed!")
         }
    } 

    return (
        <div className="AddCustomer">
            <form onSubmit={handleSubmit(send)}>

<legend>ClientType : </legend>
<input type="text" {...register("clientType")} value={ClientType.CUSTOMER}/>
<br />
<legend>First Name : </legend>
<input type="text"  {...register("firstName")} />
<br />
<legend>Last Name : </legend>
<input type="text"  {...register("lastName")} />
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

export default AddCustomer;
