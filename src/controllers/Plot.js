const { FRAME_MSG_TYPE } = require("../constants/index.js");
const Plots = require( "../models/Plot.js");

 const getPlots = async (req, res) => {
  try {
    const plotDate = Number(req?.query?.plotDate) || null;
    const serverDate = Number(req?.query?.serverDate) || null;

    const searchOptions = {
      ...(plotDate && { TimeStamp: { $gte: plotDate } }),
      ...(serverDate && { TimestampServer: { $gte: serverDate } }),
    };

    const results = await Plots.find({
      FrameMsgType: FRAME_MSG_TYPE,
      $expr: { $eq: ["$CRC32C", "$CheckCRC32C"] },
      ...searchOptions,
    });

    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {getPlots};