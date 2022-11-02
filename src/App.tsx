import Header from "#/Header/Header";
import Footer from "#/Footer/Footer";
import { ReactElement } from "react";
import { navbarlist, web, logo, slogan } from "contents/header";

function App(): ReactElement {
  return (
    <div className="App">
      <Header url={web} image={logo} slogan={slogan} items={navbarlist} />
      <Footer />
    </div>
  );
}

export default App;
