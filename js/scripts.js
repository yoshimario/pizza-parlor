// Business Logic for Devil's Pizza

function PizzaOrder() {

}
)

// User Experience Element

$(document).ready(function() {
  attachContactListeners();
  $("form#pizzForm").submit(function(event) {
    event.preventDefault();

  });
});
function deferVideo() {

  //defer html5 video loading
$("video source").each(function() {
  var sourceFile = $(this).attr("data-src");
  $(this).attr("src", sourceFile);
  var video = this.parentElement;
  video.load();
  // uncomment if video is not autoplay
  //video.play();
});

}
window.onload = deferVideo;
