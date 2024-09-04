import StiliziraneKartice from "./StiliziraneKartice";

const ListaKartica = ({ kartica, handleDelete }) => {
  if (!kartica || kartica.length === 0) {
    return <p>Nema sadržaja</p>;
  }
  return (
    <div className="lista-kartica">
      {kartica.map((item) => (
        <StiliziraneKartice item={item} key={item.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ListaKartica;
