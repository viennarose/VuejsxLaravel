<template>
<div>
      <br>
      <div class="w3-container ">
          <br><br>
          <div class="w3-col m3 w3-card w3-border w3-round-xxlarge" style="padding: 8px">
              <h4 class="w3-center">Add Order</h4>
              <div>
                  <label for="customerName">Customer Name</label>
                  <input type="text" v-model="order.customerName" class="w3-input w3-border">
              </div>
              <div>
                  <label for="contact">Contact</label>
                  <input type="text" v-model="order.contact" class="w3-input w3-border">
              </div>
              <div>
                  <label for="item">Item</label>
                  <input type="text" v-model="order.item" class="w3-input w3-border">
              </div>
              <div>
                  <label for="quantity">Quantity</label>
                  <input type="number" v-model="order.quantity" class="w3-input w3-border">
              </div>
              <div style="padding-bottom: 18px">
                  <label for="price">Price</label>
                  <input type="number" v-model="order.price" class="w3-input w3-border">
              </div>
              <button class="w3-button w3-blue w3-hover-black" @click="submitOrder">Submit Order</button>
          </div>
          <div class="w3-col m9" style="padding-left: 8px">
              <h3 class="w3-center">List of Orders</h3>
              <table class="w3-table w3-striped w3-bordered">
                  <tr class="w3-black">
                      <th>Customer Name</th>
                        <th>Contact</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                  </tr>
                  <tr v-for="ordr in orders" :key="ordr.id" class="w3-hover-blue" style="cursor:pointer" @click="openOrder(ordr.id)">
                      <td style="text-transform: capitalize">{{ordr.customerName}}</td>
                        <td>{{ordr.contact}}</td>
                        <td>{{ordr.item}}</td>
                        <td>{{ordr.quantity}}</td>
                        <td>{{ordr.price}}</td>
                        <td>{{(ordr.quantity*ordr.price).toFixed(2)}}</td>
                  </tr>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [],
            order: {
                customerName:"",
                contact:"",
                item:"",
                quantity: 0,
                price: 0,
                total: 0
            }
        }
    },
    methods: {
         getAllOrders() {
            fetch('http://127.0.0.1:8000/api/orders')
            .then(res=>res.json())
            .then(data=>this.orders = data)
            .catch(err=>console.log(err))
        },
        openOrder(orderId) {
            this.$router.push({
                name: 'view-order',
                params: {
                    id: orderId
                }
            })
        },
        submitOrder(){
            fetch('http://localhost:8000/api/orders',{
                method: 'post',
                headers:{
                    "Content-Type":"application/json"  
                },
                credentials: 'same-origin',
                body: JSON.stringify(this.order)
            })
            .then(res=>res.json())
            .then(data=>{
                alert(data.customerName + " has been successfully added.")
                this.orders.unshift(data)
                this.order = {}
            })
            .catch(err=>console.log(err))
        }
    },
    mounted() {
        this.getAllOrders()
    }

}
</script>

<style>

</style>