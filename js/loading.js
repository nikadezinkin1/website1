const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)



function blurring(){
    load++
    loadText.innerText = `${load}%`
    bg.style.filter = `blur(${30 - 0.3*load}px)`
    loadText.style.opacity = `${1 - load/100}`
    if (load == 100){
        clearInterval(int)
    }
}