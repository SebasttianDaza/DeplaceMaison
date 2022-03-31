import {useState, useEffect} from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({x: null, y: null});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const {clientX, clientY} = e;
      setMousePosition({x: clientX, y: clientY});
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}
