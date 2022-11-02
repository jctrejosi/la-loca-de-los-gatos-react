import Header from "#/Header/Header";
import Footer from "#/Footer/Footer";
import { navbarlist, web, logo, slogan } from "contents/header";

function App() {
  return (
    <div className="App">
      <Header url={web} image={logo} slogan={slogan} items={navbarlist} />
      <Footer />
    </div>
  );
}

export default App;
