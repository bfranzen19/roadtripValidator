// $(document).ready(function() {
//   console.log('js is linked, yo')
//
// }) /* -=-=-=-=-=- end of jQ doc ready -=-=-=-=-=- */

var app = new Vue({
  el: '#app',
  data: {
    // message: 'yo, yo, yiggity, yo!',
      tent: {
        cost:   100,
        itemCost: 0,
        weight: 5,
        itemWeight: 0,
        count: 0,
      },
      hammock: {
        cost:   50,
        itemCost: 0,
        weight: 1,
        itemWeight: 0,
        count: 0,
      },
      blanket: {
        cost:   '25',
        itemCost: 0,
        weight: '2',
        itemWeight: 0,
        count: 0,
      },
      water: {
        cost:   '5',
        itemCost: 0,
        weight: '5',
        itemWeight: 0,
        count: 0,
      },
      food: {
        cost:   '25',
        itemCost: 0,
        weight: '5',
        itemWeight: 0,
        count: 0,
      },

  }, /* end of data object */

  methods: {
    subtractItem: function(item) {
      if(this[item].count > 0) {
        this[item].count --
        this[item].itemCost = this[item].cost * this[item].count
        this[item].itemWeight = this[item].itemWeight- this[item].weight
      }
    },

    addItem: function(item) {
      this[item].count ++
      this[item].itemCost = this[item].cost * this[item].count
      this[item].itemWeight = this[item].count * this[item].weight
    },

  }, /* end of methods object */

  computed: {
    totalCost: function() {
      let x = this.tent.itemCost + this.hammock.itemCost + this.blanket.itemCost + this.water.itemCost + this.food.itemCost
      return x
    },

    totalWeight: function() {
      let y = this.tent.itemWeight + this.hammock.itemWeight + this.blanket.itemWeight + this.water.itemWeight + this.food.itemWeight
      return y
    },

    bgColor: function(){
      if(this.totalCost > 199 || this.totalWeight > 199) {
        return {backgroundColor:'red'}
      } else {
        return {backgroundColor:'white'}
      }
    },
  }, /* end of computed */







}) /* -=-=-=-=-=- end of vue -=-=-=-=-=- */
