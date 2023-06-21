<template>
  <div class="text-center p-4 space-y-4 border">
    <div class="flex justify-center items-center">
      <ExclamationCircleIcon class="h-8 w-8 text-orange-600" />
      <p class="ml-1">发生错误啦!</p>
    </div>
    <div>
      <p class="text-gray-500 inline-block break-all text-sm">
        {{ props.errMsg }}
      </p>
    </div>
    <NButton type="info" ghost @click="emits('handleClick')">
      <span class="text-sm">重 试</span>
    </NButton>
  </div>
</template>

<script lang="ts" setup>
import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";
import { NButton } from "naive-ui";

const props = withDefaults(
  defineProps<{
    errMsg: string;
  }>(),
  {
    errMsg: "",
  }
);

const emits = defineEmits<{
  (event: "handleClick"): void;
}>();
</script>
