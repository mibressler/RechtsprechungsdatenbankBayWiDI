<script setup lang="ts">
import Logo from '~/components/Logo.vue';


</script>



<template>
    <div class="flex justify-between mx-10 mt-8">
        <div class="w-1/6 mt-1">

        </div> 


        <div class="w-5/6">
            <div class="flex justify-between">
                <div class="w-5/6 mr-10">
                  <Logo size="sm" class="" />
            <Search class="mt-8" /> 
            <slot />
        </div>

            <div class="w-1/6">
                <div class="flex justify-end">
        </div>
        </div>
            </div>
        </div>
    </div>
</template>