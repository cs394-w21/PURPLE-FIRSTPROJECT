import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ToastBannerProvider,
  ToastBannerPresenter,
} from "react-native-toast-banner";
import PropTypes from "prop-types";
import useResume from "./src/hooks/useResume";
import Loading from "./expo-components/Loading";
import ResumeForm from "./expo-components/ResumeForm";
import LoginForm from "./expo-components/LoginForm";
import useUser, { UserProvider } from "./expo-utils/useUser";
import styles from "./expo-utils/styles";

const EditResume = () => {
  const user = useUser();
  const { loading, resume } = useResume(user.siteUrl);
  if (loading) return <Loading />;
  return <ResumeForm resume={resume} />;
};

const AuthChecker = ({ children }) => {
  const user = useUser();
  if (!user.auth) return <LoginForm />;
  return <>{children}</>;
};

AuthChecker.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => (
  <SafeAreaView style={styles.outerContainer}>
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <UserProvider>
          <ToastBannerProvider>
            <ToastBannerPresenter />
            <AuthChecker>
              <EditResume />
            </AuthChecker>
          </ToastBannerProvider>
        </UserProvider>
      </ScrollView>
    </SafeAreaProvider>
  </SafeAreaView>
);

export default App;
