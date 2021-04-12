<template>
  <div class='app'>
    <input type="text" v-model.trim="userText"/>
    <button @click="pushTask">Добавить</button>
  </div>
  <div class='flex' :key="task.id" v-for="task in tasks">
    <label class="flex">
      <input type="checkbox" :value="task.done" @change="changeStatus(task.id)">
      <p>{{ task.task }}</p>
    </label>
  </div>
</template>

<script>

import {tasksApi} from "./api";

export default {
  name: "App",
  data() {
    return {
      tasks: [],
      userText: "",
    };
  },

  methods: {
    pushTask() {
      if (this.userText) {
        const id = this.tasks[this.tasks.length - 1].id + 1
        const task = this.userText
        tasksApi.addTask().then(() => {
          this.tasks.push({id, task, done: false})
          this.userText = ''
        })
      }
    },
    changeStatus(e) {
      tasksApi.isDone(e)
    }
  },
  mounted() {
    tasksApi.getTasks().then(response => {
      this.tasks = response.data
    });
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
