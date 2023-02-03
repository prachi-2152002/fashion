gsap.from("#txt3-1",{
  scrollTrigger:{
     trigger:"#txt3-1",
     scroll:"#main",
     start:"top 30%",
  },
  opacity:1,
  duration:.5,
  y:290
})

gsap.from("#button1",{
  scrollTrigger:{
     trigger:"#button1",
     scroll:"#main",
     start:"top 20%",
  },
  opacity:1,
  duration:.5,
  y:280
})

gsap.from("#middleicon",{
  scrollTrigger:{
     trigger:"#middleicon",
     scroll:"#main",
     start:"top 20%",
  },
  opacity:1,
  duration:.5,
  y:170
})