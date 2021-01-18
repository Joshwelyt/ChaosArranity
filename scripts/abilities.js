const incinerating = new StatusEffect("incinerating");
incinerating.damage = 75;
incinerating.effect = Fx.melting;

const lava = extend(Floor, "lava", {});
lava.status = incinerating;

// Core
const delta = extend(UnitType, "delta", {
    abilities: new Seq([new ForceFieldAbility(80, 5, 1000, 300), new RepairFieldAbility(25, 60, 80)])
  });
  delta.constructor = () => extend(PayloadUnit, {});

// Ground
  const titan = extend(UnitType, "t5-titan", {
    immunities: ObjectSet.with([
        StatusEffects.burning,
    ]),
  });
  titan.constructor = () => extend(UnitEntity, {});

// Adamantite Air
  const reliavent = extend(UnitType, "t1-reliavent", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 300, 16)])
  });
  reliavent.constructor = () => extend(UnitEntity, {});

  const siloArray = extend(UnitType, "t2-silo-array", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 240, 16)])
  });
  siloArray.constructor = () => extend(UnitEntity, {});
  
  const decimation = extend(UnitType, "t3-decimation", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 180, 16)])
  });
  decimation.constructor = () => extend(UnitEntity, {});

  const carnage = extend(UnitType, "t4-carnage", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 120, 16)])
  });
  carnage.constructor = () => extend(UnitEntity, {});

  const destruction = extend(UnitType, "t5-destruction", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0), new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0), new RepairFieldAbility(25, 60, 80)])
  });
  destruction.constructor = () => extend(UnitEntity, {});

// Adamantite Ground

const melter = extend(UnitType, "t1-melter", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 300, 16)])
  });
  melter.constructor = () => extend(LegsUnit, {});

const evasculator = extend(UnitType, "t2-evasculator", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 240, 16)])
  });
  evasculator.constructor = () => extend(LegsUnit, {});

  const blaster = extend(UnitType, "t3-blaster", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 180, 16)])
  });
  blaster.constructor = () => extend(LegsUnit, {});

  const catastrophere = extend(UnitType, "t4-catastrophere", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 120, 16)])
  });
  catastrophere.constructor = () => extend(LegsUnit, {});

  const death = extend(UnitType, "t5-death", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 60, 16)])
  });
  death.constructor = () => extend(LegsUnit, {});

// Adamantite Naval

const paralysis = extend(UnitType, "t1-paralysis", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 300, 16)])
  });
  paralysis.constructor = () => extend(UnitWaterMove, {});

  const ravager = extend(UnitType, "t2-ravager", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new ForceFieldAbility(101.7, 10, 3000, 600), new RepairFieldAbility(100, 240, 16)])
  });
  ravager.constructor = () => extend(UnitWaterMove, {});

  const abolisher = extend(UnitType, "t3-abolisher", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 180, 16), new UnitSpawnAbility(UnitTypes.flare, 1200, 0, 14)])
  });
  abolisher.constructor = () => extend(UnitWaterMove, {});

  const warmonger = extend(UnitType, "t4-warmonger", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 120, 16)])
  });
  warmonger.constructor = () => extend(UnitWaterMove, {});

  const demise = extend(UnitType, "t5-demise", {
    immunities: ObjectSet.with([
        incinerating,
        StatusEffects.wet,
        StatusEffects.melting,
        StatusEffects.burning,
        StatusEffects.muddy,
        StatusEffects.sapped,
        StatusEffects.sporeSlowed,
        StatusEffects.tarred,
        StatusEffects.shocked,
        StatusEffects.corroded
    ]),
    abilities: new Seq([new RepairFieldAbility(100, 60, 16), new UnitSpawnAbility(UnitTypes.flare, 300, 0, -26), new ForceFieldAbility(101.7, 16, 10000, 600)])
  });
  demise.constructor = () => extend(UnitWaterMove, {});