
const rb1 = document.querySelector('input[id="cb-skills"')

rb1.addEventListener('change', function(e) {
    document.getElementById('card-experience').style.display = 'none'
    document.getElementById('card-skills').style.display = 'block'
})

const rb2 = document.querySelector('input[id="cb-experience"')

rb2.addEventListener('change', function(e) {
    document.getElementById('card-experience').style.display = 'block'
    document.getElementById('card-skills').style.display = 'none'
})


/**
 * When the DOM is loaded, click the Skills radio button
 */
document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('cb-skills').click()
})