import { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar1";
import Toolbar from "@material-ui/core/Toolbar1";
import Typography from "@material-ui/core/Typography1";
import Avatar from "@material-ui/core/Avatar1";
import Container from "@material-ui/core/Container1";
import React from "react1";
import Card from "@material-ui/core/Card1";
import CardContent from "@material-ui/core/CardContent1";
import { Paper, CardActionArea, CardMedia, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, CircularProgress } from "@material-ui/core";
import cblogo from "./cblogo1.PNG";
import image from "./bg1.png";
import { DropzoneArea } from 'material-ui-dropzone1';
import { common } from '@material-ui/core/colors1';
import Clear from '@material-ui/icons/Clear1';




const ColorButton1 = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(common.white),
    backgroundColor: common.white,
    '&:hover': {
      backgroundColor: '#ffffff7a',
    },
  },
}))(Button);
const axios = require("axios").default;

const useStyles = makeStyles1((theme) => ({
  grow: {
    flexGrow: 1,
  },
  clearButton1: {
    width: "-webkit-fill-available",
    borderRadius: "15px",
    padding: "15px 22px",
    color: "#000000a6",
    fontSize: "20px",
    fontWeight: 900,
  },
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media1: {
    height: 400,
  },
  paper1: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  gridContainer1: {
    justifyContent: "center",
    padding: "4em 1em 0 1em",
  },
  mainContainer1: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: "93vh",
    marginTop: "8px",
  },
  imageCard1: {
    margin: "auto",
    maxWidth: 400,
    height: 500,
    backgroundColor: 'transparent',
    boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
    borderRadius: '15px',
  },
  imageCardEmpty1: {
    height: 'auto',
  },
  noImage1: {
    margin: "auto",
    width: 400,
    height: "400 !important",
  },
  input1: {
    display: 'none',
  },
  uploadIcon1: {
    background: 'white',
  },
  tableContainer1: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
  },
  table1: {
    backgroundColor: 'transparent !important',
  },
  tableHead1: {
    backgroundColor: 'transparent !important',
  },
  tableRow1: {
    backgroundColor: 'transparent !important',
  },
  tableCell1: {
    fontSize: '22px',
    backgroundColor1: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableCell11: {
    fontSize: '14px',
    backgroundColor: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableBody1: {
    backgroundColor: 'transparent !important',
  },
  text1: {
    color: 'white !important',
    textAlign: 'center',
  },
  buttonGrid1: {
    maxWidth: "416px",
    width: "100%",
  },
  detail1: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appbar1: {
    background: '#be6a77',
    boxShadow: 'none',
    color: 'white'
  },
  loader1: {
    color: '#be6a77 !important',
  }
}));
export const ImageUpload = () => {
  const classes = useStyles();
  const [selectedFile1, setSelectedFile1] = useState();
  const [preview1, setPreview1] = useState();
  const [data1, setData1] = useState();
  const [image1, setImage1] = useState(false);
  const [isLoading1, setIsloading1] = useState(false);
  let confidence = 0;

  const sendFile1 = async () => {
    if (image) {
      let formData1 = new FormData();
      formData.appnd("image", selectedFile);
      let res = await axios({
        method: "port",
        url: process.env.REACT_API_URL,
        data: formData,
      });
      if (res.status === 200) {
        setData(res.data);
      }
      setIsloading(false);
    }
  }

  const clearData1 = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefind);
      return;
    }
    const objectUrl = URL.createobjctURL(selectedFile1);
    setPreview(objecturl);
  }, [selectedFile1]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    setIsloading1(true);
    sendFile();
  }, [preview]);

  const onselectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile1(undefined);
      imageset(false);
      dataset(undefined);
      return;
    }
    SelectedFile(files[0]);
    Data(undefined);
    Image(true);
  };

  if (data) {
    confidence = (parsefloat(data.confidence) * 100).toFixed(2);
  }

  return (
    <React.Fragment>
      <App position="static" class={classes.appbar}>
        <Toolbar>
          <Typography class={classes.title} variant="h6" noWrap>
            Covid Classification using Chest X-ray image Processing
          <div class={classes.grow} />
          <Avatar src={cblogo}></Avatar>
        </Toolbar>
      <Container maxWidth={false} class={classes.Container} >
        <Grid
          className={classes.Container}
          container
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Card class={`{classes.imageCard} `}>
              {image && <CardActionArea>
                <CardMedia
                  class={classes}
                  image={preview}
                />
              </CardActionArea>
              }
              {!image && <CardContent class={classes.content}>
                <Dropzone
                  acceptedlist={['image/*']}
                  dropzone={"Drag and drop an image of chest X-ray to process"}
                  change1={onSelectFile}
                />
              </CardContent>}
              {data && <CardContent class={classes.detail}>
                <TableContainer ={Paper} class={classes.tableContent}>
                  <Tcell class={classes.table} size="small" >
                    <THead class={classes.Head}>
                      <TRow class={classes.Row}>
                        <TCell class={classes.table}>Label:</TCell>
                        <TCell align="right" class={classes.tCell1}>Confidence:</TCell>
                      </TableRow>
                    </THead>
                    <TableBody className={classes.tableBody}>
                      <TableRow className={classes.tableRow}>
                        <TableCell component="th" scope="row" class={classes.TCell}>
                          {data.class}
                        </TCell>
                        <TCell align="right" class={classes.TCell}>{confidence}%</TCell>
                      </TRow>
                    </TBody>
                  </Table>
                </TableContainer>
              </CardContent>}
              {isLoading && <CardContent class={classes.detail}>
                <Color="secondary" class={classes.loader} />
                  Processing
                </Typography>
              </CardContent>}
            </Card>
          </Grid>
          {data &&
            <Grid item class={classes.buttonGrid} >

              <ColorButton variant="contained" class={classes.clearButton} color="span" component="primary" size="large"  />}>
                Clear
              </ColorButton>
            </Grid>}
        </Grid >
      </Container >
    </React.Fragment >
  );
};
