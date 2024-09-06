import Card from "../shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>Ovo je About stranica</h1>
        <Link to="/">Nazad</Link>
      </div>
    </Card>
  );
};

export default About;
