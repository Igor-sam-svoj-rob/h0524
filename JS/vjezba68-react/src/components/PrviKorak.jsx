import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

const PrviKorak = ({ page, setPage, data, setData }) => {
  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={0} alternativeLabel>
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
            label="ime"
            variant="standard"
            value={data.ime}
            onChange={(event) => setData({ ...data, ime: event.target.value })}
            required
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="prezime"
            variant="standard"
            value={data.prezime}
            onChange={(event) => setData({ ...data, prezime: event.target.value })}
            required
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="email"
            variant="standard"
            value={data.email}
            onChange={(event) => setData({ ...data, email: event.target.value })}
            required
          />
        </div>
        <div className="btn">
          <Button variant="contained" onClick={handleNext}>
            Dalje
          </Button>
        </div>
      </div>
    </>
  );
};

export default PrviKorak;
