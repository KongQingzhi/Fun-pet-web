<template>
  <div class="flex items-center">
    <NAvatar
      round
      size="medium"
      :style="{
        backgroundColor: 'white',
      }"
      :src="props.userInfo.avatar"
    />
    <div class="ml-4 hidden sm:block">
      <div class="text-lg w-38 truncate font-bold">
        {{ props.userInfo.nickName }}
      </div>
      <div class="text-sm w-38 truncate text-gray-400">
        {{ props.userInfo.account }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NAvatar } from "naive-ui";

const props = defineProps<{
  userInfo: UserInfo;
}>();

const emits = defineEmits<{
  (e:'logfin'):void
}>()
</script>
