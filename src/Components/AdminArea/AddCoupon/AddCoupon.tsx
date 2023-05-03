import "./AddCoupon.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ClientType from "../../../Models/ClientType";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Service/AuthService";
import CompanyUserModel from "../../../Models/CompanyUserModel";
import { getValue } from "@testing-library/user-event/dist/utils";
import adminService from "../../../Service/AdminService";
import CouponModel from "../../../Models/CouponModel";
import Catagory from "../../../Models/CouponCatagory";
import companyService from "../../../Service/CompanyService";

import { useEffect, useState } from "react";

function AddCoupon(): JSX.Element {
    const {register, handleSubmit} = useForm <CouponModel>(undefined);
    
   
 

    async function send(credentials: CouponModel) {
         try {
             console.log(credentials);
             
             if(imageName) {
                credentials.image = imageName;
             }
             if(companyId) {
               const company = await adminService.getCompanyById(companyId);
               credentials.company = company;
               await adminService.addCoupon(credentials);
               alert("Success!")
            

            }
        }   
 
          catch (err: any) {
             alert("Failed!")
         }
    } 

    
        const [imageName, setImageName] = useState <string>("");
        const [companyId, setCompanyId] = useState <number>(0);

        async function addImage(file : File) : Promise<string> {
             try {
                console.log(file.name);
                 const imageName = await adminService.uploadImage(file);
                 alert("Image was uploaded!")
                 
     
                 setImageName(imageName);
             } catch (err: any) {
                 alert("Failed!")
                 return "";
             }
        } 
    

    return (
        <div className="AddCoupon">
			<form onSubmit={handleSubmit(send)} encType="multipart/form-data">

                <legend>Title : </legend>
                <input type="text"  {...register("title")} />
                <br />

                <legend>Category Type : </legend>
                    <select className="Catagory-Input" defaultValue="" size={1} required {...register("catagory")}>
                        <option disabled value="">Select Category :</option>
                        <option value={Catagory.APLLIENCES}>Appliances</option>
                        <option value={ Catagory.AUTOMOBILE}>Automobile</option>
                        <option value={Catagory.ELECTRICITY}>Electricity</option>
                        <option value={Catagory.FOOD}>Food</option>
                        <option value={Catagory.GARDENING}>Gardening</option>
                        <option value={Catagory.HEALTH_CARE}>Health Care</option>
                        <option value={Catagory.HOME}>Home</option>
                        <option value={Catagory.RESTAURANT}>Restaurant</option>
                        <option value={Catagory.VACATION}>Vacation</option>
                    </select>
                <br />
                <br />
                <legend>Price per unit : </legend>
                <input type="number" required {...register("price")}/>
                <br />
                <br />

                <legend>Amount of coupons : </legend>
                <input type="number" required {...register("amount")} />
                <br />
                <legend>Start Date : </legend>
                <input type="date" required {...register("startDate")} />
                <br />
                <legend>End Date : </legend>
                <input type="date" required {...register("endDate")} />
                <br />
                
                <legend>Description : </legend>
                <input type="text" {...register("description")}/>
               
                <br />

                <input type="number" {...register("id")}  value={0}/>
                <input type="number" placeholder="Owning company Id" onChange={(e) => {
                    const id = e.target.valueAsNumber;
                    setCompanyId(id);
                }}/>

                <legend>Image : </legend>
                <br />
                <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              addImage(file).then((imageName) => {
                setImageName(imageName);
              });
            }
          }}
        />
                <button>submit</button>
                </form>
                <br />
            
        </div>
    );
}

export default AddCoupon;
