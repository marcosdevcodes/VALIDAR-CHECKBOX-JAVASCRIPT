// Estou selecionando todos os inputs checkbox
const checkBoxes = document.querySelectorAll(".pill input[type='checkbox']");

// Vou criar um loop agora com a variavel checkBox
// Usando forEach para percorrer todos os elementos
//O primeiro elemento da coleção parametro check
checkBoxes.forEach( (checkbox, index) => {

    checkbox.addEventListener("change", () => {
// Aqui eu vou verificar se o primeiro esta marcado
// se não estiver marcado vai pegar o ultimo e 
// desmarca todos eles
// O i vai receber o checkBoxes.length - 1 que é o ultimo
// Se o primeiro checkbox não estiver marcado 
// !checkbox.checked esse if esta negando ele então i
// vai receber checkBoxes.length - 1 que é o ultimo
// e se i for maior q index ou seja a posição dele 
// vai fazer um desencremento vai desligar os outros
        if(!checkbox.checked){
            for(let i = checkBoxes.length - 1; i > index; i--){
                checkBoxes[i].checked = false;
            }
        }


        let allChecked = true;
        for(let i = 0; i < index; i++){
            if(!checkBoxes[i].checked){
                allChecked = false;
                break;
            }
        }
        if(!allChecked){
            setTimeout( () => checkbox.checked = false, 250)
        }
    })
})