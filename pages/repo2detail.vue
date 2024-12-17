<script setup lang="ts">
definePageMeta({
  layout: 'repo'
})

useHead({
  title: 'Bundestag / GG',
})


</script>

<template>



<div class="bg-slate-50 dark:bg-gray-800">

    <RepoNavigationMult />

</div>

<div class="flex justify-between">

<div class="w-1/6">







<div class="sticky top-20 z-50 p-10 mt-20">
<div>Die Grundrechte (fade in on scroll)</div>
<div>Der Bund und die Länder</div>
</div>


    
    
  </div>


  <div class="w-3/6">
    <div><GesetzesTextMarkup /></div>
  </div>

  <div class="w-2/6">
    lol
  </div>

  </div>






</template>

<style scoped>
.no-border {
  border-bottom: none;
}

</style>