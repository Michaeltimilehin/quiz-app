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
  $(".next-btn").click(function (){
    $(".quiz-cont").hide()
    $(".tipsy").show()
  })

  $(".click").click(function (){
    $(".quiz-cont").hide()
    $(".tipsy").hide()
    $(".gipsy").show()
  })

  $(".opta").click(function (){
    let ans = $(this).find("span").text()
    let number = $(".opta").index(this)

    if (ans === "b" ){
      $("#count").text(add())
      $(".opta").eq(number).addClass("pick")
    }else{
      $(".opta").eq(number).addClass("pick")
    }
   
    $(".opta").prop("disabled" ,true);
  })


}) 