<script setup lang="ts">
import {ref} from "vue";
import {useClientData} from 'vuepress/client'

const {pageFrontmatter} = useClientData()
const dark = ref(pageFrontmatter.value.dark || false)

const link = [
  {
    name: 'qq',
    link: 'https://jq.qq.com/?_wv=1027&k=5BZ5Z8D',
    icon: 'socicon-qq',
  },
  {
    name: 'bili',
    link: 'https://space.bilibili.com/353195087',
    icon: 'socicon-niconico',
  },
  {
    name: 'skin',
    link: 'http://skin.ysumc.club/',
    icon: 'mobi-mbri-website-theme ',
  },
]
</script>

<template>
  <div class="not-prose w-full bg-neutral-50 pb-14">
    <div class="max-w-7xl mx-6 xl:mx-auto md:flex md:items-center">
      <p
          class="mr-auto text-base md:text-xl leading-normal font-normal text-center md:text-left"
      >
        您可以前往QQ群与我们交流，进入我们的bilibili页面了解更多……<br />
        或在皮肤站注册一个账号，直接开玩！
      </p>
      <div class="flex ml-auto gap-4 justify-center mt-4 md:mt-0">
        <a
            v-for="i in link"
            class="w-14 h-14 rounded-full flex items-center justify-center border-2"
            :class="[dark ? 'border-white' : 'border-gray4']"
            :href="i.link"
            target="_blank"
        >
          <span
              :class="[dark ? 'text-white' : 'text-gray4', i.icon]"
              class="text-3xl"
          ></span>
        </a>
      </div>
    </div>
  </div>
</template>
