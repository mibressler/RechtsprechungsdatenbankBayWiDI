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
const featuredRepos = ref([]); // Filtered rulings
const uniqueTags = ref([]); // All unique tags
const selectedTags = ref([]); // Tags selected by the user

// Fetch court rulings and tags
const fetchRulingsAndTags = async () => {
  try {
    // Fetch data from baywidi_urteile where category is IT-Sicherheitsrecht
    const { data, error } = await supabase
      .from('baywidi_urteile')
      .select('id, aktenzeichen, aktenzeichen_display, category, date, tags, title, type, gerichte(gericht_name, gericht_logo, gericht_abk, gericht_abk_display)')
      .eq('category', 'Internetrecht'); // Filter by category

    if (error) {
      console.error('Error fetching data:', error);
      return;
    }

    rulings.value = data;

    // Extract and deduplicate tags
    const allTags = data.flatMap(ruling => ruling.tags || []); // Combine all tags into a single array
    uniqueTags.value = [...new Set(allTags)]; // Deduplicate tags and assign to uniqueTags

    // Map the fetched data to the featuredRepos format
    featuredRepos.value = rulings.value.map(ruling => ({
      owner: ruling.gerichte.gericht_abk_display || ruling.gerichte.gericht_name || 'Unknown Court', // Court abbreviation or name
      name: ruling.aktenzeichen_display || ruling.aktenzeichen || 'Unknown Case', // Aktenzeichen or display field
      about: ruling.title || 'N/A', // Description combining category and type
      to: `/${ruling.gerichte.gericht_abk}/${ruling.aktenzeichen}`, // Generate a dynamic link based on ruling ID
      avatar: ruling.gerichte.gericht_logo || 'https://via.placeholder.com/150', // Court logo or placeholder image
      tags: ruling.tags || [], // Include tags for filtering
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
  ); // Show rulings matching all selected tags
});

// Automatically fetch data when the component mounts
onMounted(fetchRulingsAndTags);

</script>





<template>
  
  <!-- Tags Section -->
  <UIcon name="i-heroicons-folder-open" class="w-5 h-5 mb-4 mt-12 text-slate-400" />
  <div class="pb-2 flex justify-start gap-5">
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
  
  <!-- Filtered Repos Section -->
  <div class="text-4xl rounded-lg mt-8">
    Alle Urteile aus dem Internetrecht
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

