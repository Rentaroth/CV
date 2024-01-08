// import React from "react";
// import "./loading.css"

function Loading() {
  return(
    <>
      <div className=" w-[100vw] h-[100vh] bg-header grid place-content-center z-0">
        <div className=" w-[30vw] h-[30vw] relative grid place-content-center bg-border rounded-[100%] z-10">
          <div className=" w-[28vw] h-[28vw] bg-header rounded-[100%] z-20" >&nbsp;</div>
          <h3 className=" absolute h-[4vw] w-[100%] top-[calc(50%-3vw)] text-border text-center text-[4vw] z-40 animate-pulse">Loading...</h3>
          <div className=" absolute h-[8vw] w-[100%] top-[calc(50%-4vw)] bg-header opacity-70 z-30 animate-spin"></div>
        </div>
      </div>
    </>
  );
}

export { Loading }