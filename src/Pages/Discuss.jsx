import React from "react";

import Chat from "../Components/Discuss/Chat";

const Discuss = () => {
  return (
    <>
      <div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <Diskusi />
            </div>
            <div class="col">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discuss;
