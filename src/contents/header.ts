import logoSvg from "@/assets/images/logo.svg";

export const navbarlist = [
  { text: "Nosotros", route: "/nosotros" },
  {
    text: "Adopta",
    dropdown: [
      { text: "Requisitos para adoptar", route: "/requisitos" },
      { text: "Conócelos aquí", route: "/adopciones" },
      { text: "Casos exitosos", route: "/casos" },
    ],
  },
  { text: "Blog", route: "/blog" },
  { text: "Contacto", route: "/contacto" },
];

export const web = import.meta.env.VITE_SERVER;

export const logo = logoSvg;

export const slogan = "la loca de los gatos";

export default null;
