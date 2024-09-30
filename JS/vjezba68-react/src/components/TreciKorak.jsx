import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

const TreciKorak = ({ data, setPage, page }) => {
  const handleBack = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={2} alternativeLabel>
          {koraci.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div className="fields">
        <List>
          <ListItem>
            <ListItemText primary="Ime" secondary={data.ime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Prezime" secondary={data.prezime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="E-mail" secondary={data.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Godine" secondary={data.godine} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Lokacija" secondary={data.lokacija} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Zanimanje" secondary={data.zanimanje} />
          </ListItem>
        </List>
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

export default TreciKorak;
