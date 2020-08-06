module.exports = {
  purge: [],
  theme: {
   
    extend: {
        height:theme =>({
          'dashboard' : '80vh',
          '60%':'60%',
          '90%':'90%',
          '97%':'97%',
          '95%':'95%',
          '85%':'85%',
          '120vh':'120vh'
        }),
        width:theme =>({
          'main' : '40%'
        }),
        
        colors:{
          main:'#262626',
          
          orange:{
            nav:'#e1b838'
          }
      },
  },
  // hover,responsive,focus,active,
   // for the active a href when you click it, bg color
  variants: { 
    backgroundColor:['responsive','hover','focus','active']
   
  },
  plugins: [],
  }
}
