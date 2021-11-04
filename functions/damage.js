export function damage(attStat, defStat, defHP, power) {
    const dmg = ((((210) / 250) * ((attStat / defStat)) * ((Math.random() * 0.3) + 0.85) / 50 + .5) * power);
    //console.log('DAMAGE', dmg);
    //const hp = defHP - dmg;
    //console.log('THIS HP NOW', hp);
    return Number(dmg);
}
export function heals(maxHealth, currenthp) {
    const heal = maxHealth * .5;
    const hp = currenthp + heal;
    if (hp > maxHealth) {
        return maxHealth;
    } else {
        return hp;
    }
}