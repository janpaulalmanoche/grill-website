module.exports = {
  purge: [],
  theme: {
    colors:{
        gray:{
          dark:'#262626'
        },
        orange:{
          nav:'#e1b838'
        }
    },
    extend: {
        height:theme =>({
          'dashboard' : '60vh'
        }),
    },
  },
  // hover,responsive,focus,active,
   // for the active a href when you click it, bg color
  variants: { 
    backgroundColor:['responsive','hover','focus','active']
   
  },
  plugins: [],
}
