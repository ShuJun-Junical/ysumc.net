<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const btnFlag = ref(false)
const scrollTop = ref(0)

onMounted(() => {
  window.addEventListener('scroll', scrollToTop)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollToTop)
})

function backTop() {
  document.documentElement.scrollTop = document.body.scrollTop = 0
}

function scrollToTop() {
  scrollTop.value =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
  btnFlag.value = scrollTop.value > 400;
}
</script>

<template>
  <Transition>
    <button
        class="h-14 w-14 rounded-full border-2 border-white bg-black/20 fixed bottom-10 right-20 z-50 flex items-center justify-center"
        v-show="btnFlag"
        @click="backTop"
    >
      <svg
          t="1678205587482"
          class="w-5 h-5"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8535"
      >
        <path
            fill="#ffffff"
            d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3c-3.8 5.3-0.1 12.7 6.5 12.7h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
            p-id="8536"
        ></path>
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
