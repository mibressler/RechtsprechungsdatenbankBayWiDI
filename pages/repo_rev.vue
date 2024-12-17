<script setup lang="ts">
definePageMeta({
  layout: 'repo'
})


</script>

<template>



<div class="bg-slate-50 dark:bg-gray-800">

    <RepoNavigationMult />

</div>

<div class="flex justify-center">

<div class="w-full 2xl:w-2/3 2xl:pt-5">

<div class="border border-slate-100">
      <div class="flex justify-start bg-slate-100 dark:bg-gray-800 text-sm pl-5 py-3 2xl:rounded-tl-xl 2xl:rounded-tr-xl"> 

    <span class="font-semibold pr-4 ml-0"><span class="mr-2"><UIcon name="i-heroicons-arrow-path" class="w-4 h-4" /></span>3 Open</span>
    15 Closed<span class="pl-5 text-slate-400"><span class="mr-2 ml-20"><UIcon name="i-heroicons-chevron-down" class="w-4 h-4" /></span>Label</span>
  
</div>

    </div>

    <div class="overflow-x-auto text-sm">
  <table class="min-w-full border-collapse border border-slate-100">
    <tbody>
      <tr class="border-t border-slate-100">
        <td class="pl-5 py-3">
          <UAvatar
      size="3xs"
      src="https://www.gruene-bw.de/wp-content/themes/welance-gruene-bw/dist/images/teaser-image-fallback.jpg"
      alt="Avatar"
      class="pt-1"
    />
    <span class="font-semibold pr-4 ml-4">Bundestagsfraktion B90 / Grüne</span>
        </td>
        <td class="font-semibold pr-4 ml-4 py-3">In Beratung</td>
        <td class="ml-10 py-3">Gesetzesvorschlag zur Novellierung der Ren...</td>
        <td class="pl-5 text-slate-400 py-3">27 Days ago</td>
        <td class="py-3 pr-2">
          <UIcon name="i-heroicons-arrow-up" class="w-4 h-4" /><span class="pl-3">21</span>
        </td>
      </tr>
      <tr class="border-t border-slate-100">
        <td class="pl-5 py-3">
          <UAvatar
      size="3xs"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Sozialdemokratische_Partei_Deutschlands%2C_Logo_um_2000.svg/1200px-Sozialdemokratische_Partei_Deutschlands%2C_Logo_um_2000.svg.png"
      alt="Avatar"
      class="pt-1"
    />
    <span class="font-semibold pr-4 ml-4">SPD Bundestagsfraktion</span>
        </td>
        <td class="font-semibold pr-4 ml-4 py-3">Ausschuss</td>
        <td class="ml-10 py-3">Gesetzesvorschlag zur Novellierung</td>
        <td class="pl-5 text-slate-400 py-3">27 Days ago</td>
        <td class="py-3 pr-2">
          <UIcon name="i-heroicons-arrow-up" class="w-4 h-4" /><span class="pl-3">8</span>
        </td>
      </tr>
      <tr class="border-t border-slate-100 bg-slate-50">
        <td class="pl-5 py-3">
          <UAvatar
      size="3xs"
      src="https://media.gq-magazine.co.uk/photos/5d13a04bb744d364a425653b/16:9/w_2560%2Cc_limit/The-Big-Lebowski-hp-GQ-25Feb16_rex_b.jpg"
      alt="Avatar"
      class="pt-1"
    />
    <span class="font-semibold pr-4 ml-4">profbarthsch68</span>
        </td>
        <td class="font-semibold pr-4 ml-4 py-3">Petition eingereicht</td>
        <td class="ml-10 py-3">Rentenreform zur Beschleunigu..</td>
        <td class="pl-5 text-slate-400 py-3">27 Days ago</td>
        <td class="py-3 pr-2">
          <UIcon name="i-heroicons-arrow-up" class="w-4 h-4" /><span class="pl-3">37</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>





</div>
    
</div>





</template>

<style scoped>
.no-border {
  border-bottom: none;
}

</style>