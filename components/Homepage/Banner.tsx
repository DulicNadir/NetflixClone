import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/movie";
import { Movie } from "../../typings";
import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  //hocu random film iz liste da mijenjam na pozadini
  const [movie, setMovie] = useState<Movie | null>(null);
  // postavljam film za modal
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [bannerMovie, setBannerMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 -z-10  h-[95vh] w-screen max-w-full'>
        {/* fill i cover da se ne mijenja izgled slike vec da popuni ekran kakav je */}
        <Image
          layout='fill'
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit='cover'
        />
      </div>
      {/* Kako se mijenja ekran tako mijenjaj i velicinu fonta */}
      <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
        {movie?.overview}{" "}
      </p>
      <div>
        <button
          className='bannerDugme bg-gray-600'
          onClick={() => {
            setBannerMovie(movie);
            setShowModal(true);
          }}
        >
          More info <InformationCircleIcon className='h-4 w-4 md:h-7 md:w-8' />
        </button>
      </div>
    </div>
  );
};

export default Banner;
