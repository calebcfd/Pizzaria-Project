import {Context} from './Context.jsx'


function hoverBounce(e) {
    let key = e.target.dataset.name + 'Svg'
    let target = document.getElementById(key)

    console.log(target.classList.length == 1)
    if (target.classList.length == 1) {
        target.classList.toggle('play')
        setTimeout(()=>{
            target.classList.toggle('play')
        }, 750)
    }
    
}

export {hoverBounce}