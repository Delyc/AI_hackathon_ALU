
export const languageChange = () => {




const langEl = document.querySelector('.langWrap')
const link = document.querySelectorAll('a')
const titleEl = document.getElementById('#title')
const descEl = document.getElementById('#description')


link.forEach(el => {
    el.addEventListener('click', () => {
        console.log("el", el)
        langEl.querySelector('.active').classList.remove('active')
        el.classList.add('active')
        const attr = el.getAttribute('lang')

        console.log("value", document.getElementById("title").value)
        document.getElementById("title").textContent = data[attr].title
        document.getElementById("description").textContent = data[attr].description

    })
})
var data = {
    "english" : 
    {
        "title" : "testtt",
        "description" : "Testing englis"
    },

    "kiny" : 
    {
        "title" : "muraho",
        "description" : "muraho cyane"
    }
}

}

