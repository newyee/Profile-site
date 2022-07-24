import { inject, computed } from '@vue/composition-api'
import { INJECT_KEY } from './constants'

export const useBreadcrumbs = () => {
  const state = inject(INJECT_KEY)

  console.log('aaaaa', state)
  console.log('bbbb', INJECT_KEY)
  return computed(() => state.breadcrumbs)
}
