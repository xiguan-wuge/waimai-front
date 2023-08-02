import { ref, computed, watch } from "vue";
import useUserStore from '../store/cart'

let store

function handleStepper(food, count) {
  store?.changeCount(food, count)
}

function clearCart() {
  store.clearCartLsit()
}

export const selectedCount = 'selectedCount'
export function changeCartCount(target: Object, count:number) {
  target[selectedCount] = count
}

export function useCartListHook() {
  store = useUserStore()
  const cartList = computed(() => store.cartList)
  const currentFoodKey = computed(() => store.currentFoodKey)
  const currentFoodCount = computed(() => store.currentFoodCount)  

  return {
    store,
    cartList,
    currentFoodKey,
    currentFoodCount,
    handleStepper,
    clearCart
  }
}


