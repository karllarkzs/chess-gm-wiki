import axios from "axios";

export const getGrandmasters = async () => {
  const res = await axios.get("https://api.chess.com/pub/titled/GM");
  return res.data.players;
};

export const getPlayerProfile = async (username: string) => {
  const res = await axios.get(`https://api.chess.com/pub/player/${username}`);
  return res.data;
};
