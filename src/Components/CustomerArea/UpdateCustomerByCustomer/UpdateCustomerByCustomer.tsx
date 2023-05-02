import { useForm } from "react-hook-form";
import ClientType from "../../../Models/ClientType";
import "./UpdateCustomerByCustomer.css";
import { useState, useEffect } from "react";
import CustomerUserModel from "../../../Models/CustomerUserModel";
import { authStore } from "../../../Redux/AuthState";
import UserModel from "../../../Models/UserModel";
import customerService from "../../../Service/CustomerService";

function UpdateCustomerByCustomer(): JSX.Element {
    const[currentCustomer, setCurrentCustomer] = useState<UserModel>(undefined);

    const {register, handleSubmit} = useForm <CustomerUserModel>();
    useEffect(() => {
        async function getCustomer() {
            
                setCurrentCustomer(authStore.getState().user);
    
                authStore.subscribe(()=> {
                    setCurrentCustomer(authStore.getState().user);
                    });
                }
        getCustomer();
    }, [])

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

               

                {currentCustomer !== undefined &&
                 <form onSubmit={handleSubmit(send)}>

                <legend>first Name : </legend>
                <input type="text"  {...register("first name")} placeholder={currentCustomer.firstName}/>
                <br />
                <legend> last Name : </legend>
                <input type="text"  {...register("last name")} placeholder={currentCustomer.lastName}/>
    
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

export default UpdateCustomerByCustomer;
