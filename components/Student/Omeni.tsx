import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { motion } from "framer-motion";

import React from "react";

const executeScroll = () => {
  window.scrollTo(0, document.body.scrollHeight);
};
const Omeni = () => {
  return (
    <section className=''>
      <Box className='flex gap-2 justify-center items-center min-h-screen flex-wrap pl-32 pr-32'>
        {" "}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Box className='flex-1'>
            <Typography variant='h2' className='p-1'>
              Nadir Dulić
            </Typography>
            <Typography variant='h4' className='p-2'>
              Web developer
            </Typography>
            <Typography variant='h5' className='p-2'>
              Imam 20 godina i student sam na Prirodno-matematičkom fakultetu u
              Sarajevu.
            </Typography>
            <Typography variant='h6' className='p-2'>
              Volim kodirati, a posebno praviti web stranice
            </Typography>
            <Button
              variant='outlined'
              sx={{
                color: "white",
                borderColor: "red",
                marginTop: "1rem",
                marginLeft: "0.2rem",
              }}
              onClick={executeScroll}
            >
              Kontaktiraj me
            </Button>
          </Box>
        </motion.div>
        <Box className='flex-1 text-center'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <Image
              src={"/images/Nadir.jpg"}
              alt='Nadir'
              height={350}
              width={350}
              objectFit='cover'
              priority
              style={{
                borderRadius: "50%",
              }}
            />
          </motion.div>
        </Box>
      </Box>
    </section>
  );
};

export default Omeni;
