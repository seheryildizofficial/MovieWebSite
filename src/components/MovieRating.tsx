import { FaStar, FaRegStar } from "react-icons/fa";
const MovieRating = ({ voteAverage }: { voteAverage: number }) => {
  const maxStars = 5;
  const fullStars = Math.floor(voteAverage / 2);
  const hasHalfStar = voteAverage % 2 >= 1;
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return (
    <div className="flex items-center space-x-1">
      {stars}
      <span className="ml-2 text-green-600">{voteAverage}</span>
    </div>
  );
};
export default MovieRating;
