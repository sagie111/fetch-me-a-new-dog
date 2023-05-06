const btn = document.getElementById("btn");
const img = document.getElementById("img");



window.addEventListener("load", (event) => {
    func();
});


btn.addEventListener("click" , func);


function func() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            img.src = data.message;

            if (data.message == reportError) {
                console.log("dildildol");
                func();
            }

            
        })
}


