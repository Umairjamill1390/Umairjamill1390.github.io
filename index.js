const parallax1 = document.getElementById("parallax-1");
const parallax2 = document.getElementById("parallax-2");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  //   For Explanation Purpose:
  //   below code explains y we need to measure scroll and how scroll works
  //   console.log("Offset" + offset);
  //   console.log("Offset*0.7 : " + offset * 0.7);
  parallax1.style.backgroundPositionY = offset * -0.4 + "px";
  parallax2.style.backgroundPositionY = offset * -0.6 + "px";
});
