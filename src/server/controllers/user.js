import Mongoose from 'mongoose';

const UserDB = Mongoose.model("User");

export async function createUser(req, rex, next) {
  try {

  }
  catch
  {
    return res.status(400).send({ status: 0, err: "Error", data: [] });
  }
}

export async function deleteUser(req, res, next) {
  try {

  }
  catch
  {
    return res.status(400).send({ status: 0, err: "Error", data: [] });
  }
}

export async function alterPassword(req, res, next) {
  try {

  }
  catch
  {
    return res.status(400).send({ status: 0, err: "Error", data: [] });
  }
}

export async function getUser(req, res, next) {
  try {

  }
  catch
  {
    return res.status(400).send({ status: 0, err: "Error", data: [] });
  }
}

export async function login(req, res, next) {
  try {

  }
  catch
  {
    return res.status(400).send({ status: 0, err: "Error", data: [] });
  }
}
