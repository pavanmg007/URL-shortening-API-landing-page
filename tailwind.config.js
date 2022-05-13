module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile": 'url("/src/images/bg-boost-mobile.svg")',
        "bg-desktop": 'url("/src/images/bg-boost-desktop.svg")',
      },
      colors: {
        "gray" : "hsl(0, 0%, 75%)",
        "grayish-violet" : "hsl(257, 7%, 63%)",
        "dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
        "Cyan": "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        "Red" : "hsl(0, 87%, 67%)",
      },
    },
  },
};
