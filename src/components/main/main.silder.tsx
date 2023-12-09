"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftOutlined";
import { Box, Divider } from "@mui/material";

const MainSilder = () => {
  const NextArrow = (props: any) => {
    return (
      <Button
        variant="outlined"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
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
        variant="outlined"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
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
        ".abc": {
          padding: "0 10px",
        },
        h3: {
          border: "1px solid #ccc",
          padding: "20px",
          height: "200px",
        },
      }}
    >
      <Slider {...settings}>
        <div className="abc">
          <h3>1</h3>
        </div>
        <div className="abc">
          <h3>2</h3>
        </div>
        <div className="abc">
          <h3>3</h3>
        </div>
        <div className="abc">
          <h3>4</h3>
        </div>
        <div className="abc">
          <h3>5</h3>
        </div>
        <div className="abc">
          <h3>6</h3>
        </div>
      </Slider>
      <Divider />
    </Box>
  );
};

export default MainSilder;
