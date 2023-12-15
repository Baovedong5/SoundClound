"use client";


import { useSearchParams } from "next/navigation";
import Container from "@mui/material/Container";
import WaveTrack from "@/components/track/wave.track";

const DetailTrackPage = (props: any) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("audio");

  return (
    <Container>
      <div>
        <WaveTrack />
      </div>
    </Container>
  );
};

export default DetailTrackPage;
