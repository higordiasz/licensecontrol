import Mongoose from 'mongoose';
import moment from 'moment';

const LicenseDB = Mongoose.model("License");
const UserDB = Mongoose.model("User");

export async function checkLicense(req, res, next) {
  try {
    let json = req.query;
    if (!json.token)
      return res.status(400).send({ status: 0, err: "Need token to check", data: [] });
    let license = await LicenseDB.findOne({ token: json.token });
    if (!license)
      return res.status(200).send({ status: 1, err: "", data: [{ license: false }] })
    if (license.check())
      return res.status(200).send({ status: 1, err: "", data: [{ license: true }] })
    return res.status(200).send({ status: 1, err: "", data: [{ license: false }] })
  }
  catch (err) {
    return res.status(400).send({ status: 0, err: "Error: " + err, data: [] });
  }
}

export async function getExpirationDate(req, res, next) {
  try {
    let json = req.query;
    if (!json.token)
      return res.status(400).send({ status: 0, err: "Need token to check", data: [] });
    let license = await LicenseDB.findOne({ token: json.token });
    if (!license)
      return res.status(200).send({ status: 1, err: "No have license", data: [] })
    let end = license.end;
    let now = moment(new Date());
    let endDate = moment(end, "DD/MM/YYYY");
    let dif = endDate.diff(now, "days");
    return res.status(200).send({ status: 1, err: "", data: [{ end: license.end, days: dif }] })
  }
  catch (err) {
    return res.status(400).send({ status: 0, err: "Error: " + err, data: [] });
  }
}

export async function removeLicense(req, res, next) {
  try {
    let json = req.query;
    if (!json.token)
      return res.status(400).send({ status: 0, err: "Need token to check", data: [] });
    let license = await LicenseDB.findOneAndDelete({ token: json.token });
    return res.status(200).send({ status: 1, err: "", data: [] })
  }
  catch (err) {
    return res.status(400).send({ status: 0, err: "Error: " + err, data: [] });
  }
}

export async function addLicense(req, res, next) {
  try {
    let json = req.body;
    if (!json.token || !json.days)
      return res.status(400).send({ status: 0, err: "Missing argument", data: [] })
    let user = await UserDB.findOne({ token: json.token });
    if (!user)
      return res.status(400).send({ status: 0, err: "User not exist", data: [] })
    let license = await LicenseDB.findOne({ token: json.token });
    if (!license) {
      let now = moment(new Date()).format("DD/MM/YYYY");
      let endDate = moment(new Date()).add(json.days, "days").format("DD/MM/YYYY");
      license = new LicenseDB({
        end: endDate.toString("DD/MM/YYYY"),
        token: json.token,
        create: now.toString("DD/MM/YYYY")
      })
      await license.save();
      return res.status(200).send({ status: 1, err: "", data: [license] });
    }
    else {
      let endDate = moment(license.end, "DD/MM/YYYY").add(json.days, "days").format("DD/MM/YYYY");
      license.end = endDate.toString("DD/MM/YYYY");
      await license.save();
      return res.status(200).send({ status: 1, err: "", data: [license] });
    }
  }
  catch (err) {
    return res.status(400).send({ status: 0, err: "Error: " + err, data: [] });
  }
}
