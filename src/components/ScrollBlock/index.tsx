import { useEffect, useRef } from 'preact/hooks';

const ScrollBlock = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  let scrollCount = 0;
  let x = 0;
  let y = 0;
  const observer = new IntersectionObserver(
    (entries) => {
      console.log('entries :>> ', entries);
      entries.forEach((entry) => {
        if (entry.target === ref.current && entry.isIntersecting) {
          console.log('in view');
          x = window.screenX;
          y = window.scrollY;
          console.log('x :>> ', x);
          window.addEventListener('scroll', scrollCB);
        }
      });
    },
    { threshold: 1.0 }
  );

  const scrollCB = (e: Event) => {
    console.log('e :>> ', e);
    if (scrollCount < 25) {
      window.scrollTo(x, y);
      scrollCount++;
    } else {
      window.removeEventListener('scroll', scrollCB);
    }
  };

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref.current]);

  return <div ref={ref} />;
};

export default ScrollBlock;
