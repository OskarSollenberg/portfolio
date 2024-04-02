// setViewportDimensions.js
const setVhVw = () => {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};

window.addEventListener("resize", setVhVw);
setVhVw();
