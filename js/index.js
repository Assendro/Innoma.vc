function showOrHideMenu() {
    let menu = document.getElementsByClassName('menu')
    let shadow = document.getElementsByClassName('header__shadow')
    if (menu[0].style.display == 'flex') {
        menu[0].style.display = 'none'
        shadow[0].style.display = 'none'
    } else { 
        menu[0].style.display = 'flex'
        shadow[0].style.display = 'block'
    }
}
function openOrCloseLogin() {
    let login = document.getElementsByClassName('login-form__container')
    if (login[0].style.display == 'block') {
        login[0].style.display = 'none'
    } else { 
        login[0].style.display = 'block'
    }
}



function changeChosenItem(chosen) {
    document.getElementsByClassName('map__item_chosen')[0].className = 'map__item'
    document.getElementsByClassName('map__item')[chosen].className = 'map__item_chosen'
}

function playStopVideo(elementNumber, buttonName) {
    if (document.getElementsByTagName('video')[elementNumber].paused) {
        document.getElementsByTagName('video')[elementNumber].play()
        document.getElementsByClassName(buttonName)[0].style.display = 'none'
    } else {
        document.getElementsByTagName('video')[elementNumber].pause()
        document.getElementsByClassName(buttonName)[0].style.display = 'flex'
    }
    
}

function openThemes(moduleNumber) {
    changeArrayButton(moduleNumber)

    for (let i = 1; i < document.getElementsByClassName('module__container')[moduleNumber].children.length; i++) {
        if (document.getElementsByClassName('module__container')[moduleNumber].children[i].style.display != 'flex') {
            document.getElementsByClassName('module__container')[moduleNumber].children[i].style.display = 'flex'
        } else {
            document.getElementsByClassName('module__container')[moduleNumber].children[i].style.display = 'none'
        }
    }


}

function changeArrayButton(moduleNumber) {
    let arrayUp = document.getElementsByClassName('array_up')
    let arrayDown = document.getElementsByClassName('array_down')    

    if (arrayDown[moduleNumber].style.display == 'none') {
        arrayUp[moduleNumber].style.display = 'none'
        arrayDown[moduleNumber].style.display = 'block'
    } else {
        arrayUp[moduleNumber].style.display = 'block'
        arrayDown[moduleNumber].style.display = 'none'
    }
}

document.addEventListener("keydown", (key) => {
    if (key.code === 'Escape' && document.getElementsByClassName('login-form__container')[0].style.display == 'block') {
        openOrCloseLogin()
    }
})