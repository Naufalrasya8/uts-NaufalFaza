<template>
  <v-container>
    <div class="outer-box">
      <h2>Entry Data Dosen</h2>
      <v-row>
        <v-text-field label="NIDN" v-model="dosen.nidn" variant="outlined"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field label="Nama" v-model="dosen.nama" variant="outlined"></v-text-field>
      </v-row>
      <v-row>
        <v-btn color="blue" @click="submitDosen">Submit</v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Dosen } from '@/model/Dosen'

export default {
  data() {
    return {
      dosen: new Dosen('', '')
    }
  },
  methods: {
    submitDosen() {
      if (!this.dosen.nidn) {
        alert('Field NIDN belum terisi')
      } else if (!this.dosen.nama) {
        alert('Field Nama belum terisi')
      } else {
        alert('Data Dosen ' + this.dosen.nama + ' berhasil disimpan')
        this.dosen = new Dosen('', '')
      }
    }
  }
}
</script>

<style scoped>
h2 {
  padding-bottom: 30px;
}

.outer-box {
  border: 1px solid #ccc;
  padding: 80px;
}

.input-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.input-row v-text-field {
  width: calc(50% - 10px);
}
</style>
