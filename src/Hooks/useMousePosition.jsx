import {useState, useEffect} from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({x: 0.5, y: 0.5});
  const [isActiveMove, setisActiveMove] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const {clientX, clientY} = e;
      setMousePosition({x: clientX, y: clientY});
      setisActiveMove(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return {mousePosition, isActiveMove};
}
