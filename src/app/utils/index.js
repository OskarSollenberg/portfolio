export function scrollToTopOnUnload() {
  if (typeof window !== "undefined") {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }
}
