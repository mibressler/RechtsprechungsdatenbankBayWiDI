<script setup lang="ts">
const items = [
  [{
    label: 'mibressler',
    slot: 'account',
    disabled: true
  }],[{
    slot: 'last',
    disabled: true,
    label: 'Last accessed',

  },{
    slot: 'last1',
    disabled: false,
    label: 'GG',
    owner: 'Bundestag',
    src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    to: '/repo1'

  },{
    slot: 'last1',
    disabled: false,
    label: 'DDG',
    owner: 'Bundestag',
    src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    to: '/repo_rev'

  },{
    slot: 'last1',
    disabled: false,
    label: 'BayDWiki',
    owner: 'mibressler',
    src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    to: '/repo2'

  }],
   [{
    label: 'My Profile',
    icon: 'i-heroicons-user'
  }],
   [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open'
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone'
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal'
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
]
</script>

<template>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4"  chip-color="blue"
    chip-text=""
    chip-position="top-right"/>

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #last1="{ item }" >
  <div class="text-left text-gray-400">
    <div class="">
      <div>
        <UAvatar :src="item.src" size="2xs" class="mr-2"/><span>{{ item.owner }}</span> / <span class="font-semibold">{{ item.label }}</span>
      </div>
      
    </div>
  </div>
</template>


    

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
</template>

