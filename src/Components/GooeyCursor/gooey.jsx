import "./gooey.css";
import React, {useState, useEffect, useCallback} from "react";
import {ErrorBoundary} from "react-error-boundary";

import ErrorFallback from "../../Errors/ErrorFallback.jsx";
import useMousePosition from "../../Hooks/useMousePosition";

const Cursor = () => {
  const {mousePosition, isActiveMove} = useMousePosition();
  const {x, y} = mousePosition;
  const [cursorHistory, setCursorHistory] = useState(Array(20).fill({x: 0, y: 0}));
  const [isActiveCursor, setIsActiveCursor] = useState(true);

  const updateCursor = useCallback(() => {
    setCursorHistory((prevCursorHistory) => {
      const newCursorHistory = [...prevCursorHistory];
      newCursorHistory.shift();
      newCursorHistory.push({x, y});
      return newCursorHistory;
    });
  }, [x, y]);

  const identifyUserAgent = useCallback(() => {
    const userAgent = navigator.userAgent;
    if (
      userAgent.match(/iPhone/i) ||
      userAgent.match(/iPad/i) ||
      userAgent.match(/iPod/i) ||
      userAgent.match(/Android/i)
    ) {
      setIsActiveCursor(false);
    }
  }, [setIsActiveCursor]);

  useEffect(() => {
    identifyUserAgent();
    if (isActiveCursor) {
      updateCursor();
      window.requestAnimationFrame(updateCursor);
    }
    return () => {
      updateCursor();
      window.cancelAnimationFrame(updateCursor);
    };
  }, [updateCursor, identifyUserAgent, isActiveCursor]);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div id={isActiveCursor ? "cursor" : "cursorA"}>
          {cursorHistory.map((cursor, i) => {
            const opacity = 1 - i / 20;
            return (
              <div
                key={i}
                className="cursor-circle"
                style={{
                  transform: `translate(${cursor.x}px, ${cursor.y}px)`,
                  opacity,
                }}
              />
            );
          })}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="goo" version="1.1" width="100%">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </ErrorBoundary>
    </>
  );
};

export default Cursor;
