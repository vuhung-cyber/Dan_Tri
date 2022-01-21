var bacham = document.querySelector(".ba_cham")

bacham.addEventListener("click", function(event){

    var newBaCham =  document.querySelector("#bacham")

    if(newBaCham.style.display == "none") {
        newBaCham.style.display = "block"
    }else {
        newBaCham.style.display = "none"
    }
})

xahoi.addEventListener("mouseout", function(event) {
    event.target.nextElementSibling.remove()
})
