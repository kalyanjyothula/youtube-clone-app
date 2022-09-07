import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";

const SearchFeed = (props) => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) =>
      {
        console.log(data, "search")
        setVideos(data.items)
      }
    );
  }, [searchTerm]);
  
  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

SearchFeed.propTypes = {};

export default SearchFeed;
