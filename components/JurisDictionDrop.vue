<script setup lang="ts">
import type { Avatar } from '#ui/types'

const people = [
{
  id: 'nobody',
  label: 'For You',
  icon: 'i-heroicons'
},
{
  id: 'eu',
  label: 'European Union',
  icon: 'i-flag-eu-4x3'
}, {
  id: 'germany',
  label: 'Germany',
  icon: 'i-flag-de-4x3'
},
{
  id: 'bavaria',
  label: 'Bavaria',
  avatar: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_Bavaria_%28lozengy%29.svg/800px-Flag_of_Bavaria_%28lozengy%29.svg.png' }
},
{
  id: 'passau',
  label: 'City of Passau',
  avatar: { src: 'https://www.waidler.com/files/57/223957OR647__uct3.jpg?v=1641988982' }
}]

const selected = ref(people[0])


</script>

<template>
  <UInputMenu v-model="selected" :options="people" variant="soft" >
    <template #leading>
      <UIcon v-if="selected.icon" :name="(selected.icon as string)" class="w-5 h-5" dynamic />
      <UAvatar v-else-if="selected.avatar" v-bind="(selected.avatar as Avatar)" size="2xs" />
    </template>
  </UInputMenu>
</template>
