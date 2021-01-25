import { useState, useCallback, useEffect } from "react";
import { firebase } from "../utils/firebase";

const database = firebase.database();

export const defaultInitialValues = {
  name: "",
  email: "",
  location: "",
  phone: "",
  education: [],
  experience: [],
  skills: [],
};

const getResume = (appData, resumeID) => {
  if (appData === undefined) return null;
  const { resumes } = appData;
  if (resumes === undefined) return null;
  return resumes[resumeID] || defaultInitialValues;
};

const useResume = (resumeID) => {
  const [appData, updateAppDataInternal] = useState("");

  // Use callback as to not constantly recreate function definition
  const updateAppData = useCallback(
    (snap) => {
      const val = snap.val();
      return val && updateAppDataInternal(val);
    },
    [updateAppDataInternal]
  );

  useEffect(() => {
    const db = database.ref();
    db.on("value", updateAppData, window.alert);

    return () => {
      db.off("value", updateAppData);
    };
  }, [updateAppData]);

  return {
    loading: !appData,
    resume: getResume(appData, resumeID),
  };
};

export default useResume;
