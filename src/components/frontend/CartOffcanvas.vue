<template>
  <div
    class="cart offcanvas offcanvas-end bg-light py-3 px-4"
    tabindex="-1"
    ref="offcanvas"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h4 id="offcanvasRightLabel" class="h5 text-primary text-spacing-m mb-0">
        購物車
      </h4>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body me-2" :class="{ 'd-flex': !carts.length }">
      <div
        class="text-priLight opacity-75 text-center m-auto"
        v-if="!carts.length"
      >
        <template v-if="loadingState.get">
          <i class="display-3 far fa-grin-wink"></i>
          <p class="fs-3 text-spacing-m">
            Wait A Second ♥
          </p>
        </template>

        <template v-else>
          <i class="display-3 fal fa-frown"></i>
          <p class="fs-3 text-spacing-m mb-4">Empty.</p>
          <router-link to="/products" class="btn btn-primary opacity-75" @click="hideOffcanvas">
            來去購物
          </router-link>
        </template>
      </div>

      <ul class="cart-main list-unstyled py-3" v-else>
        <template v-for="cart in carts" :key="cart.id">
          <li
            v-for="(specItem, index) in cart.option" :key="specItem.spec"
            class="border-bottom border-secondary d-flex justify-content-between py-5"
          >
            <div class="d-flex">
              <a href="#" @click.prevent="changePage('product', cart.product_id)">
                <img :src="cart.product.image" class="cart-img img-cover">
              </a>
              <div class="d-flex flex-column ms-4">
                <h4 class="fs-6">
                  {{ cart.product.title }}
                </h4>
                <span
                  class="text-primary border border-primary align-self-start px-1 mb-2"
                  style="font-size: 12px;"
                  v-if="specItem.spec"
                >
                  {{ specItem.spec }}
                </span>
                <p class="mb-auto">NT$ {{ $toCurrency(cart.product.price) }}</p>
                <div class="square-form-group">
                  <button
                    type="button"
                    class="square-btn reduce position-relative"
                    :class="{ disabled: specItem.qty <= 1 ||
                    loadingState.put === `${cart.id + specItem.spec}` }"
                    @click="updateCart(cart, index, specItem.qty - 1)"
                  ></button>
                  <input
                    type="number"
                    class="square-input"
                    :class="{ disabled: loadingState.put === `${cart.id + specItem.spec}` }"
                    v-model.number="specItem.qty"
                    @change="updateCart(cart, index, specItem.qty)"
                  >
                  <button
                    type="button"
                    class="square-btn add position-relative"
                    :class="{ disabled: loadingState.put === `${cart.id + specItem.spec}` }"
                    @click="updateCart(cart, index, specItem.qty + 1)"
                  ></button>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="delete btn text-gray align-self-center pe-0"
              @click.prevent="delCart(cart, cart.option, index)"
            >
              <i
                class="fas fa-spinner fa-pulse"
                v-if="loadingState.del === `${cart.id + specItem.spec}`"
              ></i>
              <i class="far fa-trash-alt" v-else></i>
            </button>
          </li>
        </template>
      </ul>
    </div>
    <div class="p-3" v-if="carts.length">
      <p class="d-flex justify-content-end align-items-center mb-3">
        總計
        <span class="fs-5 ms-2">NT$ {{ $toCurrency(total) }}</span>
      </p>
      <div class="d-md-flex w-100">
        <button
          type="button"
          class="btn btn-outline-gray w-100 w-md-35 py-3 me-md-2 mb-2 mb-md-0"
          :class="{ disabled: loadingState.del === 'delete carts' }"
          @click="delCarts"
        >
          <!-- 若只是單純 <template>清空</template> 會無法顯示文字 -->
          <template v-if="loadingState.del === 'delete carts'">
            <i class="fas fa-spinner fa-pulse me-2"></i>清空中
          </template>
          <template v-else>
            清空購物車
          </template>
        </button>
        <button
          type="button"
          class="cart-btn btn btn-primary w-100 w-md-65 py-3 ms-md-2"
          @click="changePage('checkout')"
        >
          去結帳
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import { $delete, $put } from '@/assets/javascript/fetchAPI';

import cartStore from '@/stores/cartStore';

export default {
  data() {
    return {
      loadingState: {
        get: '',
        put: '',
        del: '',
      },
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'initOffcanvas', 'openOffcanvas', 'hideOffcanvas']),
    delCarts() {
      this.$swal.fire({
        toast: false,
        icon: 'warning',
        title: '確定要清空購物車嗎？',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: '確定',
        customClass: {
          title: 'fs-5',
          confirmButton: 'py-2',
          cancelButton: 'py-2',
        },
        timer: false,
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.loadingState.del = 'delete carts';

          try {
            const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/carts`;
            const res = await $delete(url);
            const { success } = res.data;
            if (success) {
              this.loadingState.get = 'addING';
              await this.getCarts();
              this.loadingState = {};
              this.$swal.fire({ icon: 'success', title: '已清空購物車' });
            } else {
              this.loadingState.del = '';
            }
          } catch (err) {
            this.$swal.fire({ icon: 'error', title: err });
          }
        }
      });
    },
    async delCart(cart, itemOption, index) {
      // 假如 itemOption 的長度大於 1，表示此商品在購物車有其他規格，不能整筆刪除而是要更新
      if (itemOption.length > 1) {
        await this.updateCart(cart, index, itemOption.qty, 'delete');
        return;
      }

      this.loadingState.del = `${cart.id + cart.option[index].spec}`;

      try {
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${cart.id}`;
        const res = await $delete(url);
        const { success, message } = res.data;
        if (success) {
          this.loadingState.get = 'addING';
          await this.getCarts();
          this.loadingState = {};
          this.$swal.fire({ icon: 'success', title: message });
        } else {
          this.$swal.fire({ icon: 'error', title: message });
        }
        this.loadingState.del = '';
      } catch (err) {
        this.$swal.fire({ icon: 'error', title: err });
      }
    },
    async updateCart(cart, specIndex, specQty, from) {
      let tempQty = specQty;
      if (tempQty < 1) tempQty = 1;

      const option = [...cart.option]; // 要傳給後端的參數

      if (from === 'delete') {
        this.loadingState.del = `${cart.id + cart.option[specIndex].spec}`;
        // 刪除該項規格
        option.splice(specIndex, 1);
      } else {
        this.loadingState.put = `${cart.id + cart.option[specIndex].spec}`;
        // 修改該項規格的購買數量
        option[specIndex].qty = tempQty;
      }

      const qty = option.map((item) => item.qty).reduce((acc, cur) => acc + cur);

      try {
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${cart.id}`;
        const res = await $put(url, { data: { product_id: cart.product_id, qty, option } });
        const { success, message } = res.data;
        if (success) {
          this.loadingState.get = 'addING';
          await this.getCarts();
          this.loadingState = {};
          this.$swal.fire({ icon: 'success', title: from === 'delete' ? '已刪除' : message });
        } else {
          this.loadingState.put = '';
          this.$swal.fire({ icon: 'error', title: message });
        }
      } catch (err) {
        this.$swal.fire({ icon: 'error', title: err.message });
      }
    },
    changePage(target, id) {
      if (target === 'product') {
        this.$router.push(`/product/${id}`);
      } else if (target === 'checkout') {
        this.$router.push('/checkout');
      }
      this.hideOffcanvas();
    },
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'offcanvas']),
  },
  mounted() {
    this.initOffcanvas(this.$refs.offcanvas);
  },
};
</script>
