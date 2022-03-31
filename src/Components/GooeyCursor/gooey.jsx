import "./gooey.css";
import PropTypes from "prop-types";
import React, {useState, useEffect, useCallback} from "react";
import {ErrorBoundary} from "react-error-boundary";

import ErrorFallback from "../../Errors/ErrorFallback.jsx";
import useMousePosition from "../../Hooks/useMousePosition";

const Cursor = () => {
  const {x, y} = useMousePosition();
  const [cursorHistory, setCursorHistory] = useState(Array(20).fill({x: 0, y: 0}));

  const cursor = React.createRef();

  const updateCursor = useCallback(() => {
    setCursorHistory(cursorHistory.slice(1).concat({x, y}));
  }, [x, y, cursorHistory]);

  useEffect(() => {
    //updateCursor();
    return () => {};
  }, [updateCursor]);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div id="cursor">
          {cursorHistory.map((cursor, i) => {
            const opacity = 1 - i / 20;
            return (
              <div
                key={i}
                className="cursor-circle"
                style={{left: cursor.x, top: cursor.y, opacity}}
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
