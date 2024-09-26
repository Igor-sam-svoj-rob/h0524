import { observer } from "mobx-react-lite";
import { FaSave, FaEdit, FaWindowClose } from "react-icons/fa";

const Ispis = ({ store }) => {
  const startEditing = (userId) => {
    store.runInAction(() => {
      store.setEditUser(userId);
      const userToEdit = store.userInfo.find((user) => user.id === userId);
      store.newName = userToEdit.ime;
      store.newHobi = userToEdit.hobiji.join(", ");
    });
  };

  const stopEditing = () => {
    store.runInAction(() => {
      store.stopEditing();
    });
  };

  const onChangeName = (e) => {
    store.runInAction(() => {
      store.newName = e.target.value;
    });
  };

  const onChangeHobi = (e) => {
    store.runInAction(() => {
      store.newHobi = e.target.value;
    });
  };

  const saveChanges = (userId) => {
    store.updateUser(userId, store.newName);
    const newHobbies = store.newHobi
      .split(",")
      .map((hobi) => hobi.trim())
      .filter(Boolean);

    store.addHobi(userId, newHobbies);
    stopEditing();
  };

  return (
    <div>
      <h1>MobX</h1>
      {store.userInfo.map((user) => (
        <div key={user.id}>
          <p>
            {store.editUser === user.id ? (
              <>
                <input type="text" value={store.newName} onChange={onChangeName} />
                <input type="text" value={store.newHobi} onChange={onChangeHobi} />
                <button onClick={() => saveChanges(user.id)}>
                  <FaSave />
                </button>
                <button onClick={stopEditing}>
                  <FaWindowClose />
                </button>
              </>
            ) : (
              <>
                {user.ime} - {user.id}
                <button onClick={() => startEditing(user.id)}>
                  <FaEdit />
                </button>
              </>
            )}
          </p>
          <p>Hobiji: {user.hobiji.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default observer(Ispis);
