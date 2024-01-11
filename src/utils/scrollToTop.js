const scrollToTop = (time=0, beh="smooth") => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: beh, 
    });
  }, time);
};

export default scrollToTop