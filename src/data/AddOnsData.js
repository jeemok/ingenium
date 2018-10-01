// import doubleCableHolderAbsPerspective from '../../static/images/addons/double-cable-holder--perspective.png';
// import doubleCableHolderAbsInUse from '../../static/images/addons/double-cable-holder--in-use.jpg';

export const AddOnsList = [
  "double-cable-holder-abs",
]

export const AddOnsData = {
  "double-cable-holder-abs": {
    sku: "double-cable-holder-abs",
    id: "double-cable-holder-abs",
    name: "ABS double cable Holder",
    shortDescription: "A simple, elegant solution for cable management.",
    longDescription: "A very simple, yet very useful solution for cable management. Attaches to one of the free bolt slots on the bottom of a Modulos surface. When attached, its arms push towards the surface, so you can use them to clip your cables to the surface, getting them out of the way, but still maintaining access.",
    price: 2.99,
    weight: 0.05,
    images: {
      perspectiveImage: '', // doubleCableHolderAbsPerspective,
      inUseWide: '' //doubleCableHolderAbsInUse,
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
}



// WEBPACK FOOTER //
// ./src/data/AddOnsData.js
