<template>
  <div
    class="m-auto mt-6 p-3 border-round border-1 border-200"
    style="background: white; width: 1000px"
  >
    <div class="grid">
      <div class="col-6">
        <h4>文章分類<small style="color: #ff688c">*必填</small></h4>
        <Dropdown
          v-model="selectedCity1"
          :options="cities"
          optionLabel="name"
          optionValue="code"
          placeholder="設計分享"
          style="background: white"
          class="flex align-content-end"
        />
      </div>
      <div class="col-2"></div>
      <div class="col-4">
        <n-upload>
          <n-upload-dragger>
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <archive-icon />
              </n-icon>
            </div>
            <n-text style="font-size: 16px">
              點擊或拖動圖片到該區域上傳
            </n-text>
            <n-p depth="3" style="margin: 8px 0 0 0">
              請不要上傳敏感圖片<br />
              建議尺寸：寬670 x 高502 <br />
              限制格式：JPG、PNG
            </n-p>
          </n-upload-dragger>
        </n-upload>
      </div>
    </div>
    <h4>專案名稱<small style="color: #ff688c">*必填</small></h4>
    <div class="p-inputgroup">
      <InputText></InputText>
    </div>
    <h4>摘要<small style="color: #ff688c">*必填</small></h4>
    <div class="p-inputgroup">
      <Textarea v-model="value2" :autoResize="true" rows="5" cols="30" />
    </div>
    <h4>專案分類<small style="color: #ff688c">*必填</small></h4>
    <div class="flex justify-content-between">
      <div class="field-radiobutton">
        <RadioButton
          id="projectCategory1"
          name="projectCategory"
          value="web"
          v-model="projectCategory"
        />
        <label for="projectCategory1">網頁</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          id="projectCategory2"
          name="projectCategory"
          value="ios"
          v-model="projectCategory"
        />
        <label for="projectCategory2">iOS</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          id="projectCategory3"
          name="projectCategory"
          value="android"
          v-model="projectCategory"
        />
        <label for="projectCategory3">Android</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          id="projectCategory4"
          name="projectCategory"
          value="software"
          v-model="projectCategory"
        />
        <label for="projectCategory4">軟體</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          id="projectCategory5"
          name="projectCategory"
          value="element"
          v-model="projectCategory"
        />
        <label for="projectCategory5">元件</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton
          id="projectCategory6"
          name="projectCategory"
          value="other"
          v-model="projectCategory"
        />
        <label for="projectCategory6">其他</label>
      </div>
    </div>
    <h4>視覺搞<small style="color: #ff688c">*必填</small></h4>
    <div class="p-inputgroup">
      <InputText placeholder="figma、sketch連結"></InputText>
    </div>
    <h4>專案說明<small style="color: #ff688c">*必填</small></h4>
    <div class="p-inputgroup">
      <Textarea v-model="value2" :autoResize="true" rows="5" cols="30" />
    </div>
    <div class="flex justify-content-end mt-6">
      <Button
        label="取消"
        class="p-button-text w-2 mr-2"
        style="background: #bebebe; color: white"
      />
      <Button
        label="發佈"
        class="p-button-text w-2"
        style="background: #313131; color: white"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { NUpload, NUploadDragger, NText, NP, NIcon } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
export default {
  components: {
    NUpload,
    NUploadDragger,
    NText,
    NP,
    NIcon,
    ArchiveIcon,
  },
  setup() {
    const projectCategory = ref();
    return {
      projectCategory,
    };
  },
};
</script>

<style></style>
