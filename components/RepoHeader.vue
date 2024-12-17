<script setup lang="js">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://klehrshrqiyqmwctddjr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZWhyc2hycWl5cW13Y3RkZGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5ODg2MDIsImV4cCI6MjA0ODU2NDYwMn0.BJq9hVM-H2MFccf9v2vByAzrFKhWVvgR5zFEgAg-iVk';
const supabase = createClient(supabaseUrl, supabaseKey);

// Extract the route and initialize reactive properties
const route = useRoute();
const courtName = ref('');
const caseNumber = ref('');
const errorMessage = ref(null);

// Fetch the ruling based on the route parameters
const fetchRuling = async () => {
  try {
    const courtAbk = route.params.courtAbk?.toUpperCase();
    const aktenzeichen = route.params.aktenzeichen?.toUpperCase();

    if (!courtAbk || !aktenzeichen) {
      errorMessage.value = 'Invalid route parameters.';
      return;
    }

    // Query Supabase for the specific ruling
    const { data, error } = await supabase
      .from('baywidi_urteile')
      .select('id, aktenzeichen, gerichte(gericht_abk, gericht_name)')
      .eq('gerichte.gericht_abk', courtAbk)
      .eq('aktenzeichen', aktenzeichen)
      .single();

    if (error) {
      errorMessage.value = 'Urteil nicht gefunden.';
      console.error(error);
      return;
    }

    // Update reactive properties
    courtName.value = data.gerichte.gericht_name;
    caseNumber.value = data.aktenzeichen;
  } catch (err) {
    errorMessage.value = 'An error occurred while fetching the ruling.';
    console.error(err);
  }
};

// Fetch data when the component is mounted
onMounted(fetchRuling);
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
</template>


<style scoped>
.no-border {
  border-bottom: none;
}
</style>
