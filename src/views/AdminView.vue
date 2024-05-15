<template>
    <v-app>
        <SideBar />
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
import SideBar from "@/components/Admin/SideBar.vue";


export default {
    components: {  SideBar },
  };

</script>
