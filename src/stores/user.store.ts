import { User } from "types";
import { create } from 'zustand';
import { userMock } from "mocks";

interface UserStore {
    user: User;
    setUser: (user: User) => void;
}

const useUserStore = create<UserStore>((set) => ({
    user: userMock,
    setUser: (user: User) => { set((state) => ({...state, user})) }
}));

export default useUserStore;