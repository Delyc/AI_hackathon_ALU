
export const languageChange = () => {




const langEl = document.querySelector('.langWrap')
const link = document.querySelectorAll('a')



link.forEach(el => {
    el.addEventListener('click', () => {
        console.log("el", el)
        langEl.querySelector('.active').classList.remove('active')
        el.classList.add('active')
        const attr = el.getAttribute('lang')

        console.log("value", document.getElementById("title").value)
        // document.getElementById("title").textContent = data[attr].title
        document.getElementById("description").textContent = data[attr].description
        document.getElementById("step1").textContent = data[attr].step1
        document.getElementById("step2").textContent = data[attr].step2
        document.getElementById("step3").textContent = data[attr].step3
        document.getElementById("step4").textContent = data[attr].step4
        // document.getElementById("descr1").textContent = data[attr].descr1
        // document.getElementById("descr2").textContent = data[attr].descr2
        document.getElementById("descr3").textContent = data[attr].descr3


    })
})
var data = {
    "english" : 
    {
        "description" : "We Are Your Financial Partner When You’ve Outgrown The Rest",
        "step1": "Free call/chat",
        "step2" : "Compile your information",
        "step3" : "Create a clear plan",
        "step4" : "Live with confidence",
        "decsr1" : "Our platform enables you to interact with our chatbot using both voice calls and text-based chat. To connect with our chatbot, please call this number: +18332725779.",
        "descr2" : "Our platform covers key financial topics and questions that you might have, such as retirement planning, debt management, or investment strategies.",
        "descr3" : "Our platform helps you achieve financial independence for you and your family. With our tools and resources, you can create a clear financial plan to reach your goals. Let us guide you towards a brighter financial future."
    },

    "kiny" : 
    {
        "description" : "Turi Abafatanyabikorwa bawe b'Imari Iyo Urenze Ibisigaye",
        'step1' : "Hamagara / kuganira kubuntu",
        "step2" : 'Kusanya amakuru yawe',
        "step3" : "Shiraho gahunda isobanutse",
        "step4" : "Baho ufite ikizere",
        "descr1" : "Ihuriro ryacu rigushoboza gukorana na chatbot yacu ukoresheje amajwi yombi hamwe nibiganiro bishingiye kumyandiko. Guhuza na chatbot yacu, nyamuneka hamagara iyi numero: +18332725779.",
        "descr2" : "Ihuriro ryacu rikubiyemo ingingo zingenzi zamafaranga nibibazo ushobora kuba ufite, nko gutegura ikiruhuko cyiza, gucunga imyenda, cyangwa ingamba zishoramari.",
        "descr3" : "Ihuriro ryacu rigufasha kugera kubwigenge bwamafaranga kuri wewe numuryango wawe. Hamwe nibikoresho byacu hamwe nibikoresho, urashobora gukora gahunda yimari isobanutse kugirango ugere kuntego zawe. Reka tuyobore ejo hazaza heza h'amafaranga."

    }
}

}

