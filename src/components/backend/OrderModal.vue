<template>
  <div class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-white" id="exampleModalLabel">
            訂單明細
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
          </button>
        </div>
        <div class="modal-body">
          <div class="accordion mb-5" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  type="button"
                  class="accordion-button fw-bold collapsed"
                  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                  aria-expanded="false" aria-controls="flush-collapseOne"
                >
                  <i class="fas fa-align-left pe-3"></i> 選購商品
                </button>
              </h2>
              <div
                id="flush-collapseOne" class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div class="d-flex justify-content-end mb-2">
                    <button
                      type="button"
                      class="small link-gray"
                      :class="{ 'text-secondary': isEditing.productInfo}"
                      @click="isEditing.productInfo = !isEditing.productInfo"
                    >
                      <i class="fas fa-edit me-1"></i>
                      <template v-if="isEditing.productInfo">完成</template>
                      <template v-else>點我編輯</template>
                    </button>
                  </div>
                  <table class="table align-middle">
                    <tbody>
                      <template v-for="(item, key) in order.products" :key="key">
                        <tr v-for="specItem in item.option" :key="specItem.spec">
                          <td style="width: 20px">◾</td>
                          <td>{{ item.product.title }}
                            <span class="small badge bg-secondary ms-1" v-if="specItem.spec">
                              {{ specItem.spec }}
                            </span>
                          </td>
                          <td style="width: 120px" class="text-end">
                            ${{ $toCurrency(item.product.price) }}
                          </td>
                          <td style="width: 120px" class="text-end">
                            <div class="d-flex align-items-center">
                              <input
                                type="number"
                                class="py-1"
                                :class="{
                                  'form-control-plaintext text-end': !isEditing.productInfo,
                                  'form-control me-1': isEditing.productInfo,
                                }"
                                min="1"
                                :readonly="!isEditing.productInfo"
                                v-model="specItem.qty"
                                @change="validate(item.qty, key)"
                              >
                              {{ item.product.unit }}
                            </div>
                          </td>
                        </tr>
                      </template>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-0 justify-content-between">
            <!-- 買家資料 -->
            <div class="col-lg-5 mb-3 mb-lg-0">
              <h3 class="fs-6 text-center rounded-pill bg-light py-2 px-3 mb-3">
                買家資料
                <button
                  type="button"
                  class="small link-gray"
                  :class="{ 'text-secondary': isEditing.customerInfo}"
                  @click="isEditing.customerInfo = !isEditing.customerInfo"
                >
                  <i class="fas fa-edit"></i>
                </button>
              </h3>
              <table class="table align-middle">
                <tbody>
                  <tr>
                    <th><label for="name">姓名</label></th>
                    <td width="70%">
                      <input
                        type="text"
                        id="name"
                        class="py-1"
                        :class="{ 'form-control-plaintext': !isEditing.customerInfo,
                                  'form-control': isEditing.customerInfo }"
                        v-model="order.user.name"
                        :readonly="!isEditing.customerInfo"
                      >
                    </td>
                  </tr>
                  <tr>
                    <th><label for="email">E-mail</label></th>
                    <td width="70%">
                      <input
                        type="email"
                        id="email"
                        class="py-1"
                        :class="{ 'form-control-plaintext': !isEditing.customerInfo,
                                  'form-control': isEditing.customerInfo }"
                        v-model="order.user.email"
                        :readonly="!isEditing.customerInfo"
                      >
                    </td>
                  </tr>
                  <tr>
                    <th><label for="email">手機</label></th>
                    <td width="70%">
                      <input
                        type="tel"
                        id="tel"
                        class="py-1"
                        :class="{ 'form-control-plaintext': !isEditing.customerInfo,
                                  'form-control': isEditing.customerInfo }"
                        v-model="order.user.tel"
                        :readonly="!isEditing.customerInfo"
                      >
                    </td>
                  </tr>
                  <tr>
                    <th><label for="address">地址</label></th>
                    <td width="70%">
                      <input
                        type="text"
                        id="address"
                        class="py-1"
                        :class="{ 'form-control-plaintext': !isEditing.customerInfo,
                                  'form-control': isEditing.customerInfo }"
                        v-model="order.user.address"
                        :readonly="!isEditing.customerInfo"
                      >
                    </td>
                  </tr>
                  <tr>
                    <th class="border-bottom-0 py-3">備註</th>
                    <td width="70%" class="border-bottom-0 py-3">
                      {{ order.message }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 訂單細節 -->
            <div class="col-lg-6">
              <h3 class="fs-6 text-center rounded-pill bg-light py-2 px-3 mb-3">
                詳細資料
                <button
                  type="button"
                  class="small link-gray"
                  :class="{ 'text-secondary': isEditing.detailInfo}"
                  @click="isEditing.detailInfo = !isEditing.detailInfo"
                >
                  <i class="fas fa-edit"></i>
                </button>
              </h3>
              <table class="table align-middle">
                <tbody>
                  <tr>
                    <th>訂單編號</th>
                    <td width="70%">
                      <span class="d-block user-select-all py-1">
                        {{ order.id }}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>下單日期</th>
                    <td width="70%">
                      <span class="d-block py-1">
                        {{ $toLocalDate(order.create_at) }}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td width="70%">
                      <span class="d-block py-1">
                        {{ order.paid_date ? $toLocalDate(order.paid_date) : '-' }}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款方式</th>
                    <td width="70%">
                      <select
                        id="payment"
                        class="py-1"
                        :class="{ 'form-control-plaintext': !isEditing.detailInfo,
                                  'form-select': isEditing.detailInfo }"
                        :disabled="!isEditing.detailInfo"
                        v-model="order.user.payment_method"
                      >
                        <option value="信用卡">信用卡</option>
                        <option value="ATM 轉帳">ATM 轉帳</option>
                        <option value="Apple pay">Apple pay</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <div class="form-check py-1" :class="{ 'ps-0': !isEditing.detailInfo }">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="isPaid"
                          value=""
                          v-model="order.is_paid"
                          v-if="isEditing.detailInfo"
                        >
                        <label
                          for="isPaid"
                          class="form-check-label align-middle fw-bold"
                          :class="{ 'text-secondary': order.is_paid, 'text-muted': !order.is_paid }"
                        >
                          {{ order.is_paid ? '已付款' : '未付款' }}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th class="border-bottom-0">總金額</th>
                    <td class="border-bottom-0" v-if="order.products">
                      <span class="d-block py-1" v-if="total > 1000">
                        ${{ $toCurrency(total) }}
                      </span>
                      <span class="d-block py-1" v-else>
                        ${{ $toCurrency(total + 120) }}（含運）
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-gray btn-sm"
            data-bs-dismiss="modal"
          >
            取消
          </button>

          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="trigger"
          >
            確認修改
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins';

import { $put } from '@/assets/javascript/fetchAPI';

export default {
  data() {
    return {
      modal: '',
      order: {
        user: {},
      },
      isEditing: {
        productInfo: false,
        customerInfo: false,
        detailInfo: false,
      },
    };
  },
  mixins: [modalMixins],
  props: {
    tempOrder: Object,
  },
  emits: {
    'emit-change': (item) => {
      if (typeof item !== 'boolean') {
        console.warn('emit-change 事件的參數型別需為 boolean');
      }
      return typeof item === 'boolean';
    },
    'emit-get': () => true,
  },
  methods: {
    async trigger() {
      this.$emit('emit-change', true);
      this.order.paid_date = this.order.is_paid ? Math.floor(Date.now() / 1000) : '';

      try {
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${this.order.id}`;
        const res = await $put(url, { data: this.order });
        const { success } = res.data;
        if (success) {
          this.$emit('emit-get');
          this.hideModal();
        }
        this.$httpMsgState(res.data, '更新');
      } catch (err) {
        this.$swal.fire({ icon: 'error', title: err });
      }
    },
    validate(qty, index) {
      if (!qty || qty < 1) {
        const data = {
          success: false,
          message: '修改數目不能小於 1',
        };
        this.$httpMsgState(data, '修改');
        this.order.products[index].qty = 1;
      }
    },
  },
  watch: {
    tempOrder() {
      this.order = { ...this.tempOrder };
      this.isEditing = {
        productInfo: false,
        customerInfo: false,
        detailInfo: false,
      };
    },
  },
  computed: {
    total() {
      // 目的：編輯訂單中的產品數量，也會同步更新總金額（若沒自行計算則總金額會維持由後端回傳的原金額）

      // 1. 整理出 order.products 第一層屬性的陣列，存進 objEntries
      // 結構為：[['訂單商品1 ID', {訂單商品1 資料}], ['訂單商品2 ID', {訂單商品2 資料}] ... ]
      const objEntries = Object.entries(this.order.products);

      // 2. 撈出 objEntries 每筆資料中 第二個索引的商品數量，並與單價相乘後並加總
      let total = 0;
      let discount = 100;
      objEntries.forEach((item) => {
        if (item[1].coupon) {
          discount = item[1].coupon.percent;
        }
        item[1].option.forEach((spec) => {
          total += item[1].product.price * spec.qty;
        });
      });

      total *= discount / 100; // 打折
      return Math.floor(total);
    },
  },
};
</script>
