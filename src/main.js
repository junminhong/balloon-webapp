import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Image from "primevue/image";
import Card from "primevue/card";
import Paginator from "primevue/paginator";
import Tag from "primevue/tag";
import Dropdown from "primevue/dropdown";
import Divider from "primevue/divider";
import Menu from "primevue/menu";
import RadioButton from "primevue/radiobutton";
import FileUpload from "primevue/fileupload";
import Textarea from "primevue/textarea";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(store).use(router).use(PrimeVue).mount("#app");
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("Avatar", Avatar);
app.component("Image", Image);
app.component("Card", Card);
app.component("Paginator", Paginator);
app.component("Tag", Tag);
app.component("Dropdown", Dropdown);
app.component("Divider", Divider);
app.component("Menu", Menu);
app.component("RadioButton", RadioButton);
app.component("FileUpload", FileUpload);
app.component("Textarea", Textarea);
