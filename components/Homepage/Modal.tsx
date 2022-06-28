import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useRecoilState } from "recoil";
import { movieState, modalState } from "../../atoms/modalAtom";
import Image from "next/image";
import { useState } from "react";
const FilmModal = () => {
  const style = {
    position: "absolute " as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "	rgb(216,216,216)",
    boxShadow: 24,
    padding: 2,
    color: "white",
    borderRadius: "5px",
  };

  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setClickedMovie] = useRecoilState(movieState);
  const [showMore, setShowMore] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={showModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className='scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100'
      >
        <Fade in={showModal}>
          <Box sx={style}>
            <Box>
              <Image
                layout='responsive'
                width={700}
                height={350}
                src={`https://image.tmdb.org/t/p/w500${
                  movie?.backdrop_path || movie?.poster_path
                }`}
              />
            </Box>

            <div className='flex bg-[#181818] px-10 py-7'>
              <div className='space-y-5 text-lg'>
                <h3>{movie?.title || movie?.name || movie?.original_name}</h3>
                <div className='flex items-center space-x-2 text-sm'>
                  <p className='font-semibold text-green-400'>
                    {movie!.vote_average * 10}% Match
                  </p>
                  <p className='font-light'>
                    {movie?.release_date || movie?.first_air_date}
                  </p>
                </div>

                <div className='flex flex-col gap-x-10 font-light md:flex-row'>
                  <p className='w-5/6'>
                    {showMore
                      ? movie?.overview
                      : movie?.overview.substring(0, 220)}
                    <p
                      onClick={() => setShowMore(!showMore)}
                      className='cursor-pointer font-semibold'
                    >
                      {showMore ? "Show less" : "Show more"}
                    </p>
                  </p>
                  <div className='flex flex-col space-y-3 text-sm'>
                    <div>
                      <span className='text-[gray]'>Original language:</span>{" "}
                      {movie?.original_language}
                    </div>

                    <div>
                      <span className='text-[gray]'>Total votes:</span>{" "}
                      {movie?.vote_count}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default FilmModal;
