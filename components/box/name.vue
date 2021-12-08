<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input
          type="checkbox"
          aria-label="Checkbox for following text input"
          :checked="list && list.includes(name)"
          @change="onChange(name, $event)"
        />
      </div>
    </div>
    <input
      type="text"
      class="form-control"
      aria-label="Text input with checkbox"
      :value="name"
      disabled
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  props: {
    name: { type: String, default: "nama" },
  },
  methods: {
    onChange(value, $event) {
      if (!this.list) this.list = [];

      const index = this.list.findIndex((v) => v == value);
      const checked = $event.target.checked;

      if (checked && index < 0) {
        this.$emit("add", value);
        this.list.push(value);
      }
      if (!checked && index >= 0) {
        this.$emit("remove", value);
        this.list.splice(index, 1);
      }
    },
  },
};
</script>