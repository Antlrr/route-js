
const thepolyceswrath = extend(Weapon, {
  reload: 1,
  top: true,
  mirror: false,
  shots: 1,
  rotate: false,
  inaccuracy: 4.05,
  x: 0,
  y: 0,
  shootStatus: StatusEffects.overclock,
  shootStatusDuration: 180,
  recoil: 0,
  shootSound: Sounds.laser,
});
//hopefully accurate
const thepolyceswrathprojfrag = extend(LaserBulletType, {
  damage: 43000,
  lifetime: 16,
  width: 8,
  length: 8 * 13,
  pierce: true,
});

const thepolyceswrathproj = extend(EmpBulletType, {
  lifetime: 85,
  speed: 5,
  damage: 99999,
  height: 1000,
  width: 1000,
  pierce: true,
  shootEffect: Fx.shootSmall,
  smokeEffect: Fx.shootSmallSmoke,
  buildingDamageMultiplier: 10000,
  fragBullets: 10,
  fragBullet: thepolyceswrathprojfrag,
});

thepolyceswrathproj.bullet = thepolyceswrathproj;

module.exports = {
  thepolyceswrath: thepolyceswrath
}