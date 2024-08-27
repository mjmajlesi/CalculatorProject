let value = ""
let result = ""
let show = document.querySelector(".show")
let showResult = document.querySelector(".showResult")
const ButtonClick = (buton)=>{
    let text = buton.target.outerText
    if(text!=="="){
        value += text
        show.innerHTML = value
    }

};
const Result = ()=>{
    try{
        result = eval(value)
        show.className = "Show"
        showResult.innerHTML = result
        value = ""
    }
    catch(error){
        value = "Error!"
        show.innerHTML = value
    }
}
document.querySelectorAll("button").forEach(b => b.addEventListener('click' , ButtonClick));
document.querySelector(".result").addEventListener('click' , Result);


