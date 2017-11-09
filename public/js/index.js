
onload = function () {
  var toiletRoom = document.querySelector(".toilet-room");
  var toiletName = document.querySelector(".toilet-name");

  toiletName.addEventListener("click", function () {
    if(!toiletRoom.classList.contains("on")){
      toiletRoom.classList.add("on");
    } else {
      toiletRoom.classList.remove("on");
    }
  });
};
