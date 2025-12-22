import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import SafeContianer from "@/components/ui/SafeContianer";
import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const getStarted = () => {
  return (
    <SafeContianer
      style={{ alignItems: "center", justifyContent: "center" }}
      variant="secondary"
    >
      <Label variant="bold" style={{ fontSize: 28, textAlign: "center" }}>
        Welcome to sn-ecomm
      </Label>

      <Label>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        odio dolor. In libero est, accumsan sit amet facilisis at, sagittis nec
        velit.
      </Label>

      <Button
        title="Login"
        variant="primary"
        buttonLength="long"
        style={styles.button}
        onPress={() => router.push("/auth/login")}
      />

      <Button
        title="Sign Up"
        variant="secondary"
        buttonLength="long"
        style={styles.button}
        onPress={() => router.push("/auth/signup")}
      />
    </SafeContianer>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
});

export default getStarted;
