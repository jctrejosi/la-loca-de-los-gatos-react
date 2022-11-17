import logoSvg from "@/assets/images/logo.svg";

export const web = "/";

export const logoHeader = logoSvg;

export const slogan = "la loca de los gatos";

export const navbarlist = [
  { text: "Accesorios", route: "/accesorios" },
  {
    text: "Adopta",
    dropdown: [
      { text: "Requisitos para adoptar", route: "/requisitos" },
      { text: "Conócelos aquí", route: "/adopciones" },
      { text: "Casos exitosos", route: "/casos" },
    ],
  },
  { text: "Nosotros", route: "/nosotros" },
  { text: "Contacto", route: "/contacto" },
  { text: "Blog", route: "/blog" },
];

export default null;
