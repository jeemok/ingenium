// import legConfiguratorTestImage from '../../static/images/leg-images/leg-configurator-small--test.png';
// import legPerspectiveTestImage from '../../static/images/leg-images/leg-metal-square-715--perspective-image.png';
// import metalSquare715Perspective from '../../static/images/leg-images/leg-metal-square-715--perspective-image.png';
// import metalSquare715ConfiguratorSmall from '../../static/images/leg-images/leg-metal-square-715--configurator-small.png';
// import metalRound715Perspective from '../../static/images/leg-images/leg-metal-round-715--perspective-image.png';
// import metalRound715ConfiguratorSmall from '../../static/images/leg-images/leg-metal-round-715--configurator-small.png';
// import metalHairpin715Perspective from '../../static/images/leg-images/leg-hairpin-715--perspective-image.png';
// import metalHairpin715ConfiguratorSmall from '../../static/images/leg-images/leg-hairpin-715--configurator-small.png';
// import metalSquare430ConfiguratorSmall from '../../static/images/leg-images/leg-metal-square-430--configurator-small.png';
// import metalSquare430Perspective from '../../static/images/leg-images/leg-metal-square-430--perspective-image.png';
// import woodSquare715Perspective from '../../static/images/leg-images/leg-wood-square-715--perspective-image.png';
// import woodSquare715ConfiguratorSmall from '../../static/images/leg-images/leg-wood-square-715--configurator-small.png';
// import woodRound715Perspective from '../../static/images/leg-images/leg-wood-round-715--perspective-image.png';
// import woodRound715ConfiguratorSmall from '../../static/images/leg-images/leg-wood-round-715--configurator-small.png';
// import woodSquare430Perspective from '../../static/images/leg-images/leg-wood-square-430--perspective-image.png';
// import woodSquare430ConfiguratorSmall from '../../static/images/leg-images/leg-wood-square-430--configurator-small.png';
// import woodRound430Perspective from '../../static/images/leg-images/leg-wood-round-430--perspective-image.png';
// import woodRound430ConfiguratorSmall from '../../static/images/leg-images/leg-wood-round-430--configurator-small.png';
// import woodCone715Perspective from '../../static/images/leg-images/leg-wood-cone-715--perspective-image.png';
// import woodCone715ConfiguratorSmall from '../../static/images/leg-images/leg-wood-cone-715--configurator-small.png';
// import woodCone430Perspective from '../../static/images/leg-images/leg-wood-cone-430--perspective-image.png';
// import woodCone430ConfiguratorSmall from '../../static/images/leg-images/leg-wood-cone-430--configurator-small.png';
//
// import metalSquare715InUse from '../../static/images/leg-images/in-use/leg-metal-square-715--in-use.jpg';
// import metalRound715InUse from '../../static/images/leg-images/in-use/leg-metal-round-715--in-use.jpg';
// import metalSquare430InUse from '../../static/images/leg-images/in-use/leg-metal-square-430--in-use.jpg';
// import woodSquare715InUse from '../../static/images/leg-images/in-use/leg-wooden-square-715--in-use.jpg';
// import woodRound715InUse from '../../static/images/leg-images/in-use/leg-wooden-round-430--in-use.jpg';
// import woodCone715InUse from '../../static/images/leg-images/in-use/leg-wooden-cone-715--in-use.jpg';
// import woodSquare430InUse from '../../static/images/leg-images/in-use/leg-wooden-square-430--in-use.jpg';
// import woodRound430InUse from '../../static/images/leg-images/in-use/leg-wooden-round-430--in-use.jpg';
// import woodCone430InUse from '../../static/images/leg-images/in-use/leg-wooden-cone-430--in-use.jpg';
// import metalHairpin715InUse from '../../static/images/leg-images/in-use/leg-metal-hairpin-715--in-use.jpg';

export const LegsList = [
  "metal-square-715",
  "metal-round-715",
  "metal-square-430",
  "metal-hairpin-715",
  "wooden-square-715",
  "wooden-round-715",
  "wooden-cone-715",
  "wooden-square-430",
  "wooden-round-430",
  "wooden-cone-430",
]

export const LegsData = {
  "metal-square-715": {
    sku: "leg-metal-square-715",
    legId: "metal-square-715",
    legName: "Metal square leg",
    legHeight: 715,
    texture: "",
    color: "metal-standard",
    legShape: "square",
    shortDescription: "A simple, high quality steel square leg.",
    longDescription: "This is a simple square leg, made out of steel - 50x50mm in floorplan. It's very sturdy and has a very classic look, with the surface finished in coating. Plastic part on the bottom allows for precise height alignment of the leg. Specially produced for Modulos for fitting into module pre-made grooves.",
    price: 19.00,
    weight: 2,
    images: {
      perspectiveImage: '', // metalSquare715Perspective,
      configuratorSmall: '', // metalSquare715ConfiguratorSmall,
      inUseWide: '', // metalSquare715InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["715mm"]
      },
      {
        title: "Material:",
        values: ["Steel"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
  "metal-round-715": {
    sku: "leg-metal-round-715",
    legId: "metal-round-715",
    legName: "Metal round",
    legHeight: 715,
    texture: "",
    color: "metal-standard",
    legShape: "round",
    shortDescription: "A simple, high quality steel square leg.",
    longDescription: "This is a simple round leg, made out of steel - with a diameter of 50mm. It's very sturdy and has a very classic look, with the surface finished in coating. Plastic part on the bottom allows for precise height alignment of the leg. Specially produced for Modulos for fitting into module pre-made grooves.",
    price: 19.00,
    weight: 2,
    images: {
      configuratorSmall: '', // metalRound715ConfiguratorSmall,
      perspectiveImage: '', // metalRound715Perspective,
      inUseWide: '', // metalRound715InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["715mm"]
      },
      {
        title: "Material:",
        values: ["Steel"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
  "metal-hairpin-715": {
    sku: "leg-metal-hairpin-715",
    legId: "metal-hairpin-715",
    legName: "Hairpin",
    legHeight: 715,
    texture: "",
    color: "anthracite",
    legShape: "hairpin",
    shortDescription: "A beautiful leg that stands out.",
    longDescription: "An exquisitely designed hairpin leg, made in high quality and finished with sturdy coating. Its power is that it can stand out and lift up your space, while at the same time blending in beautiully, making it feel like your desk surface is floating mid-air. Specially produced for Modulos for fitting into module pre-made grooves.",
    price: 29.00,
    weight: 2,
    images: {
      configuratorSmall: '', // metalHairpin715ConfiguratorSmall,
      perspectiveImage: '', // metalHairpin715Perspective,
      inUseWide: '', // metalHairpin715InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["715mm"]
      },
      {
        title: "Material:",
        values: ["Steel"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
  "metal-square-430": {
    sku: "leg-metal-square-430",
    legId: "metal-square-430",
    legName: "Metal square leg - short",
    legHeight: 430,
    texture: "",
    color: "metal-standard",
    legShape: "square",
    shortDescription: "A simple aluminum square leg, coffee table sized.",
    longDescription: "A basic aluminum square leg, made for use in coffee tables and night stands. Plastic part on the bottom allows for precise height alignment of the leg. Specially produced for Modulos for fitting into module pre-made grooves.",
    price: 19.00,
    weight: 2,
    images: {
      configuratorSmall: '', // metalSquare430ConfiguratorSmall,
      perspectiveImage: '', // metalSquare430Perspective,
      inUseWide: '', // metalSquare430InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["430mm"]
      },
      {
        title: "Material:",
        values: ["Aluminum"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
  "wooden-square-715": {
    sku: "leg-wood-square-715",
    legId: "wooden-square-715",
    legName: "Wooden square leg",
    legHeight: 715,
    texture: "oak",
    color: "metal-standard",
    legShape: "square",
    shortDescription: "A simple square leg, made of exquisite wood.",
    longDescription: "A simple, yet elegant square leg - 50x50mm in floor plan. Made out of an exquisite, heigh-quality piece of wood - it can either bring a classic feeling into your space, or uplift a modern setup as a detail. Produced and quality controlled by us, fitted for Modulos for fitting into module pre-made grooves. The metal attachment plate is made to be exactly the same as on our metal legs.",
    price: 21.00,
    weight: 2,
    images: {
      configuratorSmall: '', //woodSquare715ConfiguratorSmall,
      perspectiveImage: '', //woodSquare715Perspective,
      inUseWide: '', //woodSquare715InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["715mm"]
      },
      {
        title: "Material:",
        values: ["High-quality oak wood, steel for connection plate"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
  "wooden-round-715": {
    sku: "leg-metal-round-715",
    legId: "wooden-round-715",
    legName: "Wooden round leg",
    legHeight: 715,
    texture: "oak",
    color: "metal-standard",
    legShape: "round",
    shortDescription: "A simple round leg, made of exquisite wood.",
    longDescription: "A simple, yet elegant round leg - 50mm in radius. Made out of an exquisite, heigh-quality piece of wood - it can either bring a classic feeling into your space, or uplift a modern setup as a detail. Produced and quality controlled by us, fitted for Modulos for fitting into module pre-made grooves. The metal attachment plate is made to be exactly the same as on our metal legs.",
    price: 21.00,
    weight: 2,
    images: {
      configuratorSmall: '', //woodRound715ConfiguratorSmall,
      perspectiveImage: '', //woodRound715Perspective,
      inUseWide: '', //woodRound715InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["715mm"]
      },
      {
        title: "Material:",
        values: ["High-quality oak wood, steel for connection plate"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
  "wooden-cone-715": {
    sku: "leg-wood-cone-715",
    legId: "wooden-cone-715",
    legName: "Wooden cone leg",
    legHeight: 715,
    texture: "oak",
    color: "metal-standard",
    legShape: "cone",
    shortDescription: "An elegant leg, made of exquisite wood.",
    longDescription: "A simple, yet elegant round leg. Its radius varies from top to bottom, making it feel elegand and lightweight. Made out of an exquisite, heigh-quality piece of wood - it can either bring a classic feeling into your space, or uplift a modern setup as a detail. Produced and quality controlled by us, fitted for Modulos for fitting into module pre-made grooves. The metal attachment plate is made to be exactly the same as on our metal legs.",
    price: 23.00,
    weight: 2,
    images: {
      configuratorSmall: '', //woodCone715ConfiguratorSmall,
      perspectiveImage: '', //woodCone715Perspective,
      inUseWide: '', //woodCone715InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["715mm"]
      },
      {
        title: "Material:",
        values: ["High-quality oak wood, steel for connection plate"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
  "wooden-square-430": {
    sku: "leg-wood-square-430",
    legId: "wooden-square-430",
    legName: "Wooden square leg - short",
    legHeight: 430,
    texture: "oak",
    color: "metal-standard",
    legShape: "square",
    shortDescription: "A simple square leg, made of exquisite wood - coffee table sized.",
    longDescription: "A simple, yet elegant square leg - 50x50mm in floor plan. Height made perfect for usage on coffee tables and night stands. Made out of an exquisite, heigh-quality piece of wood - it can either bring a classic feeling into your space, or uplift a modern setup as a detail. Produced and quality controlled by us, fitted for Modulos for fitting into module pre-made grooves. The metal attachment plate is made to be exactly the same as on our metal legs.",
    price: 21.00,
    weight: 2,
    images: {
      configuratorSmall: '', //woodSquare430ConfiguratorSmall,
      perspectiveImage: '', //woodSquare430Perspective,
      inUseWide: '', //woodSquare430InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["430mm"]
      },
      {
        title: "Material:",
        values: ["High-quality oak wood, steel for connection plate"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
  "wooden-round-430": {
    sku: "leg-wood-round-430",
    legId: "wooden-round-430",
    legName: "Wooden round leg",
    legHeight: 430,
    texture: "oak",
    color: "metal-standard",
    legShape: "round",
    shortDescription: "A simple round leg, made of exquisite wood - coffee table sized.",
    longDescription: "A simple, yet elegant round leg - 50mm in radius. Height made perfect for usage on coffee tables and night stands. Made out of an exquisite, heigh-quality piece of wood - it can either bring a classic feeling into your space, or uplift a modern setup as a detail. Produced and quality controlled by us, fitted for Modulos for fitting into module pre-made grooves. The metal attachment plate is made to be exactly the same as on our metal legs.",
    price: 21.00,
    weight: 2,
    images: {
      configuratorSmall: '', //woodRound430ConfiguratorSmall,
      perspectiveImage: '', //woodRound430Perspective,
      inUseWide: '', //woodRound430InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["430mm"]
      },
      {
        title: "Material:",
        values: ["High-quality oak wood, steel for connection plate"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
  "wooden-cone-430": {
    sku: "leg-wood-cone-430",
    legId: "wooden-cone-430",
    legName: "Wooden cone leg",
    legHeight: 430,
    texture: "oak",
    color: "metal-standard",
    legShape: "cone",
    shortDescription: "An elegant leg, made of exquisite wood - coffee table sized.",
    longDescription: "A simple, yet elegant round leg. Its radius varies from top to bottom, making it feel elegand and lightweight. Height made perfect for usage on coffee tables and night stands. Made out of an exquisite, heigh-quality piece of wood - it can either bring a classic feeling into your space, or uplift a modern setup as a detail. Produced and quality controlled by us, fitted for Modulos for fitting into module pre-made grooves. The metal attachment plate is made to be exactly the same as on our metal legs.",
    price: 23.00,
    weight: 2,
    images: {
      configuratorSmall: '', //woodCone430ConfiguratorSmall,
      perspectiveImage: '', //woodCone430Perspective,
      inUseWide: '', //woodCone430InUse,
    },
    techSpecs: [
      {
        title: "Height:",
        values: ["430mm"]
      },
      {
        title: "Material:",
        values: ["High-quality oak wood, steel for connection plate"]
      },
      {
        title: "Ships with:",
        values: ["6 bolts for attaching to a Modulos module, 1 Allen wrench (4mm)"]
      }
    ],
  },
}



// WEBPACK FOOTER //
// ./src/data/LegsData.js
