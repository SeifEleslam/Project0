function search (val) {
    if (val == ""){
        notify("noVal")
        return
    }
    console.log(val)
    let final = ""
    const arr = val.split(" ")
    for (i in arr){
        final += arr[i]
        if (i < (arr.length)-1){
            final += "+"
        }
    }
    console.log(final)
    window.open("https://www.google.com/search?q="+final, "_self")
}

function lucky (val) {
    if (val == ""){
        window.open("https://www.google.com/doodles","_self")
    }
    let final = ""
    const arr = val.split(" ")
    for (i in arr){
        final += arr[i]
        if (i < (arr.length)-1){
            final += "+"
        }
    }
    console.log(final)
    window.open("https://www.google.com/search?q="+final+"&btnI=I'm+Feeling+Lucky", "_self")
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

