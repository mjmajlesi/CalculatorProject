let value = ""
let show = document.querySelector(".show")
const ButtonClick = (buton)=>{
    let text = buton.target.outerText
    if(text!=="="){
        value += text
        show.innerHTML = value
    }

};
const Result = ()=>{
    try{
        value = eval(value)
        show.innerHTML = value
    }
    catch(error){
        value = "Error!"
        show.innerHTML = value
    }
}
document.querySelectorAll("button").forEach(b => b.addEventListener('click' , ButtonClick));
document.querySelector(".result").addEventListener('click' , Result);


