import { useEffect } from "react";

const useCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    if (!cursor || !follower) return;

    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    const moveCursor = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      follower.style.left = `${posX - 22}px`;
      follower.style.top = `${posY - 22}px`;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      requestAnimationFrame(moveCursor);
    };

    moveCursor();

    const mouseMove = (e) => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      mouseX = e.pageX;
      mouseY = e.pageY - scrollTop;
    };

    document.addEventListener("mousemove", mouseMove);

    const addActive = () => {
      cursor.classList.add("active");
      follower.classList.add("active");
    };

    const removeActive = () => {
      cursor.classList.remove("active");
      follower.classList.remove("active");
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addActive);
      el.addEventListener("mouseleave", removeActive);
    });

    const overlay = document.querySelector(".nav-overlay");

    const addClose = () => {
      cursor.classList.add("close-cursor");
      follower.classList.add("close-cursor");
    };

    const removeClose = () => {
      cursor.classList.remove("close-cursor");
      follower.classList.remove("close-cursor");
    };

    overlay?.addEventListener("mouseenter", addClose);
    overlay?.addEventListener("mouseleave", removeClose);

    // cleanup
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      overlay?.removeEventListener("mouseenter", addClose);
      overlay?.removeEventListener("mouseleave", removeClose);
    };
  }, []);
};

export default useCursor;
