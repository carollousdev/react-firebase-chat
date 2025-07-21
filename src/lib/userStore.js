import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

const useUserStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    toogleCheck: false,
    toogleAdd: (status) => {
        return set({
            toogleCheck: status
        })
    },
    fetchUserInfo: async (user) => {
        if (!user) return set({ currentUser: null, isLoading: false });

        try {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                set({ currentUser: docSnap.data(), isLoading: false });
            }
        } catch (error) {
            console.log(error);
            return set({ currentUser: null, isLoading: false });
        }
    }
}))

export { useUserStore };