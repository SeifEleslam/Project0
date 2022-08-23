var inputs = document.getElementsByTagName("input");
console.log(inputs[0])
console.log(document.getElementById("inValue2"))

for (let input of inputs){
    input.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("myBtn").click();
        }
    }); 
}
    

function search (val, type) {
    let final = ""
    const arr = val.split(" ")
    final = arr.join("+")
    if (type == "search"){
        if (val == ""){
            notify("noVal")
            return
        }
        window.open("https://www.google.com/search?q="+final, "_self")
    }
    else if (type == "lucky"){
        if (val == ""){
            window.open("https://www.google.com/doodles","_self")
        }
        window.open("https://www.google.com/search?q="+final+"&btnI=I'm+Feeling+Lucky", "_self")
    }
    else if(type == "images"){
        if (val == ""){
            notify("noVal")
            return
        }
        window.open("https://www.google.com/search?q="+final+"&tbm=isch", "_self")
    }
}

function advSearch(all, exact, any, none){
    if (all == "" && exact == "" && any == ""){
        notify("noVal")
        return
    }
    const arr1 = all.split(" ")
    all = arr1.join("+")
    const arr2 = exact.split(" ")
    exact = arr2.join("+")
    const arr3 = any.split(" ")
    any = arr3.join("+")
    const arr4 = none.split(" ")
    none = arr4.join("+")
    window.open("https://www.google.com/search?as_q="+all+"&as_epq="+exact+"&as_oq="+any+"&as_eq="+none, "_self")

}

function notify(state){
    const element = document.getElementById(state)
    animate(element)
}

function animate (element){
    if (element.classList.contains("show")){
        return
    }
    element.classList.add('show')
    setTimeout(function(){
        element.classList.remove("show")
    }, 5000)
}

