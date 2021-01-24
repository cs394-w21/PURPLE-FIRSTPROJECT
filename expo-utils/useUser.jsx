import React from "react";
import PropTypes from "prop-types";
import { firebase } from "../src/utils/firebase";

const UserContext = React.createContext();
const useUser = () => {
  const user = React.useContext(UserContext);
  if (user === undefined) {
    throw new Error("useUser must be used inside its provider.");
  }
  return user;
};

const UserUpdateContext = React.createContext();
const useSetUser = () => {
  const setUser = React.useContext(UserUpdateContext);
  if (setUser === undefined) {
    throw new Error("useSetUser must be used inside its provider.");
  }
  return setUser;
};

const useHandleAuthChanges = () => {
  const setUser = useSetUser();
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setUser((oldUser) => ({ ...oldUser, auth }));
    });
  }, [setUser]);
};

const guestUser = { role: "guest", auth: null };

const useUpdateUserInfo = () => {
  const user = useUser();
  const setUser = useSetUser();
  const { auth } = user;
  const setUserInfo = React.useCallback(
    (snap) => {
      setUser((oldUser) => ({ ...oldUser, ...snap.val() }));
    },
    [setUser]
  );
  React.useEffect(() => {
    let db = null;
    if (auth === null) {
      setUser(guestUser);
    } else {
      db = firebase.database().ref("users").child(auth.uid);
      db.on("value", setUserInfo, window.alert);
    }
    return () => db && db.off("value", setUserInfo);
  }, [setUserInfo, setUser, auth]);
};

const FirebaseUserSubscriber = ({ children }) => {
  useHandleAuthChanges();
  useUpdateUserInfo();
  return <>{children}</>;
};
FirebaseUserSubscriber.propTypes = {
  children: PropTypes.node.isRequired,
};
export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(guestUser);
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        <FirebaseUserSubscriber>{children}</FirebaseUserSubscriber>
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default useUser;
