const useScroll = (ref: React.RefObject<HTMLElement>) => {
  let observer: IntersectionObserver;
  if (ref) {
    observer = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio > 0) {
          console.log(e.intersectionRatio);
        } else {
          console.log('out');
        }
      },
      {
        threshold: 0.1,
      },
    );
    observer.observe(ref.current as Element);
  }
};

const ob = new IntersectionObserver(([e]) => {});
