function displayOptions(element) {
  let q = document.querySelector(".optionsbar");
  if (element.name == "close-outline") {
    q.classList.add("md:translate-y-[-10rem]");
    q.classList.add("translate-y-[-110vh]");
    element.name = "reorder-four-outline";
  } else {
    element.name = "close-outline";
    q.classList.remove("md:translate-y-[-10rem]");
    q.classList.remove("translate-y-[-110vh]");
  }
}

