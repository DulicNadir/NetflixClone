import { Movie } from "../../typings";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, movieState } from "../../atoms/modalAtom";

interface Props {
  movie: Movie;
}
const Thumbnail = ({ movie }: Props) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  return (
    <div
      className='relative h-25 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[250px] md:hover:scale-110'
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className='rounded-sm object-cover md:rounded'
        alt={movie.title}
        layout='fill'
      />
    </div>
  );
};

export default Thumbnail;
