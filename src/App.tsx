import Header from "#/Header/Header";
import Footer from "#/Footer/Footer";
import logoSvg from "./assets/images/logo.svg";

const web = import.meta.env.VITE_SERVER;

const logo = logoSvg;

const slogan = "la loca de los gatos";

function App() {
  return (
    <div className="App">
      <Header url={web} image={logo} slogan={slogan} />
      <Footer />
    </div>
  );
}

export default App;
