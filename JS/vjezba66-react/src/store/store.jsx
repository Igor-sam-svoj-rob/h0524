import { action, makeObservable, observable, runInAction } from "mobx";

class UserStore {
  userInfo = [
    {
      id: "1",
      ime: "Igor",
      hobiji: ["pecanje", "stolni tenis"],
    },
    {
      id: "2",
      ime: "Jura",
      hobiji: ["nogomet", "rukomet"],
    },
  ];
  editUser = null;
  newName = "";
  newHobi = "";

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      editUser: observable,
      newName: observable,
      newHobi: observable,
      updateUser: action,
      addHobi: action,
      setEditUser: action,
    });
  }

  runInAction = (fn) => {
    return runInAction(fn);
  };

  updateUser = (userId, newName) => {
    const userToUpdate = this.userInfo.find((user) => user.id === userId);
    if (userToUpdate) {
      userToUpdate.ime = newName;
    }
  };

  addHobi = (userId, newHobi) => {
    const userToUpdate = this.userInfo.find((user) => user.id === userId);
    if (userToUpdate) {
      userToUpdate.hobiji = [];
      userToUpdate.hobiji.push(...newHobi);
    }
  };

  setEditUser = (userId) => {
    this.editUser = userId;
  };

  stopEditing = () => {
    this.editUser = null;
    this.newName = "";
    this.newHobi = [];
  };
}

export default UserStore;
