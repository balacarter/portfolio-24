import { useEffect, useRef } from 'preact/hooks';

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

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
