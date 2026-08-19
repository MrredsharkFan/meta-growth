var app = new Vue({
    el: "#app",
    data: {
        player,
        format,

        mul,
        exp,
        log_exp,
        get_gain,

        cost_bu1,
        cost_bu2,
        cost_bu3,

        prestige_gain,
        prestige_boost,
        pres_req,

        upg_cost,

        auto_cost,

        sp_boost,
        sp_boost_2,
        sp_boost_3,
        sps
    }
}
)

gen_all_upgs(player.page)