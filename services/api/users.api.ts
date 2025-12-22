import { db } from "@/config/firebaseConfig";
import { useLoader } from "@/stores/loaderStore";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const getUserData = async (uid: string) => {
  const { setIsLoading } = useLoader.getState();
  try {
    setIsLoading(true);
    const userDoc = await getDoc(doc(db, "users", uid));
    return userDoc.data();
  } catch (error) {
    console.error("Error fetching user data: ", error);
  } finally {
    setIsLoading(false);
  }
};

export const addUser = async (email: string, uid: string, fullName: string) => {
  const { setIsLoading } = useLoader.getState();
  try {
    setIsLoading(true);
    await setDoc(doc(db, "users", uid), {
      email,
      fullName,
    });
  } catch (error) {
    console.error("Error adding user: ", error);
  } finally {
    setIsLoading(false);
  }
};

export const addWishlistItem = async (uid: string, productId: string) => {
  const { setIsLoading } = useLoader.getState();
  try {
    setIsLoading(true);
    await updateDoc(doc(db, "users", uid), {
      wishlist: arrayUnion(productId),
    });
  } catch (error) {
    console.error("Error adding wishlist item: ", error);
  } finally {
    setIsLoading(false);
  }
};
