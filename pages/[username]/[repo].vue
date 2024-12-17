<script setup lang="js">


definePageMeta({
  layout: 'rsp',

})



import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { createClient } from '@supabase/supabase-js';
import MarkdownIt from 'markdown-it';

// Initialize Supabase client
const supabaseUrl = 'https://klehrshrqiyqmwctddjr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZWhyc2hycWl5cW13Y3RkZGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5ODg2MDIsImV4cCI6MjA0ODU2NDYwMn0.BJq9hVM-H2MFccf9v2vByAzrFKhWVvgR5zFEgAg-iVk';
const supabase = createClient(supabaseUrl, supabaseKey);


// Markdown renderer instance with customization
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true, // Auto-detect URLs and make them links
  typographer: true, // Enable smart quotes and other typographic enhancements
}).use((md) => {
  // Plugin to add TailwindCSS classes to h1, h2, h3
  md.renderer.rules.heading_open = (tokens, idx) => {
    const level = tokens[idx].tag; // e.g., h1, h2, etc.
    const tailwindClass = {
      h1: 'text-3xl font-bold mt-6 mb-2', // Less space beneath
      h2: 'text-2xl font-semibold mt-4 mb-1', // Less space beneath
      h3: 'text-xl font-medium mt-3 mb-1', // Less space beneath
    }[level] || '';
    return `<${level} class="${tailwindClass}">`;
  };

  // Plugin to add TailwindCSS classes to paragraphs
  md.renderer.rules.paragraph_open = () =>
    '<div class="text-base text-gray-700 leading-relaxed">';

  // Plugin to add TailwindCSS classes to unordered and ordered lists
  md.renderer.rules.bullet_list_open = () =>
    '<ul class="list-disc ml-0">'; // Remove `space-y` completely
  md.renderer.rules.ordered_list_open = () =>
    '<ol class="list-decimal ml-0">'; // Remove `space-y` completely

  // Plugin to add TailwindCSS classes to list items
  md.renderer.rules.list_item_open = () =>
    '<li class="text-gray-700 leading-tight -mb-2">'; // Tighten spacing with `leading-tight` and `mb-1`
});


// Extract the route and initialize reactive properties
const route = useRoute();
const courtName = ref('');
const courtNameFull = ref('');
const courtLogo = ref('');
const caseNumber = ref('');
const errorMessage = ref(null);
const caseTitle = ref('');
const caseType = ref('');
const caseDate = ref('');
const tags = ref([]); // Tags for the court ruling
const rechtsgrundlagen = ref([]);
const spruchkörper = ref('');
const ecli = ref('');
const fundstelle = ref('');
const lastUpdated = ref('');
const vorinstanz = ref([]);
const nachfolgend = ref([]);
const leitsatz = ref([]);
const thema = ref("");
const redaktion_text = ref("");
const aigenerated_text = ref("");
const redaktion_last_updated = ref("");
const aigenerated_last_updated = ref("");
const entscheidungs_text = ref("");

// Fetch the ruling based on the route parameters
const fetchRuling = async () => {
  try {
    const courtAbk = route.params.username?.toUpperCase();
    const aktenzeichen = route.params.repo?.toUpperCase();

    if (!courtAbk || !aktenzeichen) {
      errorMessage.value = 'Invalid route parameters.';
      return;
    }

    // Query Supabase for the specific ruling
    const { data, error } = await supabase
      .from('baywidi_urteile')
      .select('id, aktenzeichen, fundstelle, vorinstanz, redaktion_text, entscheidungs_text, aigenerated_text, aigenerated_last_updated, redaktion_last_updated, thema, leitsatz, nachfolgend, last_updated, aktenzeichen_display, spruchkörper, ecli, rechtsgrundlagen, title, date, type, tags, gerichte(gericht_abk, gericht_abk_display, gericht_name, gericht_logo)')
      .eq('gerichte.gericht_abk', courtAbk)
      .eq('aktenzeichen', aktenzeichen)
      .single();

    if (error) {
      errorMessage.value = 'Urteil nicht gefunden.';
      console.error(error);
      return;
    }

    // Update reactive properties
    courtName.value = data.gerichte.gericht_abk_display;
    courtNameFull.value = data.gerichte.gericht_name;
    caseNumber.value = data.aktenzeichen_display;
    courtLogo.value = data.gerichte.gericht_logo;
    caseTitle.value = data.title;
    caseType.value = data.type;
    caseDate.value = new Date(data.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
    lastUpdated.value = new Date(data.last_updated).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
    tags.value = data.tags || []; 
    rechtsgrundlagen.value = data.rechtsgrundlagen || [];
    spruchkörper.value = data.spruchkörper || '';
    ecli.value = data.ecli || '';
    fundstelle.value = data.fundstelle || '';
    vorinstanz.value = data.vorinstanz || [];
    nachfolgend.value = data.nachfolgend || [];
    leitsatz.value = data.leitsatz || [];
    thema.value = data.thema || '';
    redaktion_text.value = data.redaktion_text || '';
    aigenerated_text.value = data.aigenerated_text || '';
    redaktion_last_updated.value = new Date(data.redaktion_last_updated).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
    aigenerated_last_updated.value = new Date(data.aigenerated_last_updated).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
    entscheidungs_text.value = data.entscheidungs_text || '';
  } catch (err) {
    errorMessage.value = 'An error occurred while fetching the ruling.';
    console.error(err);
  }
};

// Fetch data when the component is mounted
onMounted(fetchRuling);

useHead({
  title: courtName.value,
})


const links = [
  [{
  label: 'Inhalt',
  icon: 'i-heroicons-book-open',
  to: route.path,
}, ], [{
    label: '',
    labelClass: 'font-normal'
  },{
    icon: 'i-heroicons-ellipsis-vertical'
   }]
]

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
  }"
  class="no-border group bg-slate-50 dark:bg-gray-800"
  >
    <template #left>
      <div class="flex items-center">
        <LogoMin size="" class="" />
        <div v-if="errorMessage" class="text-red-500 px-4">{{ errorMessage }}</div>
        <template v-else>
          <div class="px-1 ml-4">{{ courtName }}</div>
          <div class="px-1 text-slate-400">/</div>
          <div class="px-1 text-slate-400">{{ caseNumber }}</div>
        </template>
      </div>
    </template>

    <template #center></template>
    <template #right></template>
  </UHeader>

<div class="bg-slate-50 dark:bg-gray-800">

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
  :title="caseType + ' vom ' + caseDate"
  class="pl-8 no-border mt-0 pt-0 pb-0 bg-slate-50 dark:bg-gray-800"
  />
  <div class="bg-slate-50 dark:bg-gray-800 dark:bg-gray-800 rounded-2xl">
    <div class="flex justify-start px-8 mt-6 mb-5">

      
  <UAvatar
      size="xs"
      :src=courtLogo
      alt="Avatar"
    />
  <div class="mx-4 ml-3">{{ courtNameFull }}</div>
  
  
  
</div>



  <div class="px-8">

    <div v-if="tags.length > 0" class="flex flex-wrap gap-2 mb-4">
        <UButton
          v-for="(tag, index) in tags"
          :key="index"
          color="gray"
          class="rounded-full bg-slate-100"
          variant="ghost"
          size="sm"
        >
          {{ tag }}
        </UButton>
      </div>

      <div v-if="thema.length > 0" class="font-semibold pb-1">Gegenstand</div>

<div v-if="thema.length > 0" class="text-md 2xl:w-2/5 line-clamp-3"> {{ thema }}</div>

    <div v-if="leitsatz.length > 0" class="font-semibold pt-2">Leitsatz</div>

    <div v-if="leitsatz.length > 0" class=" -mt-4">
      <div v-if="leitsatz" class=" prose prose-lg dark:prose-invert">
      <div v-html="md.render(leitsatz)"></div>
    </div>
    </div>

    


    <div class="text-md">
      <table class="mt-3 table-auto">
        <tr v-if="rechtsgrundlagen.length > 0">
          <td class="pr-8">Rechtsgrundlagen</td>
            <td class="text-slate-400">{{ rechtsgrundlagen.join(', ') }}</td>
        </tr>
        <tr v-if="spruchkörper">
          <td class="pr-8">Spruchkörper</td>
          <td class="text-slate-400">{{ spruchkörper }}</td>
        </tr>
        <tr v-if="ecli">
          <td class="">ECLI</td>
          <td class="text-slate-400">{{ ecli }}</td>
        </tr>
        <tr v-if="fundstelle">
          <td class="">Fundstelle</td>
          <td class="text-slate-400">{{ fundstelle }}</td>
        </tr>
      </table>
      <div class="2xl:w-1/6" v-if = "vorinstanz.length > 0">
        <ULink :to="'/'+ vorinstanz[0]">
      <div class="my-2 p-2 bg-slate-100 rounded-md">
        <div class="text-sm font-semibold">Vorinstanz</div>
        <div class="text-sm font-semibold text-slate-400">GERID/AZ</div>
      </div>
      </ULink>
        </div>
        <div class="2xl:w-1/6" v-if = "nachfolgend.length > 0">
          <ULink :to="'/'+ nachfolgend[0]">
      <div class="my-2 p-2 bg-slate-100 rounded-md">
        <div class="text-sm font-semibold">Nachfolgend</div>
        <div class="text-sm font-semibold text-slate-400">{{ nachfolgend.join(', ') }}</div>
      </div>
    </ULink>
        </div>

    </div>
  
  
  </div>


  <div class="px-8 pt-2 font-normal text-gray-400 text-sm"><a href="google.com">Zuletzt aktualisiert am {{ lastUpdated }}</a></div>

  
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
      <div v-if="redaktion_text" class="bg-sky-100 mt-5 text-sm pl-5 py-3 rounded-tl-2xl rounded-tr-2xl"> 
        <div class="flex justify-between">
        <div class="flex items-center">
        <UAvatar
      size="3xs"
      src="https://www.baywidi.de/wp-content/uploads/2020/05/cropped-BayWiDI_ICON_A3-1.png"
      alt="Avatar"
      class=""
    />
    <span class="font-semibold pr-4 ml-4">Redaktionelle Einordnung</span></div>
    <span class="pr-5 text-slate-400">vom {{ redaktion_last_updated }}</span>

    </div>
    <!-- Markdown Section -->
<div v-if="redaktion_text" class="px-2 my-6 prose prose-lg dark:prose-invert">
      <div v-html="md.render(redaktion_text)"></div>
    </div>

    <div v-else class="px-8 mt-6 text-gray-500 dark:text-gray-400">
      No additional content available.
    </div>
  
</div>

<div v-if="aigenerated_text" class="bg-green-100 mt-5 text-sm pl-5 py-3 rounded-tl-2xl rounded-tr-2xl"> 
        <div class="flex justify-between">
        <div class="flex items-center">
        <UAvatar
      size="3xs"
      src="https://www.baywidi.de/wp-content/uploads/2020/05/cropped-BayWiDI_ICON_A3-1.png"
      alt="Avatar"
      class=""
    />
    <span class="font-semibold pr-4 ml-4">LLM-generierte Einordnung</span></div>
    <span class="pr-5 text-slate-400">vom {{ aigenerated_last_updated }}</span>

    </div>
    <!-- Markdown Section -->
<div v-if="aigenerated_text" class="px-2 my-6 prose prose-lg dark:prose-invert">
      <div v-html="md.render(aigenerated_text)"></div>
    </div>

    <div v-else class="px-8 mt-6 text-gray-500 dark:text-gray-400">
      No additional content available.
    </div>
  
</div>

<div class="px-2 pt-0" >
<!-- Markdown Section -->
<div v-if="entscheidungs_text" class="px-2 my-6 prose prose-lg dark:prose-invert">
      <div v-html="md.render(entscheidungs_text)"></div>
    </div>

    <div v-else class="px-8 mt-6 text-gray-500 dark:text-gray-400">
      No additional content available.
    </div>

</div>


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