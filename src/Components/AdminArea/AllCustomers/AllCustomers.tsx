import { useEffect, useState } from "react";
import CustomerUserModel from "../../../Models/CustomerUserModel";
import "./AllCustomers.css";
import adminService from "../../../Service/AdminService";
import CustomerCard from "../../CardsArea/CustomerCard/CustomerCard";

function AllCustomers(): JSX.Element {
    
    const [customerList, setCustomerList] = useState<CustomerUserModel[]>([]);
    
    useEffect(() => {
        async function getAllCustomer(){
            try{
            const customers = await adminService.allCustomers();
            setCustomerList(customers);
        }
        catch (error : any){
            console.log(error);
            alert("Failed to retrieve data from server")
        }
    }
    getAllCustomer();

    },[])
    
    return (
        <div className="AllCustomers">
			<hr />
            {customerList.map((p)=>(
                <CustomerCard key={p.id} customer={p}/>
            ) )}
        </div>
    );
}

export default AllCustomers;
