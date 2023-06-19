<template>
  <div class="text-center p-4 space-y-4 border">
    <div class="flex justify-center items-center">
      <ExclamationCircleIcon class="h-8 w-8 text-orange-700" />
      <p class="ml-1">发生错误啦!</p>
    </div>
    <div>
      <p class="text-gray-500 inline-block break-all text-sm">
        {{ props.errMsg }}
      </p>
    </div>
    <NButton @click="emits('handleClick')">重 试</NButton>
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
