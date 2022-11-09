const mongoose =  require("mongoose");

const PlotSchema = mongoose.Schema({
  FrameMsgType: String,
  TotalMsgLength: String,
  TimeStamp: Number,
  TimestampServer: Number,
  MsgSequence: String,
  DeviceFirmwareVersion: String,
  IMEI: String,
  BaseStation: String,
  SysMode: String,
  RSSI: String,
  RSRP: String,
  SINR: String,
  RSRQ: String,
  DeviceIP: String,
  CRC32C: String,
  PlotTransformer: String,
  CheckCRC32C: String,
});

module.exports = mongoose.model("Plots", PlotSchema);
