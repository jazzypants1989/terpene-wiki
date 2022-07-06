document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
    const terpeneName = document.querySelector('input').value.toLowerCase()
    try{
        const response = await fetch(`https://terpene-api-demo.herokuapp.com/api/${terpeneName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('terpName').innerText = data.terpName
        document.getElementById('scent').innerText = data.scent
        document.getElementById('benefits').innerText = data.benefits.join(', ')
        document.getElementById('effects').innerText = data.effects.join(', ')
        document.getElementById('nature').innerText = data.nature
        document.getElementById('strains').innerText = data.strains.join(', ')
        document.getElementById('image').src = data.image
        document.getElementById('caption').innerText = data.terpName
    } catch(error) {
        console.log(error)
    }
}