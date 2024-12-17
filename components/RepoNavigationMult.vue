<script setup lang="ts">


const links = [
  [{
  label: 'Inhalt',
  icon: 'i-heroicons-book-open',
  to: '/repo1'
}, {
  label: 'Proposals for Revision',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/repo_rev',
  badge: 3,
}, {
  label: 'Actions',
  icon: 'i-heroicons-forward',
  to: '/repo2subfold',
  badge: 1,
}, {
  label: 'Cited in (& topics)',
  icon: 'i-heroicons-bars-3-bottom-left',
  to: '/repo2',
  badge: 5,
}, {
  label: 'Discussion',
  icon: 'i-heroicons-chat-bubble-left-right',
  to: '/repo2detail',
  badge: 103,
},], [{
    label: '0d128d · Fassung vom 18.07.1998',
    labelClass: 'font-normal'
  },{
    label: 'Markup (logic, blame, discussion)',
    icon: 'i-heroicons-chevron-down',
    labelClass: 'font-normal'
  }, {
    label: 'Preview',
  }, {
    label: 'Code',
  }, 
  {
    label: 'Open',
    labelClass: 'bg-gray-600 text-white pr-3 pl-3 pt-1 pb-1 rounded-md mb-0 mt-0',
  }, 
  {
    icon: 'i-heroicons-heart'
  },{
    icon: 'i-heroicons-ellipsis-vertical'
   }]
]


</script>


<template>
<UPageHeader :ui="{
    wrapper: 'relative pt-2',
    container: 'flex flex-col lg:flex-row lg:items-center lg:justify-between',
    headline: 'mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5',
    title: 'text-2xl sm:text-3xl font-normal text-gray-900 dark:text-white tracking-tight',
    description: 'mt-4 text-lg text-gray-500 dark:text-gray-400',
    icon: {
      wrapper: 'flex',
      base: 'w-10 h-10 flex-shrink-0 text-primary'
    },
    links: 'flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0'
  
  }"
  title="Grundgesetz für die Bundesrepublik Deutschland"
  class="pl-8 no-border mt-0 pt-0 pb-0 bg-slate-50 dark:bg-gray-800"
  />
  <div class="bg-slate-50 dark:bg-gray-800 dark:bg-gray-800 rounded-2xl">
    <div class="flex justify-start px-8 mt-6 mb-5">

      
  <UAvatar
      size="xs"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Deutscher_Bundestag_logo.svg/800px-Deutscher_Bundestag_logo.svg.png"
      alt="Avatar"
    />
  <div class="mx-4">Deutscher Bundestag</div>
  
  
  
</div>



  <div class="px-8">
  

    <UButton color="gray" class="mt-1 mb-4 rounded-full bg-slate-100" variant="ghost" size="sm">
      <span class="pl-1 text-gray-400">mibressler/</span><span>baydigwiki</span>
    <template #leading>
      <UAvatar
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        size="3xs"
      />
    </template>
  </UButton>
  <UButton color="gray" class="mt-1 mb-4 ml-4 rounded-full bg-slate-100" variant="ghost" size="sm">
      <span class="pl-1 text-gray-400">arxiv:</span><span>2408.00203</span>
    <template #leading>
      <UAvatar
        src="https://cdn.icon-icons.com/icons2/2389/PNG/512/arxiv_logo_icon_145478.png"
        size="3xs"
      />
    </template>
  </UButton>
  <UButton color="gray" class="mt-1 mb-4 ml-4 rounded-full bg-slate-100" variant="ghost" size="sm">
      <span class="pl-1 text-gray-400">mibressler/</span><span>llama-finetune3</span>
    <template #leading>
      <UAvatar
        src="https://cdn.worldvectorlogo.com/logos/huggingface-2.svg"
        size="3xs"
      />
    </template>
  </UButton>
  <UButton color="gray" class="mt-1 mb-4 ml-4 rounded-full bg-slate-100" variant="ghost" size="sm">
      <span class="pl-1 text-gray-400">beck:</span><span>FHOeffR 11 Nr. 4148</span>
    <template #leading>
      <UAvatar
        src="https://presse.beck.de/media/2ileyyfj/chbeck-bildmarke.jpg"
        size="3xs"
      />
    </template>
  </UButton>
  <UButton color="gray" class="mt-1 mb-4 ml-4 rounded-full bg-slate-100" variant="ghost" size="sm">
      <span class="pl-1 text-gray-400">juris:</span><span>KIR 2024, 77</span>
    <template #leading>
      <UAvatar
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Juris.svg/602px-Juris.svg.png"
        size="3xs"
      />
    </template>
  </UButton>
  <UButton color="gray" class="mt-1 mb-4 ml-4 rounded-full bg-slate-100" variant="ghost" size="sm">
      <span class="pl-1 text-gray-400">Bundestag/</span><span>DDG Art. 1</span>
    <template #leading>
      <UAvatar
        src="/logoblack.png"
        size="3xs"
      />
    </template>
  </UButton>
  <UButton color="gray" class="mt-1 mb-4 ml-4 rounded-full bg-slate-100" variant="ghost" size="sm">
      <span class="pl-1 text-gray-400">-qhhz-0AAAAJ:</span><span>J-pR_7NvFogC</span>
    <template #leading>
      <UAvatar
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/1200px-Google_Scholar_logo.svg.png"
        size="3xs"
      />
    </template>
  </UButton>
  <UButton color="gray" class="mt-1 mb-4 ml-4 rounded-full bg-slate-100" variant="ghost" size="sm">
      <span class="pl-1 text-gray-400">openparl:</span><span>DAT.00203</span>
    <template #leading>
      <UAvatar
        src="/logoblack.png"
        size="3xs"
      />
    </template>
  </UButton>
    <div class="font-semibold pb-1">About</div>

    <div class="text-md 2xl:w-3/5 line-clamp-3">With the rapid development of artificial intelligence technology, large language models (LLMs) have made significant progress in fields such as natural language processing, computer vision, and scientific tasks. However, as the scale of these models increases, optimizing resource consumption while maintaining high performance has become a key challenge. </div>
    
  
  
  </div>

  <div class="px-8 pt-1 font-semibold text-blue-600"><a href="google.com">projectwebsite.org</a></div>
  <div class="px-8 pt-2 font-normal text-gray-400 text-sm"><a href="google.com">MIT License</a></div>

  
  </div>

  


  

  <UHorizontalNavigation :ui="{
    wrapper: 'relative w-full flex items-center justify-between',
    container: 'flex items-center min-w-0',
    inner: 'min-w-0',
    base: 'group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75',
    before: 'before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
    after: 'after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2',
    active: 'text-gray-900 dark:text-white after:bg-[linear-gradient(266deg,rgba(252,211,77,1)0%,rgba(252,211,77,1)33%,rgba(220,38,38,1)33%,rgba(220,38,38,1)66%,rgba(10,10,10,1)66%,rgba(10,10,10,1)100%)] dark:after:bg-primary-400 after:rounded-full',
    inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
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
      base: 'flex-shrink-0 ms-auto relative rounded bg-slate-100 ring-0 text-gray-400',
      color: 'gray',
      variant: 'solid',
      size: 'xs'
    }
  }
  " :links="links"  class="pl-5 bg-slate-50 dark:bg-gray-800 mt-4"/>



  </template>

<style scoped>
.no-border {
  border-bottom: none;
}

</style>