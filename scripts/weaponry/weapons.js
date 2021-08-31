
//frags go first, bullets go second, weapons go third, bullet setters go fourth, and the exporter goes last
const thepolyceswrathprojfrag = extend(LaserBulletType, {
    damage: 43000,
    lifetime: 16,
    width: 8 * 4,
    length: 8 * 26,
    pierce: true,
});

const thepolyceswrathproj = extend(EmpBulletType, {
    lifetime: 85,
    speed: 5,
    damage: 99999,
    height: 1000,
    width: 1000,
    hitSize: 120,
    pierce: true,
    shootEffect: Fx.shootSmall,
    smokeEffect: Fx.shootSmallSmoke,
    buildingDamageMultiplier: 10000,
    fragBullets: 25,
    fragBullet: thepolyceswrathprojfrag,
})

const thepolyceswrath = extend(Weapon, {
    reload: 1,
    top: true,
    mirror: false,
    shots: 1,
    rotate: false,
    inaccuracy: 0,
    x: 0,
    y: 0,
    shootStatus: StatusEffects.overclock,
    shootStatusDuration: 180,
    recoil: 0,
    shootSound: Sounds.laser,
    shootType: thepolyceswrathproj,
});

const broomproj = extend(BasicBulletType, {
    damage: 45,
    length: 8,
    height: 8 * 6,
    speed: 6,
    lifetime: 60 * 1,
    spin: 15,
    knockback: 5,
});

const broom = extend(Weapon, {
  reload: 55,
  shootSound: Sounds.explosion,
  x: 0,
  y: 0,
  mirror: false,
})


thepolyceswrath.bullet = thepolyceswrathproj;
broom.bullet = broomproj;

module.exports = {
    thepolyceswrath: thepolyceswrath,
    broom: broom
}