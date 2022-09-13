function alertMe () {
    return alert(`WHY DID YOU CLICK THE BUTTON??`)
}

function addingEventListener() {
    const btn = document.getElementById("button")
    btn.addEventListener(`click`, alertMe)
}
