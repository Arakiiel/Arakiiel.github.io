function radioButtonClicked(radioButton) {
  switch (radioButton.value) {
    case "screenshot1":
      fadeOutImages(1);
      fadeInImages();
      break;
    case "screenshot2":
      fadeOutImages(2);
      fadeInImages();
      break;
    case "screenshot3":
      fadeOutImages(3);
      fadeInImages();
      break;
  }
}

function fadeOutImages(value) {
  $("#image1").fadeOut(1000, function() {
    switch (value) {
      case 1:
        document.getElementById("image1").src =
          "content\\images\\screenshot1.png";
        break;
      case 2:
        document.getElementById("image1").src =
          "content\\images\\screenshot6.png";
        break;
      case 3:
        document.getElementById("image1").src =
          "content\\images\\screenshot11.png";
        break;
    }
  });
  $("#image2").fadeOut(1000, function() {
    switch (value) {
      case 1:
        document.getElementById("image2").src =
          "content\\images\\screenshot2.png";
        break;
      case 2:
        document.getElementById("image2").src =
          "content\\images\\screenshot7.png";
        break;
      case 3:
        document.getElementById("image2").src =
          "content\\images\\screenshot12.png";
        break;
    }
  });
  $("#image3").fadeOut(1000, function() {
    switch (value) {
      case 1:
        document.getElementById("image3").src =
          "content\\images\\screenshot3.png";
        break;
      case 2:
        document.getElementById("image3").src =
          "content\\images\\screenshot8.png";
        break;
      case 3:
        document.getElementById("image3").src =
          "content\\images\\screenshot13.png";
        break;
    }
  });
  $("#image4").fadeOut(1000, function() {
    switch (value) {
      case 1:
        document.getElementById("image4").src =
          "content\\images\\screenshot4.png";
        break;
      case 2:
        document.getElementById("image4").src =
          "content\\images\\screenshot9.png";
        break;
      case 3:
        document.getElementById("image4").src =
          "content\\images\\screenshot14.png";
        break;
    }
  });
  $("#image5").fadeOut(1000, function() {
    switch (value) {
      case 1:
        document.getElementById("image5").src =
          "content/images\\screenshot5.png";
        break;
      case 2:
        document.getElementById("image5").src =
          "content\\images\\screenshot10.png";
        break;
      case 3:
        document.getElementById("image5").src =
          "content\\images\\screenshot15.png";
        break;
    }
  });
}

function fadeInImages() {
  $("#image1").fadeIn(1000);
  $("#image2").fadeIn(1000);
  $("#image3").fadeIn(1000);
  $("#image4").fadeIn(1000);
  $("#image5").fadeIn(1000);
}

function radioButtonClickedMobile(radioButton) {
  var url = "content/images/" + radioButton.value + ".png";
  var background =
    "linear-gradient(rgba(67, 70, 75, 0.1), #282536),url(" +
    url +
    "), center, no-repeat";
  document.getElementById("headerMobile").style.background = background;
  document.getElementById("headerMobile").style.backgroundSize = "cover";
}

window.onload = function() {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("navbar");
  var headerMobileDiv = document.getElementById("headerMobile");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      headerMobileDiv.classList.add("stickyAdded");
    } else {
      navbar.classList.remove("sticky");
      headerMobileDiv.classList.remove("stickyAdded");
    }
  }
};
