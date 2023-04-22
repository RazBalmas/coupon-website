import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ClientType from "../../../../Models/ClientType";
import CredentialsModel from "../../../../Models/CredentialsModel";
import "./Register.css";
import authService from "../../../../Service/AuthService";

function Register(): JSX.Element {

    const {register, handleSubmit} = useForm <CredentialsModel>();
   
    const navigate = useNavigate();
 
    async function send(credentials: CredentialsModel) {
         try {
             await authService.register(credentials);
             alert("Welcome!")
             navigate("/home")
 
         } catch (err: any) {
             alert(err.message)
         }
    }

    
    return (
        <div className="Register">
			Register	<form onSubmit={handleSubmit(send)}>

<legend>Client Type : </legend>
    <select className="ClientType-Input" defaultValue="" size={1} required {...register("clientType")}>
        <option disabled value="">Select Client Type</option>
        <option value={ClientType.CUSTOMER}>Customer</option>
        <option value={ClientType.COMPANY}>Company</option>
    </select>
<br />
<br />

<legend>Email : </legend>
<input type="Email Input" required {...register("email")} />
<br />
<br />

<legend>Password : </legend>
<input type="Password Input" required {...register("password")} />
<br />
<br />

<button>Login</button>
</form>
        </div>
    );
}

export default Register;



