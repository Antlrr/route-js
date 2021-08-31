
const yeet = extend("weaponry/weapons");

const maidpoly = extend(UnitType, "maidpoly", {
    health: 450,
    armor: 0,
    speed: 3.05,
    drag: 0.03,
    accel: 0.1,
    buildSpeed: 4,
    mineSpeed: 3,
    mineTier: 10,
});
//required
maidpoly.constructor = () => extend(UnitEntity, {});
maidpoly.defaultController = () => extend(BuilderAI, {});
//yeet the broom
maidpoly.weapons.add(
    )

Log.info("Ehehehe~");