function isNumber(event) {
    let keycode = event.keyCode;
    if (keycode > 47 && keycode < 59) {
        return true
    } else {
        return false
    }
}