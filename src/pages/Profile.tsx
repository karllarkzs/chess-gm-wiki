import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerProfile } from "../api/chessApi";
import LastOnlineClock from "../components/LastOnlineClock";
import type { PlayerProfile } from "../types/chess";

const Profile = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState<PlayerProfile | null>(null);

  useEffect(() => {
    if (username) {
      getPlayerProfile(username).then(setProfile);
    }
  }, [username]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {!profile ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-400 animate-pulse text-xl">
            Loading profile...
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-6">{profile.username}</h1>

          <div className="space-y-4 text-lg">
            <div className="bg-gray-900 rounded-md p-4">
              <span className="font-semibold">👤 Name:</span>{" "}
              {profile.name || "N/A"}
            </div>

            <div className="bg-gray-900 rounded-md p-4">
              <span className="font-semibold">🏆 Title:</span>{" "}
              {profile.title || "N/A"}
            </div>

            <div className="bg-gray-900 rounded-md p-4">
              <span className="font-semibold">📅 Joined:</span>{" "}
              {new Date(profile.joined * 1000).toLocaleDateString()}
            </div>

            <div className="bg-gray-900 rounded-md p-4">
              <span className="font-semibold">🕒 Last Online:</span>{" "}
              {new Date(profile.last_online * 1000).toLocaleString()}
            </div>

            <div className="bg-gray-900 rounded-md p-4">
              <span className="font-semibold">⌛ Time since last online:</span>{" "}
              <span className="font-mono text-purple-400">
                <LastOnlineClock lastOnline={profile.last_online} />
              </span>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/"
              className="inline-block text-sm text-purple-400 hover:underline"
            >
              ← Back to list
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
