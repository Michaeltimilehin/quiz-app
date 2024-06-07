 function add(){
  return parseInt($("#count").text()) + 1
}

$(document).ready (function (){
  $(".btn").click(function (){
  $(".show-btn").show();
  })
  $(".button").click(function (){
    $(".show-btn").hide( )
  })
  $(".button2").click(function (){
    $(".quiz-cont").show()
    $(".show-btn").hide()
    $(".back").hide()
  })
  $(".click1").click(function (){
    $(".quiz-cont").hide()
    $(".tipsy").show()
  })

  $(".click2").click(function (){
    $(".tipsy").hide()
    $(".gipsy").show()
  })

  $(".click3").click(function (){
    $(".gipsy").hide()
    $(".tipsy").hide()
    $(".flopsy").show()
  })

  $(".click4").click(function (){
    $(".gipsy").hide()
    $(".tipsy").hide()
    $(".flopsy").hide()
    $(".mopsy").show()
  })

  $(".click5").click(function (){
    $(".gipsy").hide()
    $(".tipsy").hide()
    $(".flopsy").hide()
    $(".mopsy").hide()
    $(".result-box").show()
  })




  $(".opta").click(function (){
    let ans = $(this).find("span").text()
    let number = $(".opta").index(this)

    if (ans === "Hyper Text Markup Language" ){
      $("#count").text(add())
      $(".opta").eq(number).addClass("pickc")
    }else{
      $(".opta").eq(2).addClass("pickc")

      $(".opta").eq(number).addClass("pickr")
    }
   
    $(".opta").prop("disabled" ,true);
  })





  $(".opta1").click(function (){
    let ans = $(this).find("span").text()
    let number = $(".opta1").index(this)

    if (ans === "Excellent Multiple Language" ){
      $("#count").text(add())
      $(".opta1").eq(number).addClass("pickc")
    }else{
      $(".opta1").eq(0).addClass("pickc")

      $(".opta1").eq(number).addClass("pickr")
    }
   
    $(".opta1").prop("disabled" ,true);
  })


  $(".opta2").click(function (){
    let ans = $(this).find("span").text()
    let number = $(".opta2").index(this)

    if (ans === "Bola Ahmed Tinubu" ){
      $("#count").text(add())
      $(".opta2").eq(number).addClass("pickc")
    }else{
      $(".opta2").eq(0).addClass("pickc")

      $(".opta2").eq(number).addClass("pickr")
    }
   
    $(".opta2").prop("disabled" ,true);
  })
  
   
  $(".opta3").click(function (){
    let ans = $(this).find("span").text()
    let number = $(".opta3").index(this)

    if (ans === "Mississippi" ){
      $("#count").text(add())
      $(".opta3").eq(number).addClass("pickc")
    }else{
      $(".opta3").eq(0).addClass("pickc")

      $(".opta3").eq(number).addClass("pickr")
    }
   
    $(".opta3").prop("disabled" ,true);
  })


  $(".opta4 ").click(function (){
    let ans = $(this).find("span").text()
    let number = $(".opta4").index(this)

    if (ans === "Tripod" ){
      $("#count").text(add())
      $(".opta4").eq(number).addClass("pickc")
    }else{
      $(".opta4").eq(0).addClass("pickc")

      $(".opta4").eq(number).addClass("pickr")
    }
   
    $(".opta4").prop("disabled" ,true);
  })

}) 