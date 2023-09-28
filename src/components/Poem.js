import React from "react";
import portrait from "../components/images/Snowball_I_portrait.webp";

export default function Poem() {
  return (
    <div className="main">
      <div>
        <p>
          "My Kitty Died" is a song that Lisa sings in the televised portion of
          the Krusty's Li'l Starmaker competition. Homer wrote it as a tribute
          to the late Snowball I.
        </p>
        <p>
          My kitty died,
          <br />
          On Christmas Eve.
          <br />
          Daddy told me to be brave.
          <br />
          But instead of singing carols,
          <br />I was digging Snowball's grave.
        </p>
      </div>

      <div>
        <img src={portrait} alt="Snowball Portrait" class="images" />
      </div>
    </div>
  );
}
