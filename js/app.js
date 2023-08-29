   
function name1(){
    let first_name = prompt('Введите ваше имя')
    let second_name = prompt ('введите вашу фамилию')
    //логика
    let yur_name = `${first_name} ${second_name}`
    document.getElementById("names").innerText = yur_name
 }
 function chat(){
    let message = NaN
    let yur_names = NaN
    let result
        message = document.getElementById('inp').value 
        yur_names = document.getElementById('name').value
        result = `${yur_names} - ${message}`
        document.getElementById('first_mesage').innerText = result
        console.log(result)
        document.getElementById('inp').value = "";
 }
