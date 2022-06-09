document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
    const terpName = document.querySelector('input').value.toLowerCase()
    try{
        const response = await fetch(`https://terpene-api-demo.herokuapp.com/api/${terpName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('terpName').innerText = data.terpName
        document.getElementById('scent').innerText = data.scent
        document.getElementById('benefits').innerText = data.benefits
        document.getElementById('effects').innerText = data.effects
        document.getElementById('nature').innerText = data.nature
        document.getElementById('strains').innerText = data.strains
        document.getElementById('image').src = data.terpImage
        document.getElementById('caption').innerText = data.caption
    } catch(error) {
        console.log(error)
    }
}