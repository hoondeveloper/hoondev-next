import Footer from './Footer';
import Header from './Header';
import 'twin.macro';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [float, setFloat] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY !== 0) {
        !float && setFloat(true);
      } else {
        float && setFloat(false);
      }
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <>
      <Header />
      <main tw="px-[18px]">{children}</main>
      <Footer />
    </>
  );
}
