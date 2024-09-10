import StiliziraneKartice from "./StiliziraneKartice";
import { useContext } from "react";
import Context from "../Context/Context";

const ListaKartica = () => {
  const { kartica } = useContext(Context);
  if (!kartica || kartica.length === 0) {
    return <p>Nema sadržaja</p>;
  }
  return (
    <div className="lista-kartica">
      {kartica.map((item) => (
        <StiliziraneKartice item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListaKartica;
