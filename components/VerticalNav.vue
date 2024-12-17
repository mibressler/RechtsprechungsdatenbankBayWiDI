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
  } ], 
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

<div class="flex justify-start">
            <a href="/"><Logo size="sm" class="" /></a>
            <div class="hover:bg-slate-50 hover:rounded px-1 mb-1 font-semibold text-lg ml-2"></div>
        </div>


      




</template>