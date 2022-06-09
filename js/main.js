document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
    const terpName = document.querySelector('input').value.toLowerCase()
    try{
        const response = await fetch(`https://terpene-api-demo.herokuapp.com/api/${terpName}`)
        const data = await response.json()
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}