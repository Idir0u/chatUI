import { atom } from 'jotai';

// Atom to store user data
export const userAtom = atom({
    isLoggedIn: false,
    userData: null,
});

// Action to login user
export const loginUser = (get, set, userData) => {
    set(userAtom, {
        isLoggedIn: true,
        userData: userData,
    });
};
// Action to update user data
export const updateUserData = (get, set, newUserData) => {
    const currentUser = get(userAtom);
    set(userAtom, {
        ...currentUser,
        userData: newUserData,
    });
};
// Action to logout user
export const logoutUser = (get, set) => {
    set(userAtom, {
        isLoggedIn: false,
        userData: null,
    });
};