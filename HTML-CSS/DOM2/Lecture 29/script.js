const URL = "https://official-joke-api.appspot.com/random_joke";

fetch(URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const jokeElement = document.getElementById('joke');
        const p1 = document.createElement('p');

        p1.innerText = data.setup;

        jokeElement.appendChild(p1);

        setTimeout(()=>{
            const p2 = document.createElement('p');
            p2.innerText = data.punchline;

            jokeElement.appendChild(p2);
        },3000)

    });