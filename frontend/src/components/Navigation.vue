<template>
  <div class="py-4">
    <div class="flex justify-between items-center mx-auto">
      <div class="h-full flex items-center">
        <NAvatar
          size="medium"
          :style="{
            backgroundColor: 'white',
          }"
          src="https://www.naiveui.com/assets/naivelogo-93278402.svg"
        />
      </div>
      <div class="space-x-8 flex items-center">
        <NMenu
          v-model:value="activeKey"
          mode="horizontal"
          :options="menuOptions"
        />
        <NButton v-if="!store.userInfoState" type="primary">登 录</NButton>
        <UserInfoCard v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NAvatar, NMenu, NButton } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import UserInfoCard from "./UserInfoCard.vue";
import { userInfoStore } from "../store";

const router = useRouter();
const activeKey = ref();
const store = userInfoStore();

const menuOptions: MenuOption[] = [
  {
    label: "首页",
    key: "/",
  },
  {
    label: "分类",
    key: "pinball-7",
  },
  {
    label: "我的",
    key: "pinball-197",
  },
  {
    label: "贴吧",
    key: "pinball-73",
  },
];
watch(activeKey, () => {
  router.push({ name: activeKey.value });
});
</script>
../store/types
