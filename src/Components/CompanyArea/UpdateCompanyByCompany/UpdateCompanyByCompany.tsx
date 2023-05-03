import "./UpdateCompanyByCompany.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { authStore } from "../../../Redux/AuthState";
import companyService from "../../../Service/CompanyService";
import UserModel from "../../../Models/UserModel";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import ClientType from "../../../Models/ClientType";

function UpdateCompanyByCompany(): JSX.Element {
   

    const [cuurrentCompany, setCurrentCompany] = useState <UserModel>(undefined);
    
   
 

    useEffect(() => {
        async function getCurrentCompany() {
            setCurrentCompany(authStore.getState().user);

            authStore.subscribe(()=> {
                setCurrentCompany(authStore.getState().user);
                });
    
                
                
            }
            getCurrentCompany();
        })
 
        const {register, handleSubmit} = useForm <CompanyUserModel>();
    async function send(credentials: CompanyUserModel) {
        try {

            await companyService.updateCompany(credentials);
            alert("Success!")
            

        } catch (err: any) {
            alert("Failed!")
        }
   } 

    return (
        <div className="UpdateCompany">
             <span>My Credentials :</span>


          {cuurrentCompany !== undefined &&
				<form onSubmit={handleSubmit(send)}>

            <legend>Name : </legend>
            <input type="text"  {...register("name")} placeholder={cuurrentCompany.name}/>
                
            <br />
            <legend>ClientType : </legend>
            <input type="enum" {...register("clientType")} value={ClientType.COMPANY}/>

            <br />
            <br />

            <legend>Email : </legend>
            <input type="Email Input" required {...register("email")} placeholder={cuurrentCompany.email}/>
            <br />
            <br />

            <legend>Password : </legend>
            <input type="Password Input" required {...register("password")} placeholder={cuurrentCompany.password}/>
            <br />
            <br />
            <input type="number" {...register("id")}  value={cuurrentCompany.id} disabled/>
            <br />
            <br />

            <button>submit</button>
            </form>}
        </div>
    );
}


export default UpdateCompanyByCompany;
