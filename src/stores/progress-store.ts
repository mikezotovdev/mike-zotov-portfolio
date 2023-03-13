import { defineStore } from 'pinia'

interface ProgressState {
  isLoading: boolean;
  onEndHandler: (() => void) | null;
}

export const useProgressStore = defineStore('progress', {
  state: (): ProgressState => ({
    isLoading: false,
    onEndHandler: null
  }),
  actions: {
    initProgress (onEndHandler: () => void) {
      this.onEndHandler = onEndHandler
    },
    start () {
      this.isLoading = true
    },
    end () {
      if (this.onEndHandler) {
        this.onEndHandler()

        return
      }

      this.isLoading = false
    }
  }
})
