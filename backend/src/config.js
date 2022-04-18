require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Founders Collection - Alpha";
const description = "Crossing the MetaSands - Prophytes NFT Founders Collection Limited Edition.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Alpha Background" },
      { name: "Male Base Body" },
      { name: "Alpha Outfit" },
      { name: "Alpha Mask" },
    ],
  },

  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "Alpha Background" },
      { name: "Male Base Body" },
      { name: "Alpha Professional" },
      { name: "Alpha Mask" },
      { name: "Alpha Accessories" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1902,
  height: 1500,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://prophytesnft.com", // Replace with your website or remove this line if you do not have one.
  owner: "",
  chapter_initiated: "",
  year_initiated: "",
  organization: "Alpha Phi Alpha Fraternity, Inc."
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  gif,
  preview_gif,
};