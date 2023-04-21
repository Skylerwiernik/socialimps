  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  function showPopup(popupNumber) {
    document.getElementById("popup" + popupNumber).style.display = "block";
  }

  function hidePopup(popupNumber) {
    document.getElementById("popup" + popupNumber).style.display = "none";
  }