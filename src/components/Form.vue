<template>
  <div id="sendform">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-info">
          <div class="panel-heading">Clothes Checkout</div>
          <div class="panel-body">
            <div class="form-group">
              <div class="col-md-12">
                <h4><strong>Enter Your Information</strong></h4>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <strong>First Name:</strong>
                <input v-model.trim="order.firstName" class="form-control" />
              </div>
              <div class="col-md-6">
                <strong>Last Name:</strong>
                <input v-model.trim="order.lastName" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>Address:</strong></div>
              <div class="col-md-12">
                <input v-model.trim="order.address" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>City:</strong></div>
              <div class="col-md-12">
                <input v-model.trim="order.city" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-2">
                <strong>Region:</strong>
                <select v-model="order.state" class="form-control">
                  <option disabled value="">Region</option>
                  <option v-for="(state, key) in states" v-bind:value="state">
                  {{key}}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <strong>Zip / Postal Code:</strong>
                <input v-model.number="order.zip"
                   class="form-control"
                   type="number"/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input type="checkbox"
                       id="gift" value="true"
                                 v-bind:true-value="order.sendGift"
                                 v-bind:false-value="order.dontSendGift"
                                 v-model="order.gift">
                <label for="gift">Ship As Gift?</label>
              </div>
            </div><!-- end of form-group -->
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input type="radio"
                       id="home"
                       v-bind:value="order.home"
                       v-model="order.method">
                <label for="home">Home</label>
                <input type="radio"
                       id="business"
                       v-bind:value="order.business"
                       v-model="order.method">
                <label for="business">Business</label>
              </div>
            </div><!-- end of form-group-->
            <div class="form-group">
              <div class="col-md-6">
                <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">Place Order</button>
              </div><!-- end of col-md-6-->
            </div><!-- end of form-group-->
            <div class="col-md-12 verify">
              <pre>
                        First Name: {{order.firstName}}
                        Last Name: {{order.lastName}}
                        Address: {{order.address}}
                        City: {{order.city}}
                        Zip: {{order.zip}}
                        Region: {{order.state}}
                        Method: {{order.method}}
                        Gift: {{order.gift}}
              </pre>
            </div><!-- end of col-md-12 verify-->
          </div><!--end of panel-body-->
        </div><!--end of panel panel-info-->


      </div><!--end of col-md-10 col-md-offset-1-->
    </div><!--end of row-->
  </div>
</template>
<script>

export default {
  name: 'Form',
  props: ['cartItemCount'],
  data () {
    return {
      states: {
        KV: 'Kiev',
        KH: 'Kharkiv',
        LV: 'Lviv',
        ZP: 'Zaporizhiya',
        DN: 'Dnipro'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: 'Home Address',
        business: 'Business Address',
        home: 'Home Address',
        gift:'',
        sendGift: 'Send As A Gift',
        dontSendGift: 'Do Not Send As A Gift'
      }

    }
  },
  methods: {
    submitForm() {
      alert('Submitted');
      this.$store.dispatch('initCart');
    }
  }
}
</script>
<style scoped>
  #sendform {
    margin-top: 90px;
  }
</style>
