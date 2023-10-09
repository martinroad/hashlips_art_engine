const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 20,  // 需要生成图片的数量，图片资源最好用.png格式，有些图片需要设置透明度
    layersOrder: [ // 图层是自下而上的，Background是最下面的图层，Top lid 是最上面的图层
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

// 修改画布大小，也就是图像尺寸（单位：像素），与原素材的尺寸有关，需要和原素材尺寸保持一致
const format = {  
  width: 512,
  height: 512,
  smoothing: false,
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

// 生成像素图，在终端运行：npm run pixelate
const pixelFormat = {
  ratio: 10 / 128,
};

// 图像的背景
const background = {
  generate: false,  // generate = true 代表背景存在，如果原素材没有背景，程序生产时会自动添加随机的背景色
  brightness: "60%", // 背景色的明暗程序，数字越大，背景色越亮
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

// 输出排列预览图，将已经生成好的图片排列在一起生成一个预览图，在终端运行：npm run preview
const preview = {
  thumbPerRow: 5, // 设置预览图每行多少张
  thumbWidth: 50, // 设置预览图多少列
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

// 将已经生成好的图像自动排序后，生成一张会动的gif图，在终端运行：npm run preview_gif
const preview_gif = {
  numberOfImages: 5, // gif图循环播放多少张图像
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
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
