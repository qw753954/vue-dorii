<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">

        <div class="modal-header bg-primary">
          <h5 class="modal-title text-white" id="exampleModalLabel">
            {{ isNew ? '新增優惠券' : '編輯優惠券' }}
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
          <div class="mb-3">
            <label for="title" class="form-label">標題<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入標題"
              v-model.trim="coupon.title"
            >
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">詳述<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="content"
              placeholder="請輸入詳述"
              v-model.trim="coupon.content"
            >
          </div>
          <div class="mb-3">
            <label for="code" class="form-label">優惠碼<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="code"
              placeholder="請輸入優惠碼"
              v-model.trim="coupon.code"
            >
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">到期日<span class="text-danger">*</span></label>
            <input
              type="date"
              class="form-control"
              id="date"
              v-model="dueDate"
            >
          </div>
          <div class="mb-3">
            <label for="percent" class="form-label">
              折扣百分比<span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control"
              id="percent"
              placeholder="請輸入百分比"
              min="0"
              max="99"
              v-model.number="coupon.percent"
            >
          </div>
        </div>

        <div class="modal-footer">
          <div class="form-check me-auto" v-if="isNew">
            <input
              class="form-check-input"
              type="checkbox"
              id="is_enabled"
              :true-value="1"
              :false-value="0"
              v-model="coupon.is_enabled"
            >
            <label
              for="is_enabled"
              class="form-check-label align-middle"
            >
              是否啟用
            </label>
          </div>
          <button type="button" class="btn btn-outline-gray btn-sm" data-bs-dismiss="modal">
            取消
          </button>

          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="trigger"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins';

export default {
  data() {
    return {
      modal: '',
      coupon: {},
      dueDate: '',
    };
  },
  mixins: [modalMixins],
  props: {
    isNew: Boolean,
    tempCoupon: Object,
  },
  emits: {
    'emit-update': (isNew, obj) => {
      if (typeof isNew !== 'boolean') {
        console.warn('emit-update 事件的第一個參數型別需為 boolean');
      } else if (typeof obj !== 'object') {
        console.warn('emit-update 事件的第二個參數型別需為 object');
      }
      return typeof isNew !== 'boolean' && obj !== 'object';
    },
  },
  methods: {
    trigger() {
      let isPassValidate = true;

      if (!this.coupon.title || !this.coupon.content || !this.coupon.due_date || !this.coupon.code
      || this.coupon.percent === '') {
        const data = {
          success: false,
          message: '所有欄位都要填寫',
        };
        this.$httpMsgState(data, this.isNew ? '新增' : '更新');

        isPassValidate = false;
      }

      if (this.coupon.percent > 99) {
        const data = {
          success: false,
          message: '折扣百分比不能高於 99',
        };
        this.$httpMsgState(data, this.isNew ? '新增' : '更新');

        isPassValidate = false;
      }

      if (this.coupon.percent < 0) {
        const data = {
          success: false,
          message: '折扣百分比不能低於 0',
        };
        this.$httpMsgState(data, this.isNew ? '新增' : '更新');

        isPassValidate = false;
      }

      if (isPassValidate) {
        this.$emit('emit-update', this.isNew, this.coupon);
      }
    },
  },
  watch: {
    tempCoupon() {
      this.coupon = { ...this.tempCoupon };

      if (this.isNew) {
        this.coupon.is_enabled = 0;
      }

      // 後端收到的是 [到期日的隔天]（因為到期當天還是可順利套用 coupon）
      // 但 Modal 是要呈現 [到期當天]，所以要再 "扣一天"
      const beforeOneDay = this.coupon.due_date * 1000 - 86400;
      // 轉換成 type="date" 會吃的格式  ex: 2021-06-19
      this.dueDate = new Date(beforeOneDay).toISOString().split('T', 1).join();
    },
    dueDate() {
      // 後端是收 Timestamp
      // [到期日當天] 也需可以套用優惠券，所以送給後端時要再 "加一天"
      this.coupon.due_date = Math.floor(new Date(this.dueDate) / 1000 + 86400);
    },
  },
};
</script>
