<template>
  <v-container>
    <div class="outer-box">
      <h2>Entry Data Ruangan</h2>
      <v-row>
        <v-text-field label="Kode Ruangan" v-model="ruangan.kode" variant="outlined"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field label="Nama Ruangan" v-model="ruangan.nama" variant="outlined"></v-text-field>
      </v-row>
      <v-row>
        <v-btn color="blue" @click="submitRuangan">Submit</v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Ruangan } from '@/model/Ruangan'

export default {
  data() {
    return {
      ruangan: new Ruangan('', '')
    }
  },
  methods: {
    submitRuangan() {
      if (!this.ruangan.kode) {
        alert('Field Kode Ruangan belum terisi')
      } else if (!this.ruangan.nama) {
        alert('Field Nama Ruangan belum terisi')
      } else {
        alert('Data Ruangan ' + this.ruangan.nama + ' berhasil disimpan')
        this.ruangan = new Ruangan('', '')
      }
    }
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.outer-box {
  border: 1px solid #ccc;
  padding: 50px;
}
</style>
