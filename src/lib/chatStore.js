import { create } from 'zustand'
import { useUserStore } from './userStore';

const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,
    changeChat: (chatId, user) => {
        const currentUser = useUserStore.getState().currentUser;

        if (user.block.includes(currentUser.id)) {
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked: true,
                isReceiverBlocked: false
            })
        } else if (currentUser.block.includes(user.id)) {
            return set({
                chatId,
                user: user,
                isCurrentUserBlocked: false,
                isReceiverBlocked: true
            })
        } else {

            return set({
                chatId,
                user,
                isCurrentUserBlocked: false,
                isReceiverBlocked: false
            })
        }
    },
    changeBlock: () => {
        set(state => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }))
    }, resetStore: () => set({ user: null, chatId: null })
}))

export { useChatStore };