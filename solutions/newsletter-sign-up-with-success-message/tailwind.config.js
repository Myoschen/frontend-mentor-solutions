import { fontFamily } from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", fontFamily.sans],
      },
      colors: {
        primary: "hsl(var(--primary))",
        "dark-slate-grey": "hsl(var(--dark-slate-grey))",
        "charcoal-grey": "hsl(var(--charcoal-grey))",
        grey: "hsl(var(--grey))",
        white: "hsl(var(--white))",
      },
    },
  },
  plugins: [forms],
};
