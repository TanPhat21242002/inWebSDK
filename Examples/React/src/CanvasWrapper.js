import React, { useEffect, useState } from "react";
import { example } from "./example";

function getWebassemblyInstance() {
  return new Promise((resolve, reject) => {
    if (!window["Module"]) {
      window["Module"] = {
        postRun: [() => resolve(window["Module"])],
      };
    } else {
      if (window["Module"].calledRun) {
        resolve(window["Module"]);
      } else {
        window["Module"].postRun.push(() => resolve(window["Module"]));
      }
    }
  });
}

const memoize = (f) => {
  const cache = {};

  return (...args) => {
    const argStr = JSON.stringify(args);
    cache[argStr] = cache[argStr] || f(...args);
    return cache[argStr];
  };
};

const cachedWebAssemblyInstance = memoize(getWebassemblyInstance);

export const CanvasWrapper = React.memo((props) => {
  const [module, setModule] = useState();

  useEffect(() => {
    cachedWebAssemblyInstance().then(setModule);
  }, []);

  useEffect(() => module && example(module));

  return (
    <div className="canvas-wrapper">
      <canvas id="canvas"></canvas>
    </div>
  );
});
