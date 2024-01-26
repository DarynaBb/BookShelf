import mongoose from "mongoose";

export const MDBConnect = async () => {
  const _pwd = process.env._pwd;
    const _database = "musikfestival";
    const _user = "_NAME";
    const _cluster = process.env._cluster;
    const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(_uri);
    console.log('MDB connected');
  } catch (error) {
    console.error('MDB connection error:', error);
  }
};