"use client";

import { useHasMounted } from "@/utils/customHook";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar/AppBar";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AppFooter = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return <></>;

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, background: "#f2f2f2" }}
      >
        <Container style={{ display: "flex", gap: 10 }}>
          <AudioPlayer
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
            volume={0.5}
            style={{ boxShadow: "unset", background: "#f2f2f2" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              minWidth: 100,
            }}
          >
            <div style={{ color: "#ccc" }}>Phuong</div>
            <div style={{ color: "black" }}>Who I am ?</div>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};

export default AppFooter;
