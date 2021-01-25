import React from "react";
import * as Linking from "expo-linking";
import useUser from "./useUser";

const useViewWebsite = () => {
  const { siteUrl } = useUser();
  const viewWebsite = React.useCallback(() => {
    Linking.openURL(`https://nervous-line.surge.sh/${siteUrl}`);
  }, [siteUrl]);
  return viewWebsite;
};

export default useViewWebsite;
