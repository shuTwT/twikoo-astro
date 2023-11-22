<template>
  <div class="tk-pagination">
    <div class="tk-pagination-options" v-if="!!pageCount">
      <div>
        <span>{{ t("PAGINATION_COUNT_PREFIX") }}</span>
        <span>{{ total }}</span>
        <span>{{ t("PAGINATION_COUNT_SUFFIX") }}</span>
      </div>
      <ElInput
        type="number"
        min="1"
        max="100"
        :value="userPageSize ? userPageSize : pageSize"
        @input="handleInputPageSize"
        @change="pageSizeChamge"
      />
      <span>{{ t("PAGINATION_PAGESIZE") }}</span>
    </div>
    <div class="tk-pagination-pagers">
      <div
        class="tk-pagination-pager"
        :class="{ __current: pager.page === currentPage }"
        v-for="pager in pagers"
        :key="pager.page"
        @click="currentChange(pager.page)"
      >
        {{ pager.title }}
      </div>
    </div>
    <div class="tk-pagination-options" v-if="!!pageCount">
      <span>{{ t("PAGINATION_GOTO_PREFIX") }}</span>
      <ElInput
        type="number"
        min="1"
        :max="pageCount"
        :value="userInput ? userInput : currentPage"
        @input="handleInput"
        @change="currentChange"
      />
      <span>{{ t("PAGINATION_GOTO_SUFFIX") }}</span>
    </div>
  </div>
</template>

<script setup>
import { ElInput } from "element-plus";
import { t } from "../utils";
import { computed, ref, watch } from "vue";

const props = defineProps({
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["current-change","page-size-change"]);

const currentPage = ref(1);
const userInput = ref(0);
const userPageSize = ref(0);
const pagers = ref([]);

const pageCount = computed(() => {
  return Math.ceil(props.total / props.pageSize);
});

function generatePager() {
  const genPagers = [];
  for (let page = 1; page <= pageCount.value; page++) {
    if (
      Math.abs(currentPage.value - page) < 3 ||
      page === 1 ||
      page === pageCount.value
    ) {
      genPagers.push({ title: `${page}`, page });
    } else if (Math.abs(currentPage.value - page) < 4) {
      genPagers.push({ title: "...", page });
    }
  }
  pagers.value = genPagers;
}
function currentChange(pageNum) {
  currentPage.value = parseInt(pageNum);
  if (currentPage.value > pageCount.value) currentPage.value = pageCount.value;
  userInput.value = 0;
  emit("current-change", currentPage.value);
  generatePager();
}
function pageSizeChamge(pageSize) {
  userPageSize.value = 0;
  emit("page-size-change", parseInt(pageSize));
}
function handleInput(pageNum) {
  userInput.value = parseInt(pageNum);
}
function handleInputPageSize(pageSize) {
  userPageSize.value = parseInt(pageSize);
}
watch(
  () => props.total,
  () => {
    generatePager();
  },
  {
    immediate: true,
  }
);
watch(
  () => props.pageSize,
  () => {
    generatePager();
  }
);
</script>


<style scoped>
.tk-pagination,
.tk-pagination-pagers {
  display: flex;
}

.tk-pagination {
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.tk-pagination-options {
  display: flex;
  align-items: center;
}

.tk-pagination-pager {
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.tk-pagination-pager.__current {
  background-color: #409eff;
  pointer-events: none;
}

.tk-pagination .el-input {
  width: 50px;
}

.tk-pagination .el-input .el-input__inner {
  padding: 0;
  height: 28px;
  text-align: center;
  -moz-appearance: textfield;
  appearance: textfield;
}

.tk-pagination .el-input .el-input__inner::-webkit-inner-spin-button,
.tk-pagination .el-input .el-input__inner::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
