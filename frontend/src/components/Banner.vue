<template>
  <div
    v-if="isShowBanner"
    class="flex items-center gap-x-6 bg-sky-300 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
  >
    <p class="inline-block break-all text-sm leading-6 text-white">
      {{ props.title }}
    </p>
    <div class="flex flex-1 justify-end">
      <button
        type="button"
        class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
      >
        <XMarkIcon
          v-if="isShowClose"
          @click="handleClose"
          class="h-5 w-5 text-white"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    isShowClose: boolean;
    backgroundColor: string;
  }>(),
  { title: "", isShowClose: true, backgroundColor: "#7dd3fc" }
);

const isShowBanner = ref(true);

const handleClose = () => {
  isShowBanner.value = false;
};
</script>
