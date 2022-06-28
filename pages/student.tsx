import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Omeni from "../components/Student/Omeni";
import Oprojektu from "../components/Student/Oprojektu";

const student = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b  lg:h-[140vh] '>
      <Head>
        <title>Student</title>
      </Head>
      <Header />
      <Omeni />
      <Oprojektu />
      <Footer boja={"black"} />
    </div>
  );
};

export default student;
