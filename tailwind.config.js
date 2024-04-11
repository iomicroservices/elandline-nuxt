// remember to fix this issue wint the tailwind/nuxt
// https://github.com/tailwindlabs/tailwindcss-intellisense/issues/663#issuecomment-1316788128

module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#ecefff","100":"#dce1ff","200":"#bfc6ff","300":"#99a2ff","400":"#7271ff","500":"#5f50ff","600":"#5c3efb","700":"#4524de","800":"#3820b3","900":"#31238c","950":"#1e1452"}
      },
      fontFamily: {
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
