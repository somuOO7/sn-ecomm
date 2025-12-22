import { User } from "@/models/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserDataState {
  userData: User;
  addUserData: (data: User) => void;
  removeUserData: () => void;
}

export const useUserData = create<UserDataState>()(
  persist(
    (set) => ({
      userData: {} as User,
      addUserData: (data: User) => set({ userData: data }),
      removeUserData: () => set({ userData: {} as User }),
    }),
    {
      name: "user-data-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
