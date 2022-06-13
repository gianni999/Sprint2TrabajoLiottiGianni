let cont=0;
let suma=0;
let cut=0;

function add() {
    let name=$("#userName").val();
    let money=$("#userMoney").val();
    cont+=1;

    distribute(name, money, cont);

    let nametoshow=`<h5> ${name}: </h5>`
    let moneytoshow=`<h5> $ ${money}: </h5>`

    $("#historyName").append(nametoshow);
    $("#historyMoney").append(moneytoshow);
}

function distribute(_person, spent, c) {
    suma+= parseInt(spent);
    $("#result").text("$" + suma);

    cut=suma / c;
    $("#cut").text("$" + (Math.round(cut)));
}