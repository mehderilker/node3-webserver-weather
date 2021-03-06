console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    fetch('/weather?address='+location).then((res)=> {
        messageOne.textContent = "Loading"
    
    res.json().then((data)=>{
            if (data.error){
                 return messageOne.textContent = data.error
            }else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
})
    console.log(location)
})
