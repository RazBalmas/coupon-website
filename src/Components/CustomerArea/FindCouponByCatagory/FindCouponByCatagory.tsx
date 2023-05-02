import Catagory from "../../../Models/CouponCatagory";
import CouponModel from "../../../Models/CouponModel";
import customerService from "../../../Service/CustomerService";
import CouponCard from "../../CardsArea/CouponCard/CouponCard";
import "./FindCouponByCatagory.css";
import { useEffect, useState } from "react";


function FindCouponByCatagory(): JSX.Element {
     
    const [catagoryCoupons, setCatagoryCoupons] = useState<CouponModel[] | undefined>(undefined);
    const [register, setRegister] = useState<Catagory>(0);
    
   

        const handleCheckClick = async () => {
          try {
            console.log(register);
            const answer = await customerService.findCouponByCatagory(register);
            setCatagoryCoupons(answer);
          } catch (error: any) {
            console.log(error);
            alert("No Coupon by specified Company Id");
          }
        };

  

    
     function covertingNumberToEnum (number : number) {
        let catagoryValue : Catagory;
        catagoryValue = Catagory[number] as unknown as Catagory;
        setRegister(catagoryValue);

    }
    
    return (
        <div className="CouponsByCompanyId">
                <legend>Category</legend>
      <br />
      <legend>Category Type : </legend>
    <select className="Catagory-Input" onChange={(e) => covertingNumberToEnum(Number(e.target.value))}>
        <option disabled value="">Select Category :</option>
        <option value={Catagory.APLLIENCES}>Appliances</option>
        <option value={Catagory.AUTOMOBILE}>Automobile</option>
        <option value={Catagory.ELECTRICITY}>Electricity</option>
        <option value={Catagory.FOOD}>Food</option>
        <option value={Catagory.GARDENING}>Gardening</option>
        <option value={Catagory.HEALTH_CARE}>Health Care</option>
        <option value={Catagory.HOME}>Home</option>
        <option value={Catagory.RESTAURANT}>Restaurant</option>
        <option value={Catagory.VACATION}>Vacation</option>
    </select>
      <button onClick={handleCheckClick}>Check</button>

    {catagoryCoupons !== undefined ? (
        <div>
          {catagoryCoupons.map((p)=>(
                   <CouponCard key={p.id} coupon={p}/>
               ) )}
      </div>
    ) : (
      <p>No coupon data to display</p>
    )}
          
                </div>
                
                );
}

export default FindCouponByCatagory;
