# Veja o vídeo do projeto.



https://github.com/user-attachments/assets/36289f4d-3003-45e5-a987-a0ea7993f14b

# Explicando um pouco o JavaScript:

## Vamos analisar o código JavaScript em detalhes, usando um exemplo prático para entender como cada parte funciona. Vou abordar a função forEach, os parâmetros que ela recebe, os loops for, e as condicionais if dentro do código.
```
const checkBoxes = document.querySelectorAll(".pill input[type='checkbox']");

checkBoxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        if (!checkbox.checked) {
            for (let i = checkBoxes.length - 1; i > index; i--) {
                checkBoxes[i].checked = false;
            }
        }

        let allChecked = true;
        for (let i = 0; i < index; i++) {
            if (!checkBoxes[i].checked) {
                allChecked = false;
                break;
            }
        }
        if (!allChecked) {
            setTimeout(() => checkbox.checked = false, 250);
        }
    });
});

```
## 1 Seleção dos Checkboxes:
```
const checkBoxes = document.querySelectorAll(".pill input[type='checkbox']");

```
- O que acontece aqui: Seleciona todos os checkboxes no formulário. Esses checkboxes estão dentro de elementos com a classe .pill.
- Na prática: Suponha que você tem três checkboxes no seu formulário. Esse código cria uma "lista" (NodeList) que contém referências a cada um desses checkboxes.
## 2 Função forEach e seus Parâmetros:
```
checkBoxes.forEach((checkbox, index) => {

```
- forEach: Itera por todos os elementos na NodeList checkBoxes.
- Parâmetros:
- checkbox: Representa o checkbox atual em cada iteração. Na prática, na primeira iteração, checkbox será o primeiro checkbox; na segunda iteração, será o segundo checkbox, e assim por diante.
- index: Representa a posição (índice) do checkbox na NodeList. O índice começa em 0. Então, se você tiver 3 checkboxes, index será 0 para o primeiro, 1 para o segundo, e 2 para o terceiro.

## 3. Adicionando um Ouvinte de Evento:
```
checkbox.addEventListener("change", () => {

```
- O que acontece aqui: Para cada checkbox, o código adiciona um ouvinte de evento que reage quando o estado do checkbox muda (quando é marcado ou desmarcado).
## 4. Primeira Condicional if:
```
if (!checkbox.checked) {
    for (let i = checkBoxes.length - 1; i > index; i--) {
        checkBoxes[i].checked = false;
    }
}

```
- if (!checkbox.checked): Verifica se o checkbox atual foi desmarcado.

- Exemplo na prática: Suponha que você tem três checkboxes e o segundo (índice 1) está marcado. Se você desmarcar o segundo checkbox, essa condição será verdadeira.
- Loop for:

- let i = checkBoxes.length - 1; i > index; i--: Inicia o loop a partir do último checkbox (índice length - 1) e vai até o checkbox com o índice index + 1.
- checkBoxes[i].checked = false;: Desmarca todos os checkboxes após o que foi desmarcado.
- Exemplo na prática: Se o segundo checkbox (índice 1) for desmarcado, o loop verificará o terceiro checkbox (índice 2). Se ele estiver marcado, será desmarcado.
## 5. Segunda Condicional if e Loop for:
```
let allChecked = true;
for (let i = 0; i < index; i++) {
    if (!checkBoxes[i].checked) {
        allChecked = false;
        break;
    }
}

```
- let allChecked = true;: Inicialmente assume que todos os checkboxes anteriores estão marcados.
- Loop for:
- let i = 0; i < index; i++: Inicia o loop no primeiro checkbox e vai até o checkbox anterior ao atual.
- if (!checkBoxes[i].checked): Verifica se algum dos checkboxes anteriores ao atual não está marcado.
- allChecked = false;: Se um checkbox anterior não estiver marcado, define allChecked como false e interrompe o loop.
- Exemplo na prática: Se o segundo checkbox (índice 1) estiver sendo marcado e o primeiro (índice 0) não estiver marcado, allChecked será definido como false.
## 6. Desmarcando o Checkbox Atual se a Condição não For Satisfeita:
```
if (!allChecked) {
    setTimeout(() => checkbox.checked = false, 250);
}

```
- if (!allChecked): Se allChecked for false, significa que o usuário tentou marcar um checkbox sem seguir a ordem.
- setTimeout(() => checkbox.checked = false, 250);: Desmarca o checkbox atual após um pequeno atraso (250 ms).
- Exemplo na prática: Se o usuário tentar marcar o segundo checkbox sem marcar o primeiro, ele verá que o segundo checkbox é desmarcado automaticamente após um curto intervalo.

### Conclusão Prática:
- Ao interagir com o formulário:

- Marcando checkboxes na ordem correta:

- Se você marcar os checkboxes na ordem (do primeiro ao último), o código permitirá isso sem problemas.
- Desmarcando um checkbox intermediário:

- Se você desmarcar um checkbox, todos os checkboxes que vêm depois dele também serão desmarcados.
- Tentando marcar fora de ordem:

- Se você tentar marcar um checkbox sem ter marcado todos os anteriores, ele será automaticamente desmarcado, forçando você a seguir a ordem.



