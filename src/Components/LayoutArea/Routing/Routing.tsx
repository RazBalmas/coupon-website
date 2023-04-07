import { Route , Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
     <Routes>
        {
        

        <><Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        </>
        
        
        }
        </Routes>
        </div>
    );
}

export default Routing;
