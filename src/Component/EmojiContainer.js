import React from "react";
import Emoji from "./Emoji";
import Grid from "@mui/material/Grid";
import emojipedia from "../emojipedia";

export default function EmojiContainer({ emoji }) {
  const filteredEmojis = emojipedia.filter(
    (filterEmoji) =>
      filterEmoji.title.toLowerCase().includes(emoji.toLowerCase()) ||
      filterEmoji.desc.includes(emoji)
  );
  return (
    <Grid
      container
      sx={{
        marginTop: "50px",
        "@media (max-width: 954px)": {
          marginTop: "10px",
        },
        // "@media (min-width: 601px) and (max-width: 954px)": {
        //   marginTop: "-10px",
        // },
      }}
    >
      {filteredEmojis.map((item, index) => (
        <Grid
          sx={{ justifyContent: "space-around" }}
          key={index}
          container
          item
          lg={2}
          md={3}
          xs={4}
        >
          <Emoji item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
