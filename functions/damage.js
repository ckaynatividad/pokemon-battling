export function damage(attStat, defStat, defHP) {
    const dmg = ((210) / 250) * (attStat / defStat) + 2; //maybe add random from 0.85-1.15
    const hp = defHP - dmg;

    return hp;
}