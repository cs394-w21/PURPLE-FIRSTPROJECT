import { useState, useCallback, useEffect } from "react";
import { firebase } from "../utils/firebase";

const database = firebase.database();

const useResume = () => {
  const [resumeName, updateResumeNameInternal] = useState("");

  // Use callback as to not constantly recreate function definition
  const updateResumeName = useCallback(
    (snap) => {
      const val = snap.val();
      return val && updateResumeNameInternal(val);
    },
    [updateResumeNameInternal]
  );

  useEffect(() => {
    const db = database.ref();
    db.on("value", updateResumeName, window.alert);

    return () => {
      db.off("value", updateResumeName);
    };
  }, [updateResumeName]);

  return resumeName;
};

export default useResume;
