<template>
  <v-container>
    {{ title }}
    {{ description }}
    {{ time }}
    <v-row>
      <v-col>
        <!-- タイトル入力 -->
        <v-text-field
          label="Title"
          required
          counter
          maxlength="25"
          v-model="title"
        />
        <!-- 詳細入力 -->
        <v-textarea
          label="Description"
          counter
          maxlength="200"
          v-model="description"
        />
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <!-- 時刻選択 -->
            <v-time-picker format="24hr" v-model="time" />
          </v-col>
          <v-col>
            <!-- 日付選択 -->
            <v-date-picker no-title bottom color="primary" />
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <!-- 日時選択解除 -->
        <v-list class="overflow-y-auto" max-height="75vh">
          <date-list-item :date="now" />
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { DateTime } from "luxon";

export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      now: DateTime.now(),
      title: "",
      description: "",
      time: "19:00",
    };
  },
  methods: {
    changeEvent() {
      this.$emit("change", {
        title: this.title,
        description: this.description,
      });
    },
  },
  watch: {
    value() {
      this.title = this.value.title;
      this.description = this.value.description;
    },
    title() {
      this.changeEvent();
    },
    description() {
      this.changeEvent();
    },
  },
};
</script>
