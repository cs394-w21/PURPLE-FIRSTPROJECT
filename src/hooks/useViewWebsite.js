import React from "react";
import * as Linking from "expo-linking";

const useViewWebsite = () => {
  const viewWebsite = React.useCallback(() => {
    Linking.openURL("http://nervous-line.surge.sh/");
  }, []);
  return viewWebsite;
};

export default useViewWebsite;
