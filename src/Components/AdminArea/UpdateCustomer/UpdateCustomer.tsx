import { useForm } from "react-hook-form";
import CustomerUserModel from "../../../Models/CustomerUserModel";
import "./UpdateCustomer.css";
import { useState } from "react";
import adminService from "../../../Service/AdminService";
import customerService from "../../../Service/CustomerService";
import GetCompanyById from "../GetCompanyById/GetCompanyById";
import ClientType from "../../../Models/ClientType";


function UpdateCustomer(): JSX.Element {
   
    const[currentCustomer, setCurrentCustomer] = useState<CustomerUserModel>(undefined);

    const {register, handleSubmit} = useForm <CustomerUserModel>();
    
    async function getCustomer(id:number) {
        
        const customer = await adminService.customerById(id);
        setCurrentCustomer(customer);
    }

    async function send(credentials: CustomerUserModel) {
        try {
            credentials.id = currentCustomer.id;
            await customerService.updateCustomer(credentials);
            alert("Success!")
            

        } catch (err: any) {
            alert("Failed!")
        }
   } 
   
    return (
        <div className="UpdateCustomer">
			   <span>Customer To Update Id :</span>

                <input type="number" onChange={(e) => {
                const id = parseInt(e.target.value);
                getCustomer(id);
                }}/>

                {currentCustomer !== undefined &&
                 <form onSubmit={handleSubmit(send)}>

                <legend>first Name : </legend>
                <input type="text"  {...register("firstName")} placeholder={currentCustomer.firstName}/>
                <br />
                <legend> last Name : </legend>
                <input type="text"  {...register("lastName")} placeholder={currentCustomer.lastName}/>
    
                <br />
                <legend>ClientType : </legend>
                <input type="enum" {...register("clientType")} value={ClientType.CUSTOMER}/>
                <br />

                <legend>Email : </legend>
                <input type="Email Input" required {...register("email")} placeholder={currentCustomer.email}/>
                <br />
                <legend>Password : </legend>
              <input type="Password Input" required {...register("password")}  placeholder={currentCustomer.password}/>

                <br />
                <input type="number" {...register("id")}  value={currentCustomer.id}/>
                <br />


                <button>submit</button>
                </form>}
        </div>
    );
}

export default UpdateCustomer;
