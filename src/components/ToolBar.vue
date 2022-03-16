<template>
  <div class="flex justify-content-around">
    <div class="flex align-items-center py-4">
      <Button
        label="設計分享"
        class="p-button-raised p-button-secondary p-button-text"
        style="background: #313131; color: white"
      />
      <Button
        label="提案"
        class="p-button-raised p-button-secondary p-button-text"
        style="background: white; color: black"
      />
    </div>
    <div class="flex">
      <Paginator :rows="10" totalRecords="11"></Paginator>
    </div>
    <div class="flex align-items-center">
      <Dropdown
        v-model="selectedCity1"
        :options="cities"
        optionLabel="name"
        optionValue="code"
        placeholder="最新"
        style="background: white"
      />
    </div>
  </div>
</template>
