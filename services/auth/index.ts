import { auth } from "@/config/firebaseConfig";
import { useLoader } from "@/stores/loaderStore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const loginUser = async (email: string, password: string) => {
  const { setIsLoading } = useLoader.getState();
  try {
    setIsLoading(true);
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully: ", user);
    return user;
  } catch (error: any) {
    console.log("Error logging in: ", error);
  } finally {
    setIsLoading(false);
  }
};

export const signupUser = async (email: string, password: string) => {
  const { setIsLoading } = useLoader.getState();
  try {
    setIsLoading(true);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully: ", user);
    return user;
  } catch (error: any) {
    console.log("Error signing up: ", error);
  } finally {
    setIsLoading(false);
  }
};
