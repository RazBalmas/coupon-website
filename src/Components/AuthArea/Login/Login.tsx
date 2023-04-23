import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ClientType from "../../../Models/ClientType";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Service/AuthService";
import "./Login.css";



function Login(): JSX.Element {

   const {register, handleSubmit} = useForm <CredentialsModel>();
   
   const navigate = useNavigate();

   async function send(credentials: CredentialsModel) {
        try {
           
            await authService.login(credentials);
            alert("Welcome!")
            navigate("/Home")

        } catch (err: any) {
            alert(err.message)
        }
   }

    return (
        <div className="Login">
			<form onSubmit={handleSubmit(send)}>

                <legend>Client Type : </legend>
                    <select className="ClientType-Input" defaultValue="" size={1} required {...register("clientType")}>
                        <option disabled value="">Select Client Type</option>
                        <option value={ClientType.CUSTOMER}>Customer</option>
                        <option value={ClientType.COMPANY}>Company</option>
                        <option value={ClientType.ADMIN}>Admin</option>
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

export default Login;
