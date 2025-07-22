import { create } from 'zustand'
import { useUserStore } from './userStore';
import { count } from 'firebase/firestore';

const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    count: 0,
    dum: null,
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,
    changeChat: (chatId, user) => {
        const currentUser = useUserStore.getState().currentUser;
        if (user.block.includes(currentUser.id)) {
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked: true,
                isReceiverBlocked: false,
                dum: chatId,
            })
        } else if (currentUser.block.includes(user.id)) {
            return set({
                chatId,
                user: user,
                isCurrentUserBlocked: false,
                isReceiverBlocked: true,
                dum: chatId,
            })
        } else {

            return set({
                chatId,
                user,
                isCurrentUserBlocked: false,
                isReceiverBlocked: false,
                dum: chatId,
            })
        }
    },
    changeBlock: () => {
        set(state => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }))
    }, resetStore: () => set({ user: null, chatId: null })
}))

export { useChatStore };