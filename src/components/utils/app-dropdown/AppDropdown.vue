<script setup lang="ts">
  import { computed, nextTick, reactive, ref } from 'vue'
  import { outsideClick } from '@/directives/outside-click'

  interface FallbackOption {
    id: string;
    text: string;
  }

  type NullableOption = unknown | null

  interface Props {
    modelValue: NullableOption;
    options: NonNullable<unknown>[];
    toValue?(option: NonNullable<unknown>): string;
    toId? (option: NonNullable<unknown>): string;
  }

  interface Emit {
    (e: 'update:modelValue', value: NonNullable<unknown>): void;
  }

  const props = withDefaults(
    defineProps<Props>(),
    {
      toValue: (option: FallbackOption): string => {
        return option.text
      },
      toId: (option: FallbackOption): string => {
        return option.id
      }
    }
  )

  const emit = defineEmits<Emit>()

  const state = reactive({
    isOpen: false,
    pointerOptionId: ''
  })

  const dropdownList = ref<HTMLElement | null>(null)

  const valueText = computed(() => {
    return props.modelValue
      ? props.toValue(props.modelValue)
      : 'no value'
  })

  const openDropdown = () => {
    state.isOpen = true

    if (props.modelValue) {
      setPointerOptionId(props.modelValue)
    }

    nextTick(() => {
      dropdownList.value?.focus()
    })
  }

  const closeDropdown = () => {
    state.isOpen = false
    resetPointerOptionId()
  }

  const isSelected = (option: NonNullable<unknown>) => {
    if (!props.modelValue) {
      return false
    }

    return props.toId(option) === props.toId(props.modelValue)
  }

  const isActive = (option: NonNullable<unknown>) => {
    return props.toId(option) === state.pointerOptionId
  }

  const selectOption = (option: NonNullable<unknown>) => {
    if (!isSelected(option)) {
      emit('update:modelValue', option)
    }

    closeDropdown()
  }

  const setPointerOptionId = (option: NonNullable<unknown>) => {
    state.pointerOptionId = props.toId(option)
  }

  const getCurrentPointerIndex = () => {
    return props.options.findIndex(option => {
      return props.toId(option) === state.pointerOptionId
    })
  }

  const setPointerOnNext = () => {
    const currentOptionIndex = getCurrentPointerIndex()

    if (currentOptionIndex >= props.options.length - 1) {
      return
    }

    setPointerOptionId(props.options[currentOptionIndex + 1])
  }

  const setPointerOnPrev = () => {
    const currentOptionIndex = getCurrentPointerIndex()

    if (currentOptionIndex <= 0) {
      return
    }

    setPointerOptionId(props.options[currentOptionIndex - 1])
  }

  const selectOptionFromPointer = () => {
    const currentOptionIndex = getCurrentPointerIndex()

    if (currentOptionIndex < 0 || currentOptionIndex >= props.options.length) {
      return
    }

    selectOption(props.options[currentOptionIndex])
  }

  const resetPointerOptionId = () => {
    state.pointerOptionId = ''
  }

  const vOutsideClick = outsideClick
</script>

<template>
  <div
    class="app-dropdown"
    v-outside-click="closeDropdown">
    <button
      class="app-dropdown-button button is-fold"
      type="button"
      @click="openDropdown">
      <slot name="value">
        {{ valueText }}
      </slot>
    </button>
    <Transition
      name="opacity-transition"
      mode="in-out">
      <ul
        v-if="state.isOpen"
        class="dropdown-list"
        ref="dropdownList"
        tabindex="0"
        @keydown.down.prevent="setPointerOnNext"
        @keydown.up.prevent="setPointerOnPrev"
        @keydown.enter.prevent="selectOptionFromPointer"
        @keydown.esc.prevent="closeDropdown"
        @blur="closeDropdown">
        <li
          class="dropdown-list-item"
          :class="{'is-selected': isSelected(option), 'is-active': isActive(option) }"
          v-for="option in props.options"
          :key="props.toId(option)"
          tabindex="0"
          @mouseenter="setPointerOptionId(option)"
          @mouseleave="resetPointerOptionId"
          @click="selectOption(option)">
          <slot
            name="list-item"
            :option="option">
            <span class="dropdown-list-item-text">
              {{ props.toValue(option) }}
            </span>
          </slot>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  .app-dropdown {
    position: relative;
    display: inline-flex;
    flex-flow: column;
  }

  .dropdown-list {
    position: absolute;
    top: calc(100% + #{fun.space(1)});
    max-height: 250px;
    display: flex;
    flex-flow: column;
    border-radius: 4px;
    overflow: hidden;
    @include mixins.font-inherit;
    @include mixins.shadow;

    .dropdown-list-item {
      padding: fun.space(2) fun.space(4);
      background-color: var(--color-white);
      transition: background-color 0.3s ease;

      &.is-selected {
        background-color: var(--color-gray-light);
      }

      &.is-active {
        cursor: pointer;
        background-color: var(--color-gray);
      }
    }
  }
</style>
