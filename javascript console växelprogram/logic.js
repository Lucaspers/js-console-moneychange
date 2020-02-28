var coins = prompt("Vad kostar artikeln?")
var amount = prompt("Hur mycket betalar du?")

var change = amount - coins

var money = {
    tusenLapp: {
        värde: 1000,
        antalTillbaka: 0
    }, femhundraLapp: {
        värde: 500,
        antalTillbaka: 0
    }, tvåhundraLapp : {
        värde: 200,
        antalTillbaka: 0
    }, hundraLapp: {
        värde: 100,
        antalTillbaka: 0
    }, femtioLapp: {
        värde: 50,
        antalTillbaka: 0
    }, tjugoLapp: {
        värde: 20,
        antalTillbaka: 0
    }, tiokrona: {
        värde: 10,
        antalTillbaka: 0
    }, femkrona: {
        värde: 5,
        antalTillbaka: 0
    }, tvåkrona: {
        värde: 2,
        antalTillbaka: 0
    }, enkrona: {
        värde: 1,
        antalTillbaka: 0
    }
}

while(change > 0) {
    if(change >= money.tusenLapp.värde) {
        money.tusenLapp.antalTillbaka++
        change -= money.tusenLapp.värde

    } else if(change >= money.femhundraLapp.värde) {
        money.femhundraLapp.antalTillbaka++
        change -= money.femhundraLapp.värde

    } else if(change >= money.tvåhundraLapp.värde) {
        money.tvåhundraLapp.antalTillbaka++
        change -= money.tvåhundraLapp.värde

    } else if(change >= money.hundraLapp.värde) {
        money.hundraLapp.antalTillbaka++
        change -= money.hundraLapp.värde

    } else if(change >= money.femtioLapp.värde) {
        money.femtioLapp.antalTillbaka++
        change -= money.femtioLapp.värde

    } else if(change >= money.tjugoLapp.värde) {
        money.tjugoLapp.antalTillbaka++
        change -= money.tjugoLapp.värde

    } else if(change >= money.tiokrona.värde) {
        money.tiokrona.antalTillbaka++
        change -= money.tiokrona.värde

    } else if(change >= money.femkrona.värde) {
        money.femkrona.antalTillbaka++
        change -= money.femkrona.värde

    } else if(change >= money.tvåkrona.värde) {
        money.tvåkrona.antalTillbaka++
        change -= money.tvåkrona.värde

    } else {
        money.enkrona.antalTillbaka++
        change -= money.enkrona.värde
    }

}

console.log(money)

