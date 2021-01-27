function randomExcuse(){

let who = ['The dog','My grandma','His turtle','My bird']

let action = ['ate','peed','crushed','broke'];

let what = ['my homework', 'the keys', 'the motorcycle'];

let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


let randomnumber1= Math.floor(Math.random() * 4)
let randomnumber2= Math.floor(Math.random() * 3)
let randomnumber3= Math.floor(Math.random() * 3)
let randomnumber4= Math.floor(Math.random() * 5)

let text = `${who[randomnumber1]} ${when[randomnumber2]} ${what[randomnumber3]} ${action[randomnumber4]}`
let parrafo= document.querySelector("#excuse")
parrafo.innerHTML= text
};

randomExcuse()

