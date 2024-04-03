let boy = parseInt(prompt('Boy (santimetr cinsinden):'));
let ceki = parseInt(prompt('Kiloqram (kg cinsinden):'));
boy = boy/100

let bmi = ceki /(boy**2);
alert('BMI: ' + bmi);
if(bmi>25){
    alert('Ariqla Biraz')
}
else if(bmi>18.5 && bmi<24.9){
    alert('Normalsan')
}
else{
    alert('Biraz yemek ye')
}