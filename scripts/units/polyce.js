
const death = require("weaponry/weapons");

const polyce = extend(UnitType, "polyce", {
  health: Number.MAX_VALUE,
  armor: Number.MAX_VALUE,
  speed: 3.20,
  mineTier: 9,
  drag: 4,
  mineSpeed: 9999,
  buildSpeed: 9999,
  itemCapacity: 150000,
  engineSize: 0,
  range: 240,
  maxRange: 240,
  flying: true,
});
//required
polyce.constructor = () => extend(UnitEntity, {});
polyce.defaultController = () => extend(BuilderAI, {});
//weaponry
polyce.weapons.add(
  death.thepolyceswrath
);
