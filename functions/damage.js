export function damage(attStat, defStat, defHP) {
    const dmg = (((210) / 250) * (attStat / defStat) * ((Math.random() * 0.3) + 0.85) + 2);
    const hp = defHP - dmg;

    return hp;
}
export function heals(maxHealth) {
    const heal = maxHealth * .5;
    const
}