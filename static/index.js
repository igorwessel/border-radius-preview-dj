let input = document.querySelectorAll('input')
let surface = document.querySelector('.surface')
let stylesheet = document.styleSheets[0].cssRules[8].style
let input_array = []
console.log(stylesheet)


input.forEach((e, k, n) => {
    e.addEventListener('input', (event) => {
        if (e.getAttribute('id') == 'input_tl') {
            input_array[0] = e.value
        } else if (e.getAttribute('id') == 'input_tr') {
            input_array[1] = e.value
        } else if (e.getAttribute('id') == 'input_bl') {
            input_array[2] = e.value
        } else {
            input_array[3] = e.value
        }
        input_array.map((v, i) => {
            if (v == '') {
                input_array[i] = '0'
            }
        })
        surface.style = `
        border-top-left-radius: ${input_array[0]}px;
        border-top-right-radius: ${input_array[1]}px;
        border-bottom-left-radius: ${input_array[2]}px;
        border-bottom-right-radius: ${input_array[3]}px;
        `
    })
})



function isNumber(event) {
    let keycode = event.keyCode;
    if (keycode > 47 && keycode < 59) {
        return true
    } else {
        return false
    }
}