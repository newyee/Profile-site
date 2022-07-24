import { provide, reactive } from '@vue/composition-api'
import state from './state'
import { INJECT_KEY } from './constants'

export { setBreadcrumbs } from './actions'
export { useBreadcrumbs } from './getters'

export default () => {
  console.log('index.js呼び出し')
  console.log('state', state)
  const reactiveState = reactive(state)
  console.log('reactiveState', reactiveState)
  console.log('INJECT_KEY', INJECT_KEY)
  provide(INJECT_KEY, reactiveState)
}
