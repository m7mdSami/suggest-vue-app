<template>
  <div class="suggest">
    <HeaderComponent/>
    <MapComponent/>
  </div>
</template>

<script>

import MapComponent from '@/components/Map/Map.vue';
import HeaderComponent from '@/components/Header/Header.vue';

export default {
  name: 'Suggest',
  components: {
    MapComponent,
    HeaderComponent
  }
}
</script>
