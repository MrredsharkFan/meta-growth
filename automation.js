function auto_cost(x = player.automatons) { return new Decimal("1e750").times(new Decimal(1e10).pow(x.pow(2))) }

function auto_logic() {
    for (var i in player.automated) {
        var j = player.automated[i]
        if (j!=null) pupg(j, true)
    }
}

function buy_auto() {
    if (player.points.gte(auto_cost())) {
        player.points = player.points.sub(auto_cost())
        player.automatons = player.automatons.add(1)
    }
}

function gen_auto_triggers() {
    document.getElementById("auto_upg").innerHTML = ``
    for (var i in player.upgs) {
        document.getElementById("auto_upg").innerHTML = document.getElementById("auto_upg").innerHTML +
            `<button id="a${i}" onclick="switch_auto('${i}')" style="background-color: #ffffff">Autobuy<br>"${btn_name(i)}"?</button><br>`
    }
}

function switch_auto(i) {
    if (player.automated.includes(i)) {
        player.automated[player.automated.indexOf(i)] = null
        document.getElementById(`a${i}`).style.backgroundColor = "#ffffff"
    }
    else
        if (player.automated.length < player.automatons.toNumber() || player.automated.indexOf(null) != -1) {
            if (player.automated.indexOf(null) != -1) { //genuinely some coders WILL see this as a "last ditch effort" but I used it because why not
                player.automated[player.automated.indexOf(null)] = i
            } else { player.automated = player.automated.concat(i) }
        }
    gen_auto_triggered()
}

function gen_auto_triggered() {
    document.getElementById("auto_enabled").innerHTML = ``
    for (var i in player.automated) {
        var j = player.automated[i]
        if (!(null==j)) {
            document.getElementById("auto_enabled").innerHTML = document.getElementById("auto_enabled").innerHTML +
                `${btn_name(j)}<br>`
            console.log(i)
            document.getElementById(`a${j}`).style.backgroundColor = "#dddddd"
        }
    }
}