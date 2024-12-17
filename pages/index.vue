<script setup lang="js">

useHead({
  title: 'Rechtsprechungsdatenbank',
});

import { ref, computed, onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://klehrshrqiyqmwctddjr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZWhyc2hycWl5cW13Y3RkZGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5ODg2MDIsImV4cCI6MjA0ODU2NDYwMn0.BJq9hVM-H2MFccf9v2vByAzrFKhWVvgR5zFEgAg-iVk';
const supabase = createClient(supabaseUrl, supabaseKey);

// Reactive data for court rulings and tags
const rulings = ref([]); // All rulings
const featuredRepos = ref([]); // Mapped rulings for display
const uniqueTags = ref([]); // All unique tags
const selectedTags = ref([]); // Tags selected by the user

// Fetch court rulings and tags
const fetchRulingsAndTags = async () => {
  try {
    // Fetch data from baywidi_urteile with related courts
    const { data, error } = await supabase
      .from('baywidi_urteile')
      .select('id, aktenzeichen, aktenzeichen_display, aigenerated_text, redaktion_text, category, date, tags, title, type, gerichte(gericht_name, gericht_logo, gericht_abk, gericht_abk_display)');

    if (error) {
      console.error('Error fetching data:', error);
      return;
    }

    rulings.value = data;

    // Extract and deduplicate tags
    const allTags = data.flatMap(ruling => ruling.tags || []);
    uniqueTags.value = [...new Set(allTags)];

    // Map the fetched data to the featuredRepos format
    featuredRepos.value = rulings.value.map(ruling => ({
      owner: ruling.gerichte.gericht_abk_display || ruling.gerichte.gericht_name || 'Unknown Court',
      name: ruling.aktenzeichen_display || ruling.aktenzeichen || 'Unknown Case',
      about: ruling.title || 'N/A',
      to: `/${ruling.gerichte.gericht_abk}/${ruling.aktenzeichen}`,
      avatar: ruling.gerichte.gericht_logo || 'https://via.placeholder.com/150',
      tags: ruling.tags || [],
      redaktion_text: ruling.redaktion_text,
      aigenerated_text: ruling.aigenerated_text
    }));
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};

// Function to toggle a tag selection
const toggleTag = (tag) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag); // Remove the tag
  } else {
    selectedTags.value.push(tag); // Add the tag
  }
};

// Computed property to filter rulings based on selected tags
const filteredRulings = computed(() => {
  if (selectedTags.value.length === 0) {
    return featuredRepos.value; // No tags selected, show all rulings
  }
  return featuredRepos.value.filter(repo =>
    selectedTags.value.every(tag => repo.tags.includes(tag))
  );
});

// Computed properties for the specific sections
const redaktionRulings = computed(() => {
  return filteredRulings.value.filter(repo => repo.redaktion_text && repo.redaktion_text.trim() !== '');
});

const aigeneratedRulings = computed(() => {
  return filteredRulings.value.filter(repo => repo.aigenerated_text && repo.aigenerated_text.trim() !== '');
});

// Automatically fetch data when the component mounts
onMounted(fetchRulingsAndTags);

</script>





<template>

  <div class="pb-10 pt-10">
    <ULandingGrid>
      <ULandingCard class="col-span-6 row-span-4" icon="i-heroicons-lock-closed" title="IT-Sicherheitsrecht" description="Alle Urteile aus dem IT-Sicherheitsrecht." color="blue" to="/IT-Sicherheitsrecht"/>
      <ULandingCard class="col-span-6 row-span-2" icon="i-heroicons-globe-alt" title="Internetrecht" description="Alle Urteile aus dem Internetrecht" color="blue" to="/Internetrecht"/>
      <ULandingCard class="col-span-6 row-span-2" icon="i-heroicons-identification" title="Datenschutzrecht" description="Alle Urteile aus dem Datenschutzrecht" color="blue" to="/Datenschutzrecht" />
    </ULandingGrid>
  </div>
  
  <!-- Tags Section -->
  <UIcon name="i-heroicons-folder-open" class="w-5 h-5 mb-4 mt-5 text-slate-400" />
  <div class="pb-12 flex justify-start gap-5">
    <UButton
      v-for="(tag, index) in uniqueTags"
      :key="index"
      size="xl"
      variant="soft"
      :class="{'bg-slate-500 hover:bg-slate-500 text-white': selectedTags.includes(tag), 'bg-slate-100': !selectedTags.includes(tag)}"
      @click="toggleTag(tag)"
    >
      {{ tag }}
    </UButton>
  </div>
  
  <!-- Redaktionell kommentierte Entscheidungen -->
  <div class="text-4xl rounded-lg mt-8">
    Redaktionell kommentierte Entscheidungen
  </div>
  
  <UPageGrid class="pt-7 pb-10" :ui="{
    wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8'
  }">
    <UPageCard
      v-for="(module, index) in redaktionRulings"
      :key="index"
      v-bind="module"
      class="pt-20 bg-sky-100 ring-0"
    >
      <div>
        <UAvatar :src="module.avatar" class="mb-2.5" />
      </div>
      <div>
        <span class="font-normal">{{ module.owner }}</span>
        <span class="pl-1">/</span>
        <span class="line-clamp-2 font-semibold text-lg">{{ module.name }}</span>
      </div>
      <div>
        <span class="mt-2 line-clamp-3 text-slate-500 text-sm">{{ module.about }}</span>
      </div>
    </UPageCard>
  </UPageGrid>

  <!-- LLM-kommentierte Entscheidungen -->
  <div class="text-4xl rounded-lg mt-8">
    LLM-kommentierte Entscheidungen
  </div>
  
  <UPageGrid class="pt-7 pb-10" :ui="{
    wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8'
  }">
    <UPageCard
      v-for="(module, index) in aigeneratedRulings"
      :key="index"
      v-bind="module"
      class="pt-20 bg-green-100 ring-0"
    >
      <div>
        <UAvatar :src="module.avatar" class="mb-2.5" />
      </div>
      <div>
        <span class="font-normal">{{ module.owner }}</span>
        <span class="pl-1">/</span>
        <span class="line-clamp-2 font-semibold text-lg">{{ module.name }}</span>
      </div>
      <div>
        <span class="mt-2 line-clamp-3 text-slate-500 text-sm">{{ module.about }}</span>
      </div>
    </UPageCard>
  </UPageGrid>

  <!-- Alle Entscheidungen -->
  <div class="text-4xl rounded-lg mt-8">
    Alle Entscheidungen
  </div>
  
  <UPageGrid class="pt-7 pb-10" :ui="{
    wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8'
  }">
    <UPageCard
      v-for="(module, index) in filteredRulings"
      :key="index"
      v-bind="module"
      class="pt-20 bg-slate-50 ring-0"
    >
      <div>
        <UAvatar :src="module.avatar" class="mb-2.5" />
      </div>
      <div>
        <span class="font-normal">{{ module.owner }}</span>
        <span class="pl-1">/</span>
        <span class="line-clamp-2 font-semibold text-lg">{{ module.name }}</span>
      </div>
      <div>
        <span class="mt-2 line-clamp-3 text-slate-500 text-sm">{{ module.about }}</span>
      </div>
    </UPageCard>
  </UPageGrid>
  
</template>


  

<style scoped>
@keyframes flash {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-flash {
  animation: flash 1s infinite;
}
</style>

