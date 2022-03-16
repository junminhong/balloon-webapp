<template>
  <div class="grid m-0" style="background: #f8f8f8">
    <div class="col-1"></div>
    <div class="col-2">
      <Image :src="logo" alt="Image Text" @click="gotoHomePage" />
    </div>
    <div class="col-4 offset-col-2" style="margin: auto">
      <div class="p-inputgroup">
        <InputText
          type="text"
          v-model="value3"
          placeholder="搜尋視覺或專案..."
          class="p-inputtext-lg"
          style="width: 100%"
        />
        <span class="p-input-icon-left">
          <Button
            icon="pi pi-search"
            style="background: #313131"
            class="p-button-lg"
          >
          </Button>
        </span>
      </div>
    </div>
    <div class="col-1"></div>
    <div class="col-2" style="margin: auto">
      <div class="flex">
        <div class="flex">
          <Button style="background: #313131">
            <img alt="logo" src="@/assets/po.png" />
            <span class="ml-2 font-bold">投稿/提案</span>
          </Button>
        </div>
        <div class="flex ml-2">
          <Avatar
            :image="profileImage"
            size="large"
            shape="circle"
            @click="toggle"
            aria-haspopup="true"
            aria-controls="overlay_menu"
          />
          <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const menu = ref();
    const items = ref([
      {
        label: "控制中心",
        items: [
          {
            label: "個人資料",
            icon: "pi pi-user-edit",
          },
          {
            label: "發文記錄",
            icon: "pi pi-history",
          },
          {
            label: "收藏記錄",
            icon: "pi pi-heart-fill",
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: "非常期待再次見到你",
        items: [
          {
            label: "登出",
            icon: "pi pi-sign-out",
          },
        ],
      },
    ]);
    const logo = require("@/assets/image/logo.png");
    const profileImage = require("@/assets/image/Ellipse.png");
    function gotoHomePage() {
      router.push("/");
    }
    const toggle = (event) => {
      menu.value.toggle(event);
    };
    return { items, menu, logo, profileImage, gotoHomePage, toggle };
  },
};
</script>
