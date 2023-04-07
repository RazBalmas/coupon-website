import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			my name is {process.env.React_App_My_Name}
        </div>
    );
}

export default Home;
