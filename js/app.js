   
function name1(){
    let first_name = prompt('Введите ваше имя')
    let second_name = prompt ('введите вашу фамилию')
    //логика
    let yur_name = `${first_name} ${second_name}`
    document.getElementById("names").innerText = yur_name
 
}

