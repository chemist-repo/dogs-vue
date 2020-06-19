<template>
  <div
    v-outside="onCLose"
    class="ui-select"
  >
    <a
      @click.prevent="onClickSelect"
      href="#"
      :class="[
        'ui-select-current',
        {
          active
        }
      ]"
    >
      <span class="ui-select-value">{{ value }}</span>
      <span class="ui-select-arrow">
        <slot name="arrow" />
      </span>
    </a>
    <transition name="fade">
      <div
        v-if="active"
        class="ui-select-wrap"
      >
        <a
          v-for="(option, i) in filteredOptions"
          @click.prevent="onClickOption(option)"
          :key="`option-${i}`"
          href="#"
          class="ui-select-option"
        >{{ option }}</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ui-select',
  props: {
    value: {
      type: String,
      default: 'Выберите значение'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    active: false
  }),
  computed: {
    filteredOptions () {
      return this.options.filter(option => option !== this.value)
    }
  },
  methods: {
    onClickOption (option) {
      this.active = false
      this.$emit('input', option)
      this.$emit('toggle', this.active)
    },
    onClickSelect () {
      this.active = !this.active
      this.$emit('toggle', this.active)
    },
    onCLose () {
      this.active = false
      this.$emit('toggle', this.active)
    }
  }
}
</script>
