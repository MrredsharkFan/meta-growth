function exp() {
    var J = new Decimal(0)
    J = J.add(player.basic_upgrades[2].div(100))
    return J
}
function log_exp() {
    var J = new Decimal(0)
    J = J.add(player.basic_upgrades[0])
    return J
}
function mul() {
    var J = new Decimal(1)
    J = J.add(player.basic_upgrades[1])
    return J
}
function get_gain() {return player.points.add(1).log10().add(1).pow(log_exp()).times(player.points.add(1).pow(exp())).times(mul())}


function cost_bu1(x = player.basic_upgrades[0]) { return x.pow(2).div(2).pow_base(8).times(10) }
function cost_bu2(x = player.basic_upgrades[1]) { return x.pow_base(1.25).times(100).times(x.add(1)) }
//remove the .times(x) in a future upgrade because i dont want to deal with lambert W
function cost_bu3(x = player.basic_upgrades[2]) {
    if (x.lte(90)) {
        return x.add(1).pow_base(1.1).pow_base(2).times(50)
    } else {
        return Decimal.dInf
    }
}

function bu1() {
    if (player.points.gte(cost_bu1())) {
        player.points = player.points.sub(cost_bu1());
        player.basic_upgrades[0] = player.basic_upgrades[0].add(1)
    }
}
function bu2() {
    if (player.points.gte(cost_bu2())) {
        player.points = player.points.sub(cost_bu2());
        player.basic_upgrades[1] = player.basic_upgrades[1].add(1)
    }
}
function bu3() {
    if (player.points.gte(cost_bu3())) {
        player.points = player.points.sub(cost_bu3());
        player.basic_upgrades[2] = player.basic_upgrades[2].add(1)
    }
}


function update(dt) {
    //the player, dt = delta time    
    player.points = player.points.add(get_gain().times(dt/1000))
}

ct = Date.now()
let loop = setInterval(function () {

    var t = Date.now() - ct
    ct = Date.now()
    update(typeof (t) == "undefined" ? 0 : t)

    
},1)