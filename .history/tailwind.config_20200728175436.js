module.exports = {
  purge: [],
  theme: {
    colors:{
        
    },
    extend: {
        height:theme =>({
          'dashboard' : '80vh'
        }),
        width:theme =>({
          'main' : '40%'
        }),
        backgroundColor:theme=>({
          gray:{
            dark:'#262626'
          },
          orange:{
            nav:'#e1b838'
          },
        })
  },
  // hover,responsive,focus,active,
   // for the active a href when you click it, bg color
  variants: { 
    backgroundColor:['responsive','hover','focus','active']
   
  },
  plugins: [],
}
