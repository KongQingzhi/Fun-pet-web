import { ref } from "vue";
import { createPinia, defineStore } from "pinia";

const pinia = createPinia();

export const userInfoStore = defineStore("userInfo", () => {
  const userInfoState = ref(null);
  const clearUserInfo = () => (userInfoState.value = null);
  return {
    userInfoState,
    clearUserInfo,
  };
});

export default pinia;
