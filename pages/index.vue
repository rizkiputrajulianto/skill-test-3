<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h2>SKILL TEST FRONTEND</h2>
        {{ add }}
        <br />
        {{ kananz }}
        <br />
        {{ kiriz }}
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6"><h4>Programmer</h4></div>
          <div class="col-md-5 offset-1"><h4>Analyst</h4></div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <box-name
              :name="item"
              v-for="(item, i) in kiri"
              :key="i"
              @add="addPayload"
              @remove="removePayload"
            />
          </div>
          <div class="col-md-2 text-center">
            <button
              type="button"
              class="btn btn-outline-info"
              @click="kananPindah"
            >
              <i class="fas fa-arrow-right"></i>
            </button>
            <br />
            <button
              type="button"
              class="btn btn-outline-info mt-4"
              @click="kiriPindah"
            >
              <i class="fas fa-arrow-left"></i>
            </button>
          </div>
          <div class="col-md-5">
            <box-name
              :name="list"
              v-for="(list, index) in kanan"
              :key="index"
              @add="addPayload"
              @remove="removePayload"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kananz: this.$store.state.data.kanan,
      kiriz: this.$store.state.data.kiri,
      add: [],
    };
  },
  computed: {
    kanan: {
      get() {
        return this.kananz;
      },
    },
    kiri: {
      get() {
        return this.kiriz;
      },
    },
  },
  methods: {
    addPayload(payload) {
      this.add.push(payload);
    },
    removePayload(payload) {
      const dataz = this.add.filter((item) => item !== payload);
      console.log(dataz);
      this.add = dataz;
    },
    kananPindah() {
      this.$store.dispatch("data/setKanan", this.add);
      this.add = [];
    },
    kiriPindah() {
      this.$store.dispatch("data/setKiri", this.add);
      this.add = [];
    },
  },
};
</script>
