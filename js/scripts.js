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




  $(".opta").click(function (){
    let ans = $(this).find("span").text()
    let number = $(".opta").index(this)

    if (ans === "b" ){
      $("#count").text(add())
      $(".opta").eq(number).addClass("pickc")
    }else{
      $(".opta").eq(0).addClass("pickc")

      $(".opta").eq(number).addClass("pickr")
    }
   
    $(".opta").prop("disabled" ,true);
  })


}) 