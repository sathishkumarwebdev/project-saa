import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
export default function BacktoTop() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTop ? (
        <button
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            zIndex: "10",
            width: "50px",
            height: "50px",
            border: "none",
            fontSize: "30px",
            backgroundColor: "#86b817",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "25px",
          }}
        >
          ^
        </button>
      ) : (
        ""
      )}
    </>
  );
}
