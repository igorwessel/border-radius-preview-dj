function isNumber(event) {
    let keycode = event.keyCode;
    if (keycode > 48 && keycode < 57) {
        return true
    } else {
        return false
    }
}