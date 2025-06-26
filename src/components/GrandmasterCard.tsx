import { Link } from "react-router-dom";

interface Props {
  username: string;
}

const GrandmasterCard = ({ username }: Props) => {
  return (
    <Link
      to={`/profile/${username}`}
      className="block p-4 text-center text-lg font-medium rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-green-400 transition duration-200 shadow-md"
    >
      {username}
    </Link>
  );
};

export default GrandmasterCard;
