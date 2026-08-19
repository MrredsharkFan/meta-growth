function switch_tab(t) {
    if (t == "p" & player.total_points.lte(1e24)) { return };
    if (t == "m" & player.total_points.lte(1e308)) { return };
    document.getElementById("pres-tab").style.display = (t == "p" ? "block" : "none")
    document.getElementById("auto-tab").style.display = (t == "m" ? "block" : "none")
    if (t == "m") {
        gen_auto_triggers()
        gen_auto_triggered()
    }
    document.getElementById("extra-tab").style.display = (t == "e" ? "block" : "none")
}