import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import SafeContianer from "@/components/ui/SafeContianer";
import { useUserData } from "@/stores/userDataStore";
import React from "react";

const getStarted = () => {
  const { addUserData } = useUserData();

  return (
    <SafeContianer>
      <Label>getStarted</Label>
      <Button
        title="Test"
        variant="primary"
        onPress={() => {
          addUserData({ email: "test", password: "test" });
        }}
      />
    </SafeContianer>
  );
};

export default getStarted;
