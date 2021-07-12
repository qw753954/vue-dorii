<template>
  <Loading :active="isLoading" :z-index="1061" loader="bars"></Loading>
  <div class="row">
    <div class="col-md-11 mx-auto">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h3 class="fs-4 mb-0">訂單管理</h3>
        <button
          type="button" class="btn btn-secondary text-white"
          @click="openModal('delete', orders, true)"
        >
          刪除所有訂單
        </button>
      </div>
      <div class="card rounded-4 shadow">
        <div class="card-body">
          <div class="order-table table-responsive">
            <table class="table table-borderless">
              <thead>
                <tr class="bg-white sticky-top">
                  <th width="250">購買商品</th>
                  <th width="120">應付金額</th>
                  <th width="120">付款方式</th>
                  <th width="120">狀態</th>
                  <th width="150"></th>
                </tr>
              </thead>
              <tbody>
                <template v-for="order in orders" :key="order.id">
                  <tr>
                    <td class="pt-5" colspan="5">
                      <div class="d-flex justify-content-between bg-light rounded-2 border p-2">
                        <p class="mb-0">
                          <i class="fas fa-user-circle"></i> {{ order.user.name }}
                        </p>
                        <small>訂單編號 <span class="user-select-all">{{ order.id }}</span></small>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-3">
                      <p
                      class="d-flex justify-content-between mb-2 pe-4"
                      v-for="(item, key) in order.products"
                      :key="key"
                      >
                        {{ item.product.title }}
                        <span class="text-primary">x{{ item.qty }}</span>
                      </p>
                    </td>
                    <td>${{ $toCurrency(Math.floor(order.total)) }}</td>
                    <td>{{ order.user.payment_method }}</td>
                    <td class="text-secondary" v-if="order.is_paid">
                      <i class="fas fa-check-circle"></i> 已付款
                    </td>
                    <td class="text-muted" v-else>
                      <i class="fas fa-times-circle"></i> 未付款
                    </td>
                    <td class="text-end pe-3">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="operate-btn btn btn-outline-secondary btn-sm"
                          @click="openModal('detail', order)"
                        >
                          <i class="fas fa-eye fa-fw"></i>
                        </button>
                        <button
                          type="button"
                          class="operate-btn btn btn-outline-danger btn-sm"
                          @click="openModal('delete', order, false)"
                        >
                          <i class="fas fa-trash-alt fa-fw"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <Pagination
            :pagination="pagination"
            @emit-page="getOrders"
            v-if="orders.length > 0"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>

  <OrderModal
    ref="orderModal"
    :temp-order="tempOrder"
    @emit-change="triggerLoading"
    @emit-get="getOrders"
  ></OrderModal>

  <DelModal
    ref="delModal"
    topic="order"
    :is-all="isAll"
    :temp-data="tempOrder"
    @emit-change="triggerLoading"
    @emit-get="getOrders"
  ></DelModal>

</template>

<script>
import OrderModal from '@/components/backend/OrderModal.vue';
import DelModal from '@/components/backend/DelModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: '訂單管理',
  inheritAttrs: false,
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isAll: false,
      isLoading: true,
    };
  },
  components: {
    OrderModal,
    DelModal,
    Pagination,
  },
  emits: ['emit-change', 'emit-get', 'emit-page'],
  methods: {
    getOrders(page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.axios.get(url)
        .then((res) => {
          const { success, orders, pagination } = res.data;
          if (success) {
            this.orders = orders;
            this.pagination = pagination;
          }
          this.triggerLoading(false);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    openModal(type, item, isAll) {
      switch (type) {
        case 'detail':
          this.ok = true;
          this.tempOrder = JSON.parse(JSON.stringify(item));
          this.$refs.orderModal.openModal();
          break;
        case 'delete':
          this.isAll = isAll;
          if (!isAll) {
            this.tempOrder = { ...item };
          }
          this.$refs.delModal.openModal();
          break;
        default:
          break;
      }
    },
    triggerLoading(boolean) {
      this.isLoading = boolean;
    },
  },
  created() {
    this.getOrders();
  },
};
</script>