const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin({ outputFormat: "human", outputTarget: './measurw.txt' });

module.exports = function (config, env) {
  config = smp.wrap({
    ...config,
    devtool: '',
   })
 return config
}
