<template>
  <div class="map" v-if="placeInfo">
    <header class="placeInfo">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-6" v-if="placeInfo.image.length">
                <div class="placeImg">
                  <a :href="`${placeInfo.link}`" target="_blank">
                    <img :src="`${placeInfo.image[0]}`" :alt="`${placeInfo.name}`" srcset />  
                  </a>
                </div>
              </div>
              <div :class="`${placeInfo.image.length ? 'col-6 ' : 'col-12 text-center'}placeData d-flex justify-content-center flex-column`">
                <h4 class="placeName">{{ placeInfo.name }}</h4>
                <p>
                  <span>
                    <strong class="rating">{{ parseInt(placeInfo.rating) }}</strong>/10
                  </span> -
                  <span>{{ placeInfo.cat }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-center flex-column">
            <div class="newSuggestion">
              <button v-on:click="geolocate()" class="btn btn-green suggest">اقتراح اخر</button>
            </div>
            <div class="openMap">
              <a
                class="btn btn-green suggest"
                :href="`https://maps.google.com/?q=${placeInfo.lat},${placeInfo.lon}`"
                target="_blank"
                rel
              >
                فتح فى google map
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="gmap">
      <gmap-map
        :center="center"
        :zoom="16"
        class="map"
        :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            disableDefaultUi: true
          }"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center=m.position"
          :icon="{
            url: 'https://wainnakel.com/images/maps_marker.png',
          }"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script src="./Map.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Map.scss"></style>