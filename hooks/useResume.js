import { useState, useCallback, useEffect } from "react";
import { firebase } from "../utils/firebase";

const database = firebase.database();

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
    resume: appData && appData.resumes[resumeID],
  };
};

export default useResume;
