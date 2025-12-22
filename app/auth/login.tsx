import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Label from "@/components/ui/Label";
import SafeContianer from "@/components/ui/SafeContianer";
import { getUserData } from "@/services/api/users.api";
import { loginUser } from "@/services/auth";
import { useUserData } from "@/stores/userDataStore";
import React, { useState } from "react";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addUserData } = useUserData();

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password);
      const fetchedUser = await getUserData(user?.user.uid || "");
      addUserData({
        email: user?.user.email || "",
        fullName: fetchedUser?.fullName || "",
      });
    } catch (error) {}
  };

  return (
    <SafeContianer>
      <Label>Let's sign you in</Label>
      <Label>Welcome back. You have been missed!</Label>

      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <InputField
        placeholder="Passowrd"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title="Login"
        variant="primary"
        buttonLength="long"
        onPress={handleLogin}
      />
    </SafeContianer>
  );
};

export default login;
