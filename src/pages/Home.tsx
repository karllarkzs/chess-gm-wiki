import { useEffect, useState } from "react";
import { getGrandmasters } from "../api/chessApi";
import GrandmasterCard from "../components/GrandmasterCard";

const Home = () => {
  const [gms, setGms] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [filterLetter, setFilterLetter] = useState("");

  useEffect(() => {
    getGrandmasters().then(setGms);
  }, []);

  const filteredGMs = gms.filter((username) => {
    const matchesSearch = username.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = username
      .toLowerCase()
      .startsWith(filterLetter.toLowerCase());

    if (search) return matchesSearch;
    if (filterLetter) return matchesLetter;
    return true;
  });

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 font-red">
        ♟️ Chess Grandmasters
      </h1>
      <p className="text-green-400 text-lg mb-4">Tailwind is working!</p>

      <input
        type="text"
        placeholder="Search usernames..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-white focus:outline-none"
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() =>
              setFilterLetter(letter === filterLetter ? "" : letter)
            }
            className={`px-3 py-1 rounded text-sm border ${
              letter === filterLetter
                ? "bg-purple-600 text-white"
                : "border-white/20 text-white hover:bg-white/10"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGMs.map((username) => (
          <GrandmasterCard key={username} username={username} />
        ))}
      </div>
    </div>
  );
};

export default Home;
