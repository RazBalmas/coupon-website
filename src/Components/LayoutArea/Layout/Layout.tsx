import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Clock from "../../HomeArea/Clock/Clock";
import Home from "../../HomeArea/Home/Home";
import Logo from "../../LogoArea/Logo/Logo";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			
           <header><Logo /> <AuthMenu/></header>
           <main> <Routing /></main> 
           <aside><Menu /></aside>
           <footer><Clock /></footer>

        
        </div>
    );
}

export default Layout;
