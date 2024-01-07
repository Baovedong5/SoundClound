import WaveTrack from "@/components/track/wave.track";
import Container from "@mui/material/Container";
import { sendRequest } from "@/utils/api";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const temp = params?.slug?.split(".html") ?? [];
  const temp1 = (temp[0]?.split("-") ?? []) as string[];

  const id = temp1[temp1.length - 1];
  // fetch data
  const res = await sendRequest<IBackendRes<ITrackTop>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/${id}`,
    method: "GET",
  });

  return {
    title: res.data?.title,
    description: res.data?.description,
    openGraph: {
      title: "Hỏi Dân IT",
      description: "Update Beyond Your Coding Skills",
      type: "website",
      images: [
        `https://raw.githubusercontent.com/hoidanit/images-hosting/master/eric.png`,
      ],
    },
  };
}

export async function generateStaticParams() {
  return [
    {
      slug: "le-luu-ly-651bfa95ab5ba07f78841f2e.html",
    },
    {
      slug: "xi-mang-pho-651bfa95ab5ba07f78841f30.html",
    },
    {
      slug: "tinh-co-yeu-em-651bfa95ab5ba07f78841f31.html",
    },
  ];
}

const DetailTrackPage = async (props: any) => {
  const { params } = props;

  const temp = params?.slug?.split(".html") ?? [];
  const temp1 = (temp[0]?.split("-") ?? []) as string[];

  const id = temp1[temp1.length - 1];

  const res = await sendRequest<IBackendRes<ITrackTop>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/${id}`,
    method: "GET",
    nextOption: {
      next: { tags: ["track-by-id"] },
    },
  });

  const res1 = await sendRequest<IBackendRes<IModelPaginate<ITrackComment>>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/comments`,
    method: "POST",
    queryParams: {
      current: 1,
      pageSize: 100,
      trackId: id,
      sort: "-createdAt",
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (!res?.data) notFound();

  return (
    <Container>
      <div>
        <WaveTrack
          track={res?.data ?? null}
          comments={res1?.data?.result ?? []}
        />
      </div>
    </Container>
  );
};

export default DetailTrackPage;
