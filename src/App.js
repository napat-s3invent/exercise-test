import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import exerciseImage from "./assets/img/3297115.jpg";

const useStyles = makeStyles({
  cardContainer: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function getDisableVid(list_vid) {
  const video_condition = {
    1: {
      disable: [1, 2, 5, 7, 8, 10],
    },
    2: {
      disable: [1, 2, 5, 7, 8, 10],
    },
    3: {
      disable: [3, 4],
    },
    4: {
      disable: [3, 4],
    },
    5: {
      disable: [1, 2, 5, 7, 8, 10],
    },
    6: {
      disable: [6, 9],
    },
    7: {
      disable: [1, 2, 5, 7, 8, 10],
    },
    8: {
      disable: [1, 2, 5, 7, 8, 10],
    },
    9: {
      disable: [6, 9],
    },
    10: {
      disable: [1, 2, 5, 7, 8, 10],
    },
  };
  if (list_vid.length === 0) {
    return []
  }
  const limit_video = 4;
  const len_list = list_vid.length;
  if (len_list >= limit_video) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  const last_video = list_vid[len_list - 1];

  var disable_video = video_condition[last_video].disable;
  disable_video.push(...list_vid);
  disable_video = disable_video.sort(function (a, b) {
    return a - b;
  });
  const unique_disable_video = Array.from(new Set(disable_video));
  return unique_disable_video;
}

export default function MediaControlCard() {
  const classes = useStyles();

  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [disable3, setDisable3] = useState(false);
  const [disable4, setDisable4] = useState(false);
  const [disable5, setDisable5] = useState(false);
  const [disable6, setDisable6] = useState(false);
  const [disable7, setDisable7] = useState(false);
  const [disable8, setDisable8] = useState(false);
  const [disable9, setDisable9] = useState(false);
  const [disable10, setDisable10] = useState(false);

  const [choose1, setChoose1] = useState(false)
  const [choose2, setChoose2] = useState(false)
  const [choose3, setChoose3] = useState(false)
  const [choose4, setChoose4] = useState(false)
  const [choose5, setChoose5] = useState(false)
  const [choose6, setChoose6] = useState(false)
  const [choose7, setChoose7] = useState(false)
  const [choose8, setChoose8] = useState(false)
  const [choose9, setChoose9] = useState(false)
  const [choose10, setChoose10] = useState(false)


  const [listVid, setListVid] = useState([]);
  const exercises = [
    {
      name: "1.Box squat",
      vid: 1,
      disable: disable1,
      choose: choose1
    },
    {
      name: "2.Sumo squat",
      vid: 2,
      disable: disable2,
      choose: choose2
    },
    {
      name: "3.Crunch –hand at chest",
      vid: 3,
      disable: disable3,
      choose: choose3
    },
    {
      name: "4.Crunch –hand at ear",
      vid: 4,
      disable: disable4,
      choose: choose4
    },
    {
      name: "5.Glute Bridge",
      vid: 5,
      disable: disable5,
      choose: choose5
    },
    {
      name: "6.Torso-elevated push-up",
      vid: 6,
      disable: disable6,
      choose: choose6
    },
    {
      name: "7.Lunges",
      vid: 7,
      disable: disable7,
      choose: choose7
    },
    {
      name: "8.Side crunch",
      vid: 8,
      disable: disable8,
      choose: choose8
    },
    {
      name: "9.Scapula shrug",
      vid: 9,
      disable: disable9,
      choose: choose9
    },
    {
      name: "10.Donkey kick",
      vid: 10,
      disable: disable10,
      choose: choose10
    },
  ];

  useEffect(() => {
    var listDisable = getDisableVid(listVid)

    console.log(listDisable)
    if (listDisable.length === 0) {

    }
    else {
      setDisable1(listDisable.includes(1) ? true : false)
      setDisable2(listDisable.includes(2) ? true : false)
      setDisable3(listDisable.includes(3) ? true : false)
      setDisable4(listDisable.includes(4) ? true : false)
      setDisable5(listDisable.includes(5) ? true : false)
      setDisable6(listDisable.includes(6) ? true : false)
      setDisable7(listDisable.includes(7) ? true : false)
      setDisable8(listDisable.includes(8) ? true : false)
      setDisable9(listDisable.includes(9) ? true : false)
      setDisable10(listDisable.includes(10) ? true : false)

      setChoose1(listVid.includes(1) ? true : false)
      setChoose2(listVid.includes(2) ? true : false)
      setChoose3(listVid.includes(3) ? true : false)
      setChoose4(listVid.includes(4) ? true : false)
      setChoose5(listVid.includes(5) ? true : false)
      setChoose6(listVid.includes(6) ? true : false)
      setChoose7(listVid.includes(7) ? true : false)
      setChoose8(listVid.includes(8) ? true : false)
      setChoose9(listVid.includes(9) ? true : false)
      setChoose10(listVid.includes(10) ? true : false)
    }



  }, [listVid])


  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "2em" }}
      >

        <Grid item xs={12} align="center" style={{ marginBottom: "2em" }}>
          <Button variant="contained" color="primary" onClick={() => {
            setListVid([])
            setDisable1(false)
            setDisable2(false)
            setDisable3(false)
            setDisable4(false)
            setDisable5(false)
            setDisable6(false)
            setDisable7(false)
            setDisable8(false)
            setDisable9(false)
            setDisable10(false)
          }}>Reset list</Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography display="inline">List video choose : </Typography>
          {listVid.map(Vid => (
            <Typography display="inline">
              {Vid + " "}

            </Typography>
          ))}
        </Grid>

        {exercises.map((exercise) => (
          <Grid item xs={3} align="center" key={exercise.vid} style={{ marginTop: "2em" }}>
            <Card
              className={classes.cardContainer}
              onClick={() => {
                setListVid(listVid.concat(exercise.vid))
                getDisableVid(listVid)

              }}
            >
              <CardActionArea style={exercise.disable ? exercise.choose ? { cursor: "not-allowed", opacity: "0.4", backgroundColor: "#f50057" } : { cursor: "not-allowed", opacity: "0.4" } : {}}>
                <CardMedia
                  className={classes.media}
                  image={exerciseImage}
                  title="Exercise"

                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {exercise.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
