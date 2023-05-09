
var addBtn = $('<button>Add</button>')
addBtn.attr('id', 'Addbuttn')
var inputImage = $('<input "add image URL"/>')
inputImage.attr('type', 'url')

var inputName = $('<input/>')
inputImage.addClass('input')
inputName.addClass('input')
addBtn.addClass('input')

$(".container").css("text-align", "center") 

$("#add").on("click", function() {
  $(inputName).fadeIn("slow")
  $(inputImage).fadeIn("slow")
  $(addBtn).fadeIn("slow")

  $("body").append(inputImage)
  $("body").append(inputName)
  $("body").append(addBtn)

})


$(addBtn).on("click", function() {
  $(inputImage).hide()
  $(inputName).hide()
  $(addBtn).hide()

  // image
  var img = $('<img>').attr('src', inputImage.val())
  var container = $('<div>')
  container.append(img)
  img.addClass('card')

  // name 
  var name = $('<h4>').text(inputName.val())
  container.append(name)

  var absentBtn = $('<button>').text('Absent')
  var pinCount = 0

  absentBtn.on('click', function() {
  
    pinCount++
    if (pinCount >= 5) {
      $(container).hide()
     

    } else {
      var pin = $('<span class="pin">').text('📌')
      container.append(pin)
    }
  })

  container.append(absentBtn)

  $('body').append(container)

})

var btn = document.getElementsByClassName("btn");


btn.onclick = function() {
  console.log("Button clicked!");
};
var pinCount =0
$('.btn').on("click",function(){
  pinCount++
  if (pinCount >= 5) {
    $(".card").hide()
   

  } else {
    var pin = $('<span class="pin">').text('📌')
    $('.card2').append(pin)
  }
})

