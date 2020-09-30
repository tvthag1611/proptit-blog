var btn_search = document.getElementById("search_btn")

btn_search.addEventListener('click', () => {
  let input_search = document.getElementById("input-search")
  if (input_search.style.display === 'block') {
    input_search.style.display = 'none'
  }
  else input_search.style.display = 'block'
  
  let navRight = document.getElementById("navbar-right")
  if (navRight.style.width === "350px") {
    navRight.style.width = "180px"
  }
  else navRight.style.width = "350px"
})