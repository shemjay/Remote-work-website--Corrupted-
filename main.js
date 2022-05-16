const links = document.querySelectorAll(".navbar-flex>li")
links.forEach((el, i) => {
  el.isOpen = false;
  el.onclick = e => {
    const dropdown = el.querySelector(".dropdown")
    const arrow = el.querySelector(".dropdown-arrow")
    el.isOpen ? close(dropdown,
      arrow) : open(dropdown,
      arrow)
    el.isOpen = !el.isOpen
    //Close other open dropdowns
    links.forEach((el, j) => {
      const dropdown = el.querySelector(".dropdown")
      const arrow = el.querySelector(".dropdown-arrow")
      if (i !== j) {
        if (el.isOpen) {
          close(dropdown, arrow)
          el.isOpen = false
        }
      }
    })
  }

})


function open(el, arrow) {
  el.classList.add("show")
  arrow.classList.add("rotate")
}

function close(el, arrow) {
  el.classList.remove("show")
  arrow.classList.remove("rotate")
}