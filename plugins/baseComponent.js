import Vue from "vue"

import steps from "../components/base/steps"
import pagination from "../components/base/pagination"

Vue.component("vSteps", steps)
Vue.component("vPagination", pagination)

import VueSlider from "vue-slider-component"
import "vue-slider-component/theme/default.css"

Vue.component("VueSlider", VueSlider)
