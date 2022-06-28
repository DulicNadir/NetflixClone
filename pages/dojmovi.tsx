import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Dojam } from "../typings";
import { db } from "../firebase";
const dojmovi = () => {
  const dojmoviCollectionRef = collection(db, "dojmovi");
  const [dojmovi, setDojmovi] = useState<Dojam[]>([]);
  const [noviKorisnik, setNoviKorisnik] = useState<string>("");
  const [noviKomentar, setNoviKomentar] = useState<string>("");

  useEffect(() => {
    const unsub = onSnapshot(dojmoviCollectionRef, (snapshot) => {
      let dojmoviArray: any[] = [];
      snapshot.docs.forEach((doc) => {
        dojmoviArray.push({ ...doc.data(), id: doc.id });
      });
      setDojmovi(dojmoviArray);
    });
    return () => unsub();
  }, []);

  const createDojam = async () => {
    if (noviKorisnik.length > 0 && noviKomentar.length > 0) {
      await addDoc(dojmoviCollectionRef, {
        korisnik: noviKorisnik,
        komentar: noviKomentar,
      });
      setNoviKorisnik("");
      setNoviKomentar("");
    }
  };

  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh] '>
      <Head>
        <title>Student</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <section className='mt-24'>
        <Box className='flex gap-2 justify-center items-center min-h-screen flex-wrap pl-32 pr-32 flex-col '>
          <Box className='border-2 border-white p-7 flex gap-4 rounded-full w-5/6 justify-between bg-black'>
            <input
              type='text'
              name=''
              placeholder='Korisnik'
              value={noviKorisnik}
              onChange={(e) => {
                setNoviKorisnik(e.target.value);
              }}
              className='border-2 border-black p-3 w-full rounded-lg text-white bg-[#181818]'
            />
            <input
              type='text'
              name=''
              placeholder='Komentar'
              value={noviKomentar}
              onChange={(e) => {
                setNoviKomentar(e.target.value);
              }}
              className='border-2 border-black p-3 w-full rounded-lg  text-white bg-[#181818]'
            />

            <button
              onClick={createDojam}
              className='border  p-2 w-3/6 border-white rounded-full hover:bg-[#8B0000] hover:border-[#8B0000] text-white'
            >
              Objavi
            </button>
          </Box>
          <Box className='p-8 '>
            <Grid container spacing={1} className='p-3'>
              {dojmovi.map((dojam, i) => {
                return (
                  <Grid
                    style={{
                      marginBottom: "2rem",
                    }}
                    item
                    xs={12}
                    className='flex gap-5 border-2 p-2 w-full rounded-lg bg-black border-black mb-3 align-middle hover:bg-gradient-to-b hover:scale-105 hover:transition-all'
                    key={i}
                  >
                    <Typography variant='subtitle1' className='flex flex-1 p-1'>
                      {dojam.korisnik}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      className='flex flex-1 justify-center'
                    >
                      {dojam.komentar}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </section>
      <div className='absolute bottom-0 w-full'>
        <Footer boja={"black"} />
      </div>
    </div>
  );
};

export default dojmovi;
