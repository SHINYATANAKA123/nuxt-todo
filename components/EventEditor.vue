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
          :rules="[(val) => (val || '').length > 0 || 'この項目は必須です']"
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
            <v-time-picker
              format="24hr"
              v-model="time"
              :allowed-minutes="(m) => m % 5 === 0"
            />
          </v-col>
          <v-col>
            <!-- 日付選択 -->
            <v-date-picker
              no-title
              bottom
              color="primary"
              @change="addData"
              :allowed-dates="
                (v) =>
                  !dates.map((d) => d.from.toFormat('yyyy-MM-dd')).includes(v)
              "
              :min="minDate"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <!-- 日時選択解除 -->
        <v-list class="overflow-y-auto" max-height="75vh">
          <date-list-item
            v-for="v in dates"
            :key="v.id"
            :date="v.from"
            :on-remove="() => removeDate(v.id)"
          />
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
    console.log(DateTime.now());
    return {
      title: "",
      description: "",
      time: "19:00",
      minDate: DateTime.now().toFormat("yyyy-MM-dd"),
      dates: [
        {
          id: 1,
          from: DateTime.now(),
        },
        {
          id: 2,
          from: DateTime.now(),
        },
        {
          id: 3,
          from: DateTime.now(),
        },
      ],
    };
  },
  methods: {
    changeEvent() {
      this.$emit("change", {
        title: this.title,
        description: this.description,
        dates: this.dates,
      });
    },
    addData(d) {
      const time = DateTime.fromFormat(this.time, "HH:mm");
      const date = DateTime.fromISO(d).set({
        hour: time.hour,
        minute: time.minute,
      });
      this.dates = [
        ...this.dates,
        {
          id: +new Date(),
          from: date,
        },
      ];
      this.changeEvent();
    },
    removeDate(id) {
      console.log(id);
      this.dates = this.dates.filter((d) => d.id !== id);
      this.changeEvent();
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
