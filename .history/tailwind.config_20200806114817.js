module.exports = {
  purge: [],
  theme: {
   
    extend: {
        height:theme =>({
          'dashboard' : '80vh',
          '60%':'60%',
          '90%':'90%',
          '97%':'97%',
          '94%':'94%',
          '75%':'75%',
          '95%':'95%',
          '85%':'85%',
          '80%':'80%',
          '88%':'88%',
          '120vh':'120vh',
          '110vh':'110vh'
        }),
        width:theme =>({
          'main' : '40%'
        }),
        
        colors:{
          main:'#262626',
          
          orange:{
            nav:'#e1b838'
          },
          margin-top:theme =>({
            '18rem' : '18rem'
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
}
