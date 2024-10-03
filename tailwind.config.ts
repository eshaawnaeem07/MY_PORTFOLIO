import { Poppins, Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lbue': '#011936',
        'baby1': '#0d1f22',
        'pakGreen': '#143601',
        'pg': '#1A4301',
        'pg1': '#245501',
        'metal': '#baf2bb',
        'Xanthous': '#FBB02D',
        'gum': '#111d13',
        'off': '#f4f0bb',
        
    },
    fontFamily: {
      Poppins : ["Poppins, sans-serif"],
      Roboto: ['Roboto', "sans-serif"],
      StyleScript: ["Style Script" ,"cursive"] ,
     Merienda: ["Merienda", 'cursive']

    },
  },
  plugins: [],
},
}
export default config;
