<template>
  <div>
      <h1 style="padding:0; margin:0; border-bottom: 1px solid #aaa; text-transform:capitalize">{{order.customerName}}</h1>
      <div class="w3-panel w3-sand w3-leftbar">
          <p>{{order.item}} | P{{order.price}} | {{order.quantity}} pieces</p>
      </div>
      <p> Amount to Pay :
          P{{order.price * order.quantity}}
      </p>
      <div>
          <button class="w3-button w3-brown w3-hover-deep-orange" @click="toggleEditor">
              {{editor.label}}
          </button>
          &nbsp;
          <button class="w3-button w3-pink w3-hover-re" @click="deleteOrder">
              Delete Order
          </button>
          <div v-if="editor.show" style="width: 500px; padding:18px" class="w3-card w3-large w3-padding-16" >
            <h3>Edit Order</h3>
            <div class="field">
                <label for="customerName"> Customer Name</label>
                <input type="text" v-model="order.customerName" class="w3-input w3-border">
            </div>
             <div class="field">
                <label for="contact">Contact</label>
                <input type="text" v-model="order.contact" class="w3-input w3-border">
            </div>
             <div class="field">
                <label for="item"> Item</label>
                <input type="text" v-model="order.item" class="w3-input w3-border">
            </div>
             <div class="field">
                <label for="quantity">Quantity</label>
                <input type="number" v-model="order.quantity" class="w3-input w3-border">
            </div>
             <div class="field">
                <label for="price"> Price</label>
                <input type="number" v-model="order.price" class="w3-input w3-border">
            </div>
            <button class="w3-button w3-brown w3-hover-deep-orange" @click="saveOrder">
                Save Changes
            </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            order: {},
            editor: {
                show:false,
                label: "Edit Order"
            }
        }
    },
    methods: {
        toggleEditor(){
            if(this.editor.show){
                this.editor = {show:false, label: "Edit Order"}
            }else {
                this.editor = {show:true, label: "Close Editor"}
            }
        },
        saveOrder(){
            fetch('http://localhost:8000/api/orders/' + this.order.id,{
                method: 'put',
                headers: {
                    'Content-Type' : "application/json"
                },
                credentials: 'same-origin',
                body: JSON.stringify(this.order)
            })
            .then(res=>res.json())
            .then(data=>{
                alert(data.customerName + " has been updated.")
                this.$router.push({
                    name: 'all-orders'
                })
            })
            .catch(err => console.log(err))
        },
        deleteOrder(){
            fetch('http://localhost:8000/api/orders/' + this.order.id,{
                method: 'delete'
            })
            .then(res=>res.json())
            .then(data=>{
                alert(data.message)
                this.$router.push({
                    name: 'all-orders'
                })
            })
            .catch(err=>console.log(err))
        }   
    },
    mounted() {
        fetch('http://localhost:8000/api/orders/' + this.id)
        .then(res=>res.json())
        .then(data=>this.order=data)
    }
}
</script>

<style scoped>
.field{

}
</style>