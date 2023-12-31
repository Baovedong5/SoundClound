"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftOutlined";
import { Box, Divider } from "@mui/material";
import Link from "next/link";

interface IProps {
  data: ITrackTop[];
  title: string;
}

const MainSilder = (props: IProps) => {
  const { data, title } = props;

  const NextArrow = (props: any) => {
    return (
      <Button
        variant="contained"
        color="inherit"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          right: 0,
          top: "25%",
          zIndex: 2,
          minWidth: 30,
          width: 35,
        }}
      >
        <ChevronRightIcon />
      </Button>
    );
  };

  const PrevArrow = (props: any) => {
    return (
      <Button
        variant="contained"
        color="inherit"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          top: "25%",
          zIndex: 2,
          minWidth: 30,
          width: 35,
        }}
      >
        <ChevronLeftIcon />
      </Button>
    );
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Box
      sx={{
        margin: "0 50px",
        ".track": {
          padding: "0 10px",

          img: {
            height: 150,
            width: 150,
          },
        },
        h3: {
          border: "1px solid #ccc",
          padding: "20px",
          height: "200px",
        },
      }}
    >
      <h2>{title}</h2>

      <Slider {...settings}>
        {data.map((track) => {
          return (
            <div className="track" key={track._id}>
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${track.imgUrl}`}
              />
              <Link
                href={`/track/${track._id}?audio=${track.trackUrl}&id=${track._id}`}
              >
                <h4>{track.title}</h4>
              </Link>
              <h5>{track.description}</h5>
            </div>
          );
        })}
      </Slider>
      <Divider />
    </Box>
  );
};

export default MainSilder;
