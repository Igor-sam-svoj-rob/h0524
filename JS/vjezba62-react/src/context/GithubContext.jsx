import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async (text) => {
    setLoading();
    const response = await fetch(`https://api.github.com/search/users?q=${text}`);
    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      users: data.items,
    });
  };

  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();
    dispatch({
      type: "GET_USER",
      data: data,
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        getUser,
        fetchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
