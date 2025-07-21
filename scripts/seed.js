import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const mockUsers = [
  {
    id: 'u001',
    username: 'player_one',
    games: 10,
    gameswin: 6,
  },
  {
    id: 'u002',
    username: 'legend42',
    games: 25,
    gameswin: 19,
  },
  {
    id: 'u003',
    username: 'shadowcat',
    games: 8,
    gameswin: 2,
  },
  {
    id: 'u004',
    username: 'stormstrike',
    games: 15,
    gameswin: 9,
  },
  {
    id: 'u005',
    username: 'novaX',
    games: 20,
    gameswin: 20,
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await User.deleteMany({});
  await User.insertMany(mockUsers);
  console.log('✅ Mock users inserted.');
  await mongoose.disconnect();
}

seed();