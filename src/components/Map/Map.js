import axios from 'axios';
import HeaderComponent from '../Header/Header.vue';

export default {
    name: 'Map',
    components: {
        HeaderComponent
    },
    data() {
        return {

            center: {},
            markers: [],
            placeInfo: null,

        };
    },

    mounted() {
        this.geolocate();
    },

    methods: {
        geolocate: function () {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = +position.coords.latitude;
                let lng = +position.coords.longitude;
                this.getRestaurant(lng, lat)
            });
        },
        getRestaurant(lng, lat) {
            axios.get(`https://wainnakel.com/api/v1/GenerateFS.php?uid=${lng},${lat}`).then((res) => {
                console.log(+res.data.lat);
                console.log(res);

                const marker = {
                    lat: +res.data.lat,
                    lng: +res.data.lon
                };
                this.markers =[{ position: marker }];
                this.center = marker;
                this.placeInfo = res.data;
            })
        }
    }
}