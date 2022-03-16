<template>
  <div class="pb-8">
    <div
      class="m-auto mt-6 p-3 border-round-top border-1 border-200"
      style="background: white; width: 670px; height: 78px"
    >
      <div class="flex justify-content-between flex-wrap">
        <div class="flex align-content-center">
          <Avatar
            :image="profileImage"
            size="large"
            shape="circle"
            class="mr-2"
          />
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-start">
              測試機
            </div>
            <div
              class="flex align-items-center justify-content-start"
              style="color: #919191"
            >
              2022/03/16
            </div>
          </div>
        </div>

        <div class="flex">
          <Button label="編輯" class="p-button-secondary p-button-text" />
          <Button label="刪除" class="p-button-secondary p-button-text" />
        </div>
      </div>
    </div>
    <div class="m-auto">
      <div class="flex justify-content-center">
        <Image :src="contentImage" alt="Image Text" width="670" height="502" />
      </div>
    </div>
    <div class="m-auto pt-0" style="background: white; width: 670px">
      <Card>
        <template #title> 我的輕旅行 </template>
        <template #content>
          開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程；上傳照片，記錄美好的回憶。
        </template>
        <template #footer>
          <hr />
          <Tag class="mr-2" value="設計"></Tag>
          <div class="flex pt-4">
            <Image :src="watcherImage" class="pr-2" />130 人看過
          </div>
        </template>
      </Card>
    </div>
    <div
      class="m-auto mt-1 border-round-bottom"
      style="background: white; width: 670px"
    ></div>
  </div>
</template>

<script>
export default {
  setup() {
    const contentImage = require("@/assets/image/Rectangle.png");
    const watcherImage = require("@/assets/image/Union.png");
    return { contentImage, watcherImage };
  },
};
</script>

<style></style>
