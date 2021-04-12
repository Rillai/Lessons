<template>
  <form>
    <div>
      <select v-model="selected_lang1">
        <option>Русский</option>
        <option>Английский</option>
        <option>Чешский</option>
      </select>
      <br />
      <input type="text" @input="handleOnChange" v-model.trim="userText" />
    </div>
    <div>
      <select v-model="selected_lang2">
        <option>Русский</option>
        <option>Английский</option>
        <option>Чешский</option>
      </select>
      <br />
      <input
        type="text"
        disabled
        :value="!!translation ? translation : 'Перевод'"
      />
    </div>
  </form>
</template>

<script>

export default {
  name: "FormTranslator",
  data() {
    return {
      userText: "",
      translation: "",
      selected_lang1: "Русский",
      selected_lang2: "Английский",
    };
  },
  methods: {
    handleOnChange() {
    },
  },
};

</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
input {
  margin: 3px 0;
}
</style>
