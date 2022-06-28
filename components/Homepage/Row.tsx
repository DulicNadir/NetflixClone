import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Movie } from "../../typings";
import Thumbnail from "./Thumbnail";
import { useRef, useState } from "react";
import { modalState, movieState } from "../../atoms/modalAtom";
import { useRecoilState, useRecoilValue } from "recoil";

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [pomaknut, setPomaknut] = useState(false);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setClickedMovie] = useRecoilState(movieState);

  const handleClick = (direction: string) => {
    setPomaknut(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "lijevo"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h3 className='w-56 cursor-pointer text-sm font-semibold text-white md:text-2xl'>
        {title}
      </h3>
      <div className='group relative md:-ml-2'>
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !pomaknut && "hidden"
          }`}
          onClick={() => handleClick("lijevo")}
        />
        <div
          ref={rowRef}
          className='flex items-center space-x-1 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide'
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
          onClick={() => handleClick("desno")}
        />
      </div>
    </div>
  );
};

export default Row;
