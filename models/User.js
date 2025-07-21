// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: String,
  username: String,
  games: Number,
  gameswin: Number,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
