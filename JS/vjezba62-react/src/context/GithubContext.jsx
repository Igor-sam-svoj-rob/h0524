import { createContext, useReducer, useEffect } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      users: data,
    });
  };

  useEffect(() => {
    //fetchUsers();
  }, []);

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <GithubContext.Provider value={{ users: state.users, loading: state.loading }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
