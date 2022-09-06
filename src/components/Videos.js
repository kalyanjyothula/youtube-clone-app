import React from "react";
import PropTypes from "prop-types";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = (props) => {
  const { videos, direction } = props;
  if (!videos?.length) return <div>Loading Video</div>;
  // console.log(videos, "Videos");
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

Videos.propTypes = {};

export default Videos;
