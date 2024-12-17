<script setup lang="ts">
const links = [
  [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  }, 
  {
    label: 'Discussion',
    icon: 'i-heroicons-chat-bubble-left-right',
    to: '/discussion'
  }, {
    label: 'Legislation',
    icon: 'i-heroicons-user-group',
    to: '/legislation'
  }, {
    label: 'Bills',
    icon: 'i-heroicons-book-open',
    to: '/bills'
  }, {
    label: 'Court Rulings',
    icon: 'i-heroicons-scale',
    to: '/rulings'
  }, {
    label: 'Executive Acts',
    icon: 'i-heroicons-building-library',
    to: '/acts'
  } ]
]

const bottomlinks = [
  [ {
    label: 'Actions',
    icon: 'i-heroicons-forward',
    to: '/components/command-palette'
  } ]
]
</script>

<template>

  <div class="pt-5 pl-6">

<a href="/">
<div class="flex justify-start">
            <a href="/"><Logo size="sm" class="opacity-60" /></a>
            <div class="px-1 mb-1 font-semibold text-lg ml-2">Openparl</div>
        </div>
      </a>

<UVerticalNavigation :links="links" class="mt-10" :ui="{
    wrapper: 'relative',
    base: 'group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
    ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    padding: 'px-4 py-3 my-3 max-w-[calc(95%-10rem)]',
    width: 'w-full',
    rounded: 'rounded-md',
    font: 'font-medium',
    size: 'text-sm',
    active: 'text-gray-900 dark:text-white before:bg-slate-100 dark:before:bg-gray-800 before:rounded-xl',
    inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
    label: 'truncate relative',
    icon: {
        base: 'flex-shrink-0 w-5 h-5 relative',
        active: 'text-gray-700 dark:text-gray-200',
        inactive: 'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200'
    },
    avatar: {
        base: 'flex-shrink-0',
        size: '2xs'
    },
    badge: {
        base: 'flex-shrink-0 ms-auto relative rounded',
        color: 'gray',
        variant: 'solid',
        size: 'xs'
    },
    divider: {
        wrapper: {
        base: 'p-2'
        }
    }
    }
"/>

<UVerticalNavigation :links="bottomlinks" class="mt-10 pt-10" :ui="{
    wrapper: 'relative',
    base: 'group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
    ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    padding: 'px-4 py-3 my-3 max-w-[calc(95%-10rem)]',
    width: 'w-full',
    rounded: 'rounded-md',
    font: 'font-medium',
    size: 'text-sm',
    active: 'text-gray-900 dark:text-white before:bg-slate-100 dark:before:bg-gray-800 before:rounded-xl',
    inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
    label: 'truncate relative',
    icon: {
        base: 'flex-shrink-0 w-5 h-5 relative',
        active: 'text-gray-700 dark:text-gray-200',
        inactive: 'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200'
    },
    avatar: {
        base: 'flex-shrink-0',
        size: '2xs'
    },
    badge: {
        base: 'flex-shrink-0 ms-auto relative rounded',
        color: 'gray',
        variant: 'solid',
        size: 'xs'
    },
    divider: {
        wrapper: {
        base: 'p-2'
        }
    }
    }
"/>


<p class="text-xs text-gray-500 mt-10">© 2024 Openparl · About · Updates · Impressum · Datenschutz</p> 

</div>

</template>

<style scoped>
a {
  outline: none;
}

</style>