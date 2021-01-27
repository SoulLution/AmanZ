import Vue from "vue"

import steps from "../components/base/steps"
import pagination from "../components/base/pagination"
import vRadio from "../components/base/vRadio"
import vCircleRadio from "../components/base/vCircleRadio"

Vue.component("vSteps", steps)
Vue.component("vPagination", pagination)
Vue.component("vRadio", vRadio)
Vue.component("vCircleRadio", vCircleRadio)

import VueSlider from "vue-slider-component"
import "vue-slider-component/theme/default.css"

Vue.component("VueSlider", VueSlider)

import Multiselect from "vue-multiselect"
Vue.component("vMultiselect", Multiselect)
