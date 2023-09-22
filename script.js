const btn = document.querySelector('.btn')
const author = document.querySelector('.author')
const quote = document.querySelector('.quote')

const api_url = 'https://type.fit/api/quotes'

btn.addEventListener('click', btnClick)



function btnClick (){
    const random = Math.floor(Math.random() * 16)

    fetch(api_url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        quote.innerText = `"${data[random].text}"`
        author.innerText = `--${data[random].author}--`
    })

}
