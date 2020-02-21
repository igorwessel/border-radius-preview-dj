let input = document.querySelectorAll('input')
let surface = document.querySelector('.surface')
let code_text = document.querySelector('#code')
let input_array = [0, 0, 0, 0, 0, 0, 0, 0]


input.forEach((e, k, n) => {
    e.addEventListener('input', (event) => {
        if (e.getAttribute('id') == 'input_tl') {
            input_array[0] = e.value
        } else if (e.getAttribute('id') == 'input_tlt') {
            input_array[1] = e.value
        } else if (e.getAttribute('id') == 'input_tr') {
            input_array[2] = e.value
        } else if (e.getAttribute('id') == 'input_trt') {
            input_array[3] = e.value
        } else if (e.getAttribute('id') == 'input_bl') {
            input_array[4] = e.value
        } else if (e.getAttribute('id') == 'input_blb') {
            input_array[5] = e.value
        } else if (e.getAttribute('id') == 'input_br') {
            input_array[6] = e.value
        } else {
            input_array[7] = e.value
        }
        input_array.map((v, i) => {
            if (v == '') {
                input_array[i] = '0'
            }
        })
        surface.style = `
        border-top-left-radius: ${input_array[0]}px ${input_array[1]}px;
        border-top-right-radius: ${input_array[2]}px ${input_array[3]}px;
        border-bottom-left-radius: ${input_array[4]}px ${input_array[5]}px;
        border-bottom-right-radius: ${input_array[6]}px ${input_array[7]}px;
        `

        code_text.value = `-moz-border-radius: ${surface.style.cssText.slice(15)}
-webkit-border-radius: ${surface.style.cssText.slice(15)}
${surface.style.cssText}`

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