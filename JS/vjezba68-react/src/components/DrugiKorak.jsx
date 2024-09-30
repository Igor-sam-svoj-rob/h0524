import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

const DrugiKorak = ({ page, setPage, data, setData }) => {
  const handleBack = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
          {koraci.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <div className="fields">
        <div>
          <TextField
            id="standard-basic"
            label="godine"
            variant="standard"
            value={data.godine}
            onChange={(event) => setData({ ...data, godine: event.target.value })}
            required
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="lokacija"
            variant="standard"
            value={data.lokacija}
            onChange={(event) => setData({ ...data, lokacija: event.target.value })}
            required
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="zanimanje"
            variant="standard"
            value={data.zanimanje}
            onChange={(event) => setData({ ...data, zanimanje: event.target.value })}
            required
          />
        </div>
        <div className="btn">
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handleBack}>
              Nazad
            </Button>
            <Button variant="contained" onClick={handleNext}>
              Dalje
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default DrugiKorak;
