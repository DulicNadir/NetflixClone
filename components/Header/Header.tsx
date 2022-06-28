import { Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && 'bg-black'}`}>
      <div className='flex items-center space-x-2 md:space-x-10 '>
        <Link href='/'>
          <img
            src='https://rb.gy/ulxxee'
            width={100}
            height={100}
            className='cursor-pointer object-contain'
          />
        </Link>
        <Link href='/dojmovi'>
          <Typography className='cursor-pointer'>Dojmovi</Typography>
        </Link>
      </div>
      <div className='flex items-center space-x-4 text-sm'>
        <Link href='/student'>
          <Typography className='cursor-pointer'>O meni</Typography>
        </Link>
      </div>
    </header>
  );
};

export default Header;
