import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollToTop = () => {
  const navigate = useNavigate();

  const handleNavigation = (event, link) => {
    event.preventDefault(); // Prevent default anchor behavior
    navigate(link); // Use navigate to change route without refresh
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  return handleNavigation;
};

export default useScrollToTop;