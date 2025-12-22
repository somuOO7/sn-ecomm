import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Label from "@/components/ui/Label";
import SafeContianer from "@/components/ui/SafeContianer";
import { addUser } from "@/services/api/users.api";
import { signupUser } from "@/services/auth";
import { router } from "expo-router";
import React, { useState } from "react";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSignUp = async () => {
    try {
      const user = await signupUser(email, password);
      await addUser(user?.user.email || "", user?.user.uid || "", fullName); // Add user to Firestore
      router.back();
    } catch (error) {
      console.error("Error during sign up process: ", error);
    }
  };

  return (
    <SafeContianer>
      <Label>Let's sign you up</Label>
      <Label>Welcome. Create your account!</Label>

      <InputField
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

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
        title="Sign Up"
        variant="primary"
        buttonLength="long"
        onPress={handleSignUp}
      />
    </SafeContianer>
  );
};

export default signup;
