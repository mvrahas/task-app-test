import React from "react"
import { SafeAreaView, StyleSheet } from "react-native";
import { RealmProvider } from "./models";
import { AppSync } from "./AppSync";

export const AppWrapperSync = () => {

  // If we are logged in, add the sync configuration the the RealmProvider and render the app
  return (
    <SafeAreaView style={styles.screen}>
      <RealmProvider>
        <AppSync/>
      </RealmProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default AppWrapperSync;
