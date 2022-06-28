import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Oprojektu = () => {
  return (
    <section className='pb-7 bg-red-800'>
      <Box className='flex gap-2 justify-center items-center min-h-screen flex-wrap p-32'>
        {" "}
        <Box className='flex-1  p-6 '>
          <Typography variant='h2' className='p-1'>
            O projektu
          </Typography>
          <br></br>
          <Typography variant='h4' className=' p-2'>
            Dinamički web sistemi
          </Typography>
          <Typography variant='h5' className=' p-2'>
            Netflix clone - NextJS
          </Typography>
        </Box>
        <Box className='flex-1 text-start'>
          <Typography variant='h5' className=' p-1'>
            Završni projekat iz predmeta dinamički web sistemi.
          </Typography>
          <Typography variant='h5' className=' p-1'>
            Pravio sam Netflix clone sa NextJS gdje sam se fokusirao na
            korisnički interfejs.
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default Oprojektu;
