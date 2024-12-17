<script setup lang="ts">
definePageMeta({
  layout: 'preprint'
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

<div class="w-1/3">

<div class="border border-slate-100">
      <div class="flex justify-start bg-slate-100 dark:bg-gray-800 text-sm pl-5 py-3"> 
        <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
    <span class="font-semibold pr-4 ml-4">Drafts /</span>
    <span class="pl-5 text-slate-400"></span>
  
<span class="pl-5"></span><span class="pl-2 font-semibold"></span></div>

    </div>

    <div class="overflow-x-auto text-sm">
  <table class="min-w-full border-collapse border border-slate-100">
    <tbody>
      <tr class="border-t border-slate-100">
        <td class="pl-5 py-3">
          <UIcon name="i-heroicons-chevron-right" class="w-4 h-4" />
        </td>
        <td class="py-3">
          <UIcon name="i-heroicons-folder" class="w-4 h-4" />
        </td>
        <td class="font-semibold pr-4 ml-4 py-3">Alte Fassungen</td>
        <td class="ml-10 py-3">Rentenreform zur Beschleunigu..</td>
        <td class="pl-5 text-slate-400 py-3">27 Days ago</td>
      </tr>
      <tr class="border-t border-slate-100">
        <td class="pl-5 py-3">
          
        </td>
        <td class="py-3">
          <UIcon name="i-heroicons-document" class="w-4 h-4" />
        </td>
        <td class="font-semibold pr-4 ml-4 py-3">CurrentDraft.md</td>
        <td class="ml-10 py-3">Rentenreform zur Beschleunigu..</td>
        <td class="pl-5 text-slate-400 py-3">27 Days ago</td>
      </tr>
      <tr class="border-t border-slate-100 bg-gray-600 text-white">
        <td class="pl-5 py-3">
          
        </td>
        <td class="py-3">
          <UIcon name="i-heroicons-document" class="w-4 h-4" />
        </td>
        <td class="font-semibold pr-4 ml-4 py-3">README.md</td>
        <td class="ml-10 py-3">Rentenreform zur Beschleunigu..</td>
        <td class="pl-5 text-slate-400 py-3">27 Days ago</td>
      </tr>
    </tbody>
  </table>
</div>



<div class="sticky top-20 z-50 p-10 mt-20">
<div>Die Grundrechte (fade in on scroll)</div>
<div>Der Bund und die Länder</div>
</div>


    
    
  </div>


  <div class="w-2/3">
    <div><GesetzesText /></div>
  </div>

  </div>






</template>

<style scoped>
.no-border {
  border-bottom: none;
}

</style>