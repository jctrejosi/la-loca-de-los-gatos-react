import logoSvg from "@/assets/images/logo.svg";

export const web = "/";

export const logo = logoSvg;

export const slogan = "la loca de los gatos";

export const navbarlist = [
  {
    text: "Adopta",
    dropdown: [
      { text: "Requisitos para adoptar", route: "/requisitos" },
      { text: "Conócelos aquí", route: "/adopciones" },
      { text: "Casos exitosos", route: "/casos" },
    ],
  },
  { text: "Blog", route: "/blog" },
  { text: "Nosotros", route: "/nosotros" },
  { text: "Contacto", route: "/contacto" },
];

export default null;
