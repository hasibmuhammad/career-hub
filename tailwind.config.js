/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url(/assets/images/bg1.png)",
        bg2: "url(/assets/images/bg2.png)",
      },
      colors: {
        border: "#E8E8E8",
        secondary: "#474747",
        grayish1: "#757575",
        grayish2: "#A3A3A3",
        start: "#7E90FE",
        end: "#9873FF",
        catBgStart: "rgba(126, 144, 254, 0.05)",
        catBgEnd: "rgba(152, 115, 255, 0.05)",
        catImgStart: "rgba(126, 144, 254, 0.1)",
        catImgEnd: "rgba(152, 115, 255, 0.1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
