const ListaKartica = ({ filter }) => {
  return (
    <div className="kartice">
      {filter.map((osoba) => {
        return (
          <div key={osoba.id}>
            <p>{osoba.first_name}</p>
            <img src={osoba.avatar} alt={osoba.first_name} />
          </div>
        );
      })}
    </div>
  );
};

export default ListaKartica;
