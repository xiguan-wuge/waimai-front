import { defineStore } from 'pinia'

const useUserStore = defineStore('Cart', {
  state: () => {
    return {
      cartList: [],
      currentFoodKey: '', // 当前修改项的key
      currentFoodCount: 0,
    }
  },
  actions: {
    refreshCurKey() {
      this.currentFoodKey = ''
    },
    setCartList(list: []) {
      this.currentFoodKey = 'all'
      this.cartList = list
    },
    clearCartLsit() {
      this.cartList = []
    },
    changeCount(food:Object, count:number) {
      // console.log('changeCount', food, count);
      this.currentFoodKey = food.key
      this.currentFoodCount = count
      const index = this.cartList.findIndex(item => item.key === food.key)
      if(index > -1) {
        if(count) {
          this.cartList[index].selectedCount = count
        } else {
          this.cartList.splice(index, 1)
        }
      } else {
        this.cartList.push({
          ...food,
          selectedCount: count
        })
      }
    }
  }
})

export default useUserStore