import Vue from 'vue'
import { Button,Form,FormItem,Input,Message,Container,Header,Aside,Main,Menu,Submenu,MenuItemGroup,
        MenuItem,Breadcrumb,BreadcrumbItem,Card,Row,Col} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)

//挂载message
Vue.prototype.$message = Message;
