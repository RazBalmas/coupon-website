import "./Logo.css";
import logo from "../../../Utils/Logo/png/logo-no-background.png"

function Logo(): JSX.Element {
    return (
        <div className="Logo">
			<img src={logo} alt="Cannot display image" />
        </div>
    );
}

export default Logo;
