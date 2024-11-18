<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: false,
    default: null,
  },
  href: {
    type: String,
    required: false,
    default: null,
  },
  target: {
    type: String,
    required: false,
    default: '_self',
  },
  customClass: {
    type: String,
    required: false,
    default: '',
  },
  variant: {
    type: String as PropType<
      'primary' | 'secondary' | 'red' | 'white' | 'outline-white' | 'text-white' | 'icon-white' | 'text-green' | 'text-red' | 'text-gray' | 'text-blue' | 'outline-blue' | 'outline-gray'
    >,
    required: false,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<'button' | 'submit'>,
    default: 'button',
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <NuxtLink
    v-if="to"
    class="btn"
    :class="`btn-${variant} ${customClass} ${disabled ? 'disabled' : ''}`"
    :disabled="disabled"
    :to="to"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    class="btn"
    :class="`btn-${variant} ${customClass} ${disabled ? 'disabled' : ''}`"
    :disabled="disabled"
    :href="href"
    :target="target"
  >
    <slot />
  </a>
  <button
    v-else-if="type === 'submit'"
    class="btn"
    type="submit"
    :class="`btn-${variant} ${customClass} ${disabled ? 'disabled' : ''}`"
    :disabled="disabled"
  >
    <slot />
  </button>
  <button
    v-else
    class="btn"
    type="button"
    :class="`btn-${variant} ${customClass} ${disabled ? 'disabled' : ''}`"
    :disabled="disabled"
    @click.prevent="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  padding: 12px 30px;
  line-height: 26px;
  text-transform: capitalize;
  letter-spacing: 1px;

  // :deep(span) {
  //   margin-top: 4px;
  // }

  &.btn-lg {
    padding: 6px 34px;
  }

  &.btn-primary {
    color: #fff;
    // background-color: color(primary);

    &:hover {
      background-color: #1a377c;
      border-color: #1a377c;
    }

    &:focus {
      color: #1c48ad;
      background-color: #20629433;
    }
  }

  &.btn-secondary {
    color: #1c48ad;
    background-color: #E0F0FE;
    border-color: #E0F0FE;

    &:hover {
      color: #E0F0FE;
      background-color: #1c48ad;
      border-color: #1c48ad;
    }
  }

  &.btn-red {
    color: #fff;
    background-color: #ff5d4f;

    &:hover {
      background-color: #db393a;
    }
  }

  // &.btn-white {
  //   color: color(green);
  //   background-color: #fff;

  //   &:hover {
  //     background-color: colorMod(white, -20%);
  //   }
  // }

  &.btn-outline-white {
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;

    &:hover {
      color: #1c48ad;
      background-color: #fff;
    }
  }

  &.btn-text-white {
    color: #fff;
    background-color: transparent;

    &:hover {
      color: #1c48ad;
      // background-color: #fff;
    }
  }

  // &.btn-text-green {
  //   border: 0;
  //   color: color(green);
  //   background-color: unset;
  //   padding: 0;
  //   text-transform: capitalize;
  //   text-decoration: underline;
  //   font-size: 18px;

  //   &:hover {
  //     color: color(green, hovered);
  //   }
  // }

  &.btn-outline-blue {
    color: #1c48ad;
    background-color: transparent;
    border: 1px solid #0174BE;

    &:hover {
      color: #fff;
      background-color: #1c48ad;
    }
  }

  &.btn-text-blue {
    border: 0;
    color: #1c48ad;
    background-color: unset;
    padding: 0;
    text-transform: capitalize;
    text-decoration: underline;
    font-size: 18px;

    &:hover {
      color: #1a377c;
    }
  }

  &.btn-text-red {
    border: 0;
    color: #ff5d4f;
    background-color: unset;
    padding: 10px;
    text-transform: capitalize;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      color: #db393a;
    }
  }

  &.btn-outline-gray {
    color: #6c6c6c;
    background-color: transparent;
    border: 1px solid #6c6c6c;
    border-radius: 50%;
    padding: 10px 20px;
    &:hover {
      opacity: .8;
    }
  }

  &.btn-text-gray {
    border: 0;
    color: #6c6c6c;
    background-color: unset;
    padding: 10px;
    text-transform: capitalize;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      color: #6c6c6c;
      text-decoration: underline;
    }
  }

  // &.btn-icon-white {
  //   color: white;
  //   padding: 0;
  //   margin: 0;

  //   &:hover {
  //     color: color(green,  hovered);
  //   }
  // }
}
</style>
