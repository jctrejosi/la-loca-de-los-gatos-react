import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navbarlist, web, logoHeader, slogan } from "contents/header";
import {
  listLinks,
  url,
  logoFooter,
  description,
  iconsSocial,
  titleSocial,
  ourAllieds,
  titleAllieds,
} from "contents/footer";
import Header from "#/Header/Header";
import Footer from "#/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Adopciones from "./pages/Adopciones";
import Blog from "./pages/Blog";
import Casos from "./pages/Casos";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Requisitos from "./pages/Requisitos";
import Cookies from "./pages/Cookies";
import Privacidad from "./pages/Privacidad";

function routes() {
  return (
    <BrowserRouter>
      <Header url={web} image={logoHeader} slogan={slogan} items={navbarlist} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/adopciones" element={<Adopciones />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/requisitos" element={<Requisitos />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/politica-privacidad" element={<Privacidad />} />
      </Routes>
      <Footer
        linkList={listLinks}
        route={url}
        logo={logoFooter}
        paragraph={description}
        iconsSocial={iconsSocial}
        titleSocial={titleSocial}
        iconsAllieds={ourAllieds}
        titleAllieds={titleAllieds}
      />
    </BrowserRouter>
  );
}

export default routes;
