// @mui material components
import Grid from "@mui/material/Grid";
import React from "react";
// CovidX React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
// import MKInput from "components/MKInput";

import MKTypography from "components/MKTypography";
import "./style.css";
// CovidX React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function FileUpload() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
    // axios
    //   .post(endpoint, data, {
    //     onUploadProgress: ProgressEvent => {
    //       this.setState({
    //         loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
    //       })
    //     },
    //   })
    //   .then(res => {
    //     console.log(res.statusText)
    //   })
  }

  function handleSubmit() {
    const data = new FormData();
    data.append("file", file, file.name);
    console.log(file);
  }

  return (
    <div>
      <div id="upload-box">
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
      </div>
      <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
        <MKButton type="submit" variant="gradient" color="info" onClick={handleSubmit}>
          Upload
        </MKButton>
      </Grid>
    </div>
  );
}
function FileUploads() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "/pages/uploadaudio",
            label: "upload audio",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Upload File
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Upload Audio file for detection for traces of covid19 virus in your breathing
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container spacing={3}>
                  <Grid item>
                    <FileUpload />
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default FileUploads;
