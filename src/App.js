import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components'

function App() {
  return (
    <Box sx={{ background: "#000" }}>
      <Navbar />

      <Routes>
        <Route exact  path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      {/* <div>Hai</div> */}
    </Box>
  );
}

export default App;
