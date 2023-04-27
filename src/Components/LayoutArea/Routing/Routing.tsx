import { Route , Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import CouponDetails from "../../ProductArea/CouponDetails/CouponDetails";
import Register from "../../AuthArea/AuthMenu/Register/Register";
import UpdateCompany from "../../CompanyArea/UpdateCompany/UpdateCompany";
import AddCoupon from "../../CompanyArea/AddCoupon/AddCoupon";
import UpdateCoupon from "../../CompanyArea/UpdateCoupon/UpdateCoupon";
import DeleteCoupon from "../../CompanyArea/DeleteCoupon/DeleteCoupon";
import AllCompanyCoupons from "../../CompanyArea/AllCompanyCoupons/AllCompanyCoupons";
import UploadImage from "../../CompanyArea/UploadImage/UploadImage";
import UpdateCustomer from "../../CustomerArea/UpdateCustomer/UpdateCustomer";
import GetCustomerCoupons from "../../CustomerArea/GetCustomerCoupons/GetCustomerCoupons";
import AddPurches from "../../CustomerArea/AddPurches/AddPurches";
import DeletePurches from "../../CustomerArea/DeletePurches/DeletePurches";
import FindCouponByCatagory from "../../CustomerArea/FindCouponByCatagory/FindCouponByCatagory";
import FindCouponById from "../../CustomerArea/FindCouponById/FindCouponById";
import AllCoupons from "../../CustomerArea/AllCoupons/AllCoupons";
import Menu from "../Menu/Menu";
import CompanyExistsById from "../../AdminArea/CompanyExistsById/CompanyExistsById";
import CompanyExistsByEmail from "../../AdminArea/CompanyExistsByEmail/CompanyExistsByEmail";
import AddCompany from "../../AdminArea/AddCompany/AddCompany";
import DeleteCompany from "../../AdminArea/DeleteCompany/DeleteCompany";
import GetAllCompany from "../../AdminArea/GetAllCompany/GetAllCompany";
import GetCompanyById from "../../AdminArea/GetCompanyById/GetCompanyById";
import GetCompanyByEmail from "../../AdminArea/GetCompanyByEmail/GetCompanyByEmail";
import CouponsByCompanyId from "../../AdminArea/CouponsByCompanyId/CouponsByCompanyId";
import CouponById from "../../AdminArea/CouponById/CouponById";
import CouponByTitle from "../../AdminArea/CouponByTitle/CouponByTitle";
import CustomerExistsById from "../../AdminArea/CustomerExistsById/CustomerExistsById";
import CustomerExistsByEmail from "../../AdminArea/CustomerExistsByEmail/CustomerExistsByEmail";
import AddCustomer from "../../AdminArea/AddCustomer/AddCustomer";
import DeleteCustomer from "../../AdminArea/DeleteCustomer/DeleteCustomer";
import CustomerById from "../../AdminArea/CustomerById/CustomerById";
import CustomerByEmail from "../../AdminArea/CustomerByEmail/CustomerByEmail";

import CustomersMenu from "../../AdminArea/CustomersMenu/CustomersMenu";
import CouponsMenu from "../../AdminArea/CouponsMenu/CouponsMenu";
import AllCustomers from "../../AdminArea/AllCustomers/AllCustomers";
import CompaniesMenu from "../Menu/CompaniesMenu/CompaniesMenu";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
     <Routes>
        {
        

        <>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<PageNotFound />} />
        
        {/* Company Methods Routs */}
        <Route path="/api/company/updateCompany" element={<UpdateCompany/>} />
        <Route path="/api/company/addCoupon" element={<AddCoupon/>} />
        <Route path="/api/company/updateCoupon" element={<UpdateCoupon/>} />
        <Route path="/api/company/deleteCoupon" element={<DeleteCoupon/>} />
        <Route path="/api/company/allMyCoupons" element={<AllCompanyCoupons/>} />
        <Route path="/api/company/uploadImage" element={<UploadImage/>} />
       
        {/* Customer Methods Routs */}
        <Route path="/api/Customer/updateCustomer" element={<UpdateCustomer/>} />
        <Route path="/api/Customer/customerCoupons" element={<GetCustomerCoupons/>} />
        <Route path="/api/Customer/addPurches" element={<AddPurches/>} />
        <Route path="/api/Customer/deletePurches" element={<DeletePurches/>} />
        <Route path="/api/Customer/findCouponById" element={<FindCouponById/>} />
        <Route path="/api/Customer/findCouponByCatagory" element={<FindCouponByCatagory/>} />
        <Route path="/api/Customer/allCoupons" element={<AllCoupons/>} />
        <Route path="/api/Customer/uploadImage" element={<UploadImage/>} />

        {/* Admin Methods Routs */}
        <Route path="/api/admin/companiesMenu" element={<CompaniesMenu />} />
        <Route path="/api/admin/customersMenu" element={<CustomersMenu />} />
        <Route path="/api/admin/couponsMenu" element={<CouponsMenu />} />
        <Route path="/api/admin/companyExistsById" element={<CompanyExistsById />} />
        <Route path="/api/admin/companyExistsByEmail" element={<CompanyExistsByEmail />} />
        <Route path="/api/admin/addCompany" element={<AddCompany />} />
        <Route path="/api/admin/updateCompany" element={<UpdateCompany />} />
        <Route path="/api/admin/deleteCompany" element={<DeleteCompany />} />
        <Route path="/api/admin/getAllCompany" element={<GetAllCompany />} />
        <Route path="/api/admin/getCompanyById" element={<GetCompanyById />} />
        <Route path="/api/admin/getCompanyByEmail" element={<GetCompanyByEmail />} />
        <Route path="/api/admin/addCoupon" element={<AddCoupon />} />
        <Route path="/api/admin/updateCoupon" element={<UpdateCoupon />} />
        <Route path="/api/admin/deleteCoupon" element={<DeleteCoupon />} />
        <Route path="/api/admin/CouponsByCompanyId" element={<CouponsByCompanyId />} />
        <Route path="/api/admin/CouponById" element={<CouponById />} />
        <Route path="/api/admin/CouponByTitle" element={<CouponByTitle />} />
        <Route path="/api/admin/allCoupons" element={<AllCoupons />} />
        <Route path="/api/admin/customerExistsById" element={<CustomerExistsById />} />
        <Route path="/api/admin/customerExistsByEmail" element={<CustomerExistsByEmail />} />
        <Route path="/api/admin/addCustomer" element={<AddCustomer />} />
        <Route path="/api/admin/updateCustomer" element={<UpdateCustomer />} />
        <Route path="/api/admin/deleteCustomer" element={<DeleteCustomer />} />
        <Route path="/api/admin/allCustomers" element={<AllCustomers />} />
        <Route path="/api/admin/customerById" element={<CustomerById />} />
        <Route path="/api/admin/customerByEmail" element={<CustomerByEmail />} />
        <Route path="/api/admin/addPurches" element={<AddPurches />} />
        <Route path="/api/admin/deletePurches" element={<DeletePurches />} />
        <Route path="/api/admin/uploadImage" element={<UploadImage />} />


        

    



        </>
        
        
        }
        </Routes>
        </div>
    );
}

export default Routing;
