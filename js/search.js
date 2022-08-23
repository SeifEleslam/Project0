function search (val, type) {
    let final = ""
    const arr = val.split(" ")
    for (i in arr){
        final += arr[i]
        if (i < (arr.length)-1){
            final += "+"
        }
    }
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

