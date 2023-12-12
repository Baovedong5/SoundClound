import MainSilder from "@/components/main/main.silder";
import { Container } from "@mui/material";
import { sendRequest } from "@/utils/api";

export default async function HomePage() {
  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {
      category: "CHILL",
      limit: 10,
    },
  });

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {
      category: "WORKOUT",
      limit: 10,
    },
  });

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {
      category: "PARTY",
      limit: 10,
    },
  });

  return (
    <div>
      <Container>
        <MainSilder data={chills?.data ?? []} title={"Top Chill"} />
        <MainSilder data={workouts?.data ?? []} title={"Top Workout"} />
        <MainSilder data={party?.data ?? []} title={"Top Party"} />
      </Container>
    </div>
  );
}
