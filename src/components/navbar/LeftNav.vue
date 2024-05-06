<template>
  <v-navigation-drawer>
    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" :to="'/'"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Dosen" :to="'/Dosen'"></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Mahasiswa"
        :to="'/Mahasiswa'"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Ruangan" :to="'/Ruangan'"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main style="height: 250px"></v-main>
</template>
