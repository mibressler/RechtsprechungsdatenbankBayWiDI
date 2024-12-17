<script setup lang="ts">
definePageMeta({
  layout: 'repo',
  title: 'Bundestags / GG',

})

useHead({
  title: 'Bundestags / GG',
})



</script>

<template>



<div class="bg-slate-50 dark:bg-gray-800">

    <RepoNavigationMult />

</div>


<div class="flex justify-center max-w-screen-xl mx-auto">
  <!-- Left Sidebar -->
  <div class="hidden lg:block lg:w-1/5">
    <!-- Left sidebar content here -->
  </div>

  <!-- Center Content -->
  <div class="w-full xl:w-3/5 px-4">
    <!-- Main center content here -->
    <div class="border-slate-100 rounded-2xl mt-5">
      <div class="flex justify-start bg-slate-100  text-sm pl-5 py-3 rounded-tl-2xl rounded-tr-2xl"> 
        <UAvatar
      size="3xs"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Deutscher_Bundestag_logo.svg/800px-Deutscher_Bundestag_logo.svg.png"
      alt="Avatar"
      class="pt-1"
    />
    <span class="font-semibold pr-4 ml-4">Bundestag</span>
    Rentenreform zur Beschleunigung der viele..<span class="pl-5 text-slate-400">27 Days ago</span>
  
<span class="pl-5"><UIcon name="i-heroicons-arrow-path" class="w-3 h-3" /></span><span class="pl-2 font-semibold">53 Gesetzesänderungen</span></div>
     <GesetzesText />
    </div>
  </div>

  <!-- Right Sidebar -->
  <div class="hidden lg:block lg:w-1/5">
    <!-- Right sidebar content here -->
    


  <div></div>


</div>
  </div>




</template>

<style scoped>
.no-border {
  border-bottom: none;
}

</style>