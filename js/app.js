function app(){
//ввод данных
    //let name = prompt("введите имя")
    let number = parseInt(document.getElementById('inp').value) 
    let result = NaN
//логика
if(number == NaN) {
    alert('Ошибка! вы ввели текст введите пожалуйста число!')
    }
if(number == 0){
        document.getElementById('inform').innerText = 'квадрат нуля равен нулю'
    }  
    else {
        result = number * number
        document.getElementById('results').innerText = result
    }
    

//вывод

}