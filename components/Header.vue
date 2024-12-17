<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const items = [
 [{
    label: 'Normzitat',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Link',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
  }, {
    label: 'Open in new tab',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
  }]
]

import { useMouse, useWindowScroll } from '@vueuse/core'

const { x, y } = useMouse()
const { y: windowY } = useWindowScroll()

const isOpen = ref(false)
const virtualElement = ref({ getBoundingClientRect: () => ({}) })

function onContextMenu() {
  const top = unref(y) - unref(windowY)
  const left = unref(x)

  virtualElement.value.getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top,
    left
  })

  isOpen.value = true
}
</script>

<template>
  <UHeader :ui="{
  wrapper: 'bg-background/75 backdrop-blur px sticky top-0 z-50',
  container: 'flex items-center justify-between gap-3 h-[--header-height]',
  left: 'lg:flex-1 flex items-center gap-1.5',
  center: '',
  right: 'flex items-center justify-end lg:flex-1 gap-1.5',
  logo: 'flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5',
  panel: {
    wrapper: 'fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden',
    header: 'px-4 sm:px-6',
    body: 'px-4 sm:px-6 pt-3 pb-6',
  },
  button: {
    base: 'lg:hidden',
    icon: {
      open: 'i-heroicons-bars-3-20-solid',
      close: 'i-heroicons-x-mark-20-solid'
    }
  }
}
"
class="no-border group"
@contextmenu.prevent="onContextMenu"
>


    <template #left>

      <a href="/"><LogoMin size="xs" class="" /></a>
        <div class="hover:bg-slate-50 hover:rounded px-1 mb-1 font-semibold">Rechtsprechungsdatenbank</div>
  
  

      <UDropdown :items="items" mode="hover" :popper="{ placement: 'right-start' }">
        <UIcon name="i-heroicons-chevron-right" class=" w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
  </UDropdown>
      <div class="ml-10">
         <Terminal />
        </div>
    </template>

    <template #center>
      <div>
      
    </div>

    </template>

    <template #right>


      <Avatar />

      
    </template>


  </UHeader>


  <UContextMenu v-model="isOpen" :virtual-element="virtualElement">
      <div class="p-4">
        Also copy paste menu
      </div>
    </UContextMenu>



</template>

<style scoped>
.no-border {
  border-bottom: none;
}
</style>
