import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface Props {
  boja: string;
}

const Footer = ({ boja }: Props) => {
  const scrollUp = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > 0) {
      window.scrollTo(0, top - 15);
      setTimeout(scrollUp, 5);
    }
  };

  return (
    <div
      className='p-3 flex text-center items-center gap-3 '
      style={{
        backgroundColor: boja,
      }}
    >
      <div className='flex flex-1 p-5 text-center gap-4'>
        <div className='flex text-center ml-24 gap-12'>
          {" "}
          <Link href='https://www.facebook.com/nadir.dulic'>
            <a>
              <FaFacebook className='h-4 w-4 md:h-7 md:w-8 cursor-pointer' />
            </a>
          </Link>
          <Link href='https://www.instagram.com/nadir.dulic'>
            <a>
              <FaInstagram className='h-4 w-4 md:h-7 md:w-8 cursor-pointer' />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/nadir-dulic-6a35561b9/'>
            <a>
              <FaLinkedin className='h-4 w-4 md:h-7 md:w-8 cursor-pointer' />
            </a>
          </Link>
        </div>
      </div>
      <div className='flex-1 p-5 text-right mr-24 '>
        {" "}
        <Button
          onClick={scrollUp}
          variant='outlined'
          sx={{
            color: "white",
            borderColor: "white",
          }}
          className='bg-black hover:bg-black'
        >
          Na vrh
        </Button>
      </div>
    </div>
  );
};

export default Footer;
