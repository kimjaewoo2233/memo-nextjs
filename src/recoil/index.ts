import { atom } from "recoil";

export const sidebarisOpenState = atom<boolean>({
    key: "sidebarisOpenState",
    default: false
})