(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{200:function(e,t,r){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},204:function(e,t,r){var content=r(214);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("07dc417a",content,!0,{sourceMap:!1})},213:function(e,t,r){"use strict";var o=r(204);r.n(o).a},214:function(e,t,r){var o=r(13),n=r(200),d=r(215);t=o(!1);var l=n(d);t.push([e.i,'.form[data-v-dc5f63e8]{background-color:#fff;border-radius:40px;padding:2.5rem 5rem;max-width:500px;width:100vw;color:#454c5b}.form-error[data-v-dc5f63e8]{color:#ef5755;font-weight:500;font-size:.75rem;min-height:.75rem;margin-bottom:.75rem;line-height:.875rem}.form-title[data-v-dc5f63e8]{display:inline-block;font-weight:500;font-size:1.875rem;line-height:2.875rem;margin-bottom:1.375rem}.form>span[data-v-dc5f63e8]{display:inline-block;font-size:.875rem;line-height:1rem;letter-spacing:-.05px;color:#a6a6a6}.form-label[data-v-dc5f63e8],.form>span[data-v-dc5f63e8]{width:100%;margin-bottom:1.25rem}.form-label[data-v-dc5f63e8]{position:relative;display:block}.form-label[focus-within]>svg[data-v-dc5f63e8]{fill:#39c874}.form-label:focus-within>svg[data-v-dc5f63e8]{fill:#39c874}.form-label>svg[data-v-dc5f63e8]{position:absolute;left:1rem;top:1.15rem;fill:#6d6f80}.form-label>svg[data-v-dc5f63e8]:nth-child(3){left:unset;right:1rem;cursor:pointer}.form-label>input[data-v-dc5f63e8]{width:100%;padding:1rem 3rem;border:1px solid #d6d8dc;border-radius:10px;outline:none;background-color:transparent}.form-label>input[data-v-dc5f63e8]:focus,.form-label>input[data-v-dc5f63e8]:valid{border-color:#39c874}.form-label>input[data-v-dc5f63e8]:invalid:not(:-moz-placeholder-shown){border-color:#ef5755}.form-label>input[data-v-dc5f63e8]:invalid:not(:-ms-input-placeholder){border-color:#ef5755}.form-label>input[data-v-dc5f63e8]:invalid:not(:placeholder-shown){border-color:#ef5755}.form-check[data-v-dc5f63e8]{justify-content:flex-start;margin-bottom:.625rem}.form-check>label[data-v-dc5f63e8]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-check>.checkbox[data-v-dc5f63e8]{min-height:1rem;min-width:1rem;max-height:1rem;max-width:1rem;border:1px solid #d6d8dc;border-radius:6px;transition:.3s;margin-right:.625rem;position:relative}.form-check>input:checked+.checkbox[data-v-dc5f63e8]{border-color:#39c874;background-color:#39c874}.form-check>input:checked+.checkbox[data-v-dc5f63e8]:after{content:"";position:absolute;left:30%;top:25%;width:40%;height:50%;transform:rotate(45deg);border-right:2px solid #fff;border-bottom:2px solid #fff;border-bottom-right-radius:1px}.form-link[data-v-dc5f63e8]{margin-bottom:1.25rem}.form-link>span[data-v-dc5f63e8]{color:#a6a6a6;margin-right:.3333rem}.form-link>a[data-v-dc5f63e8]{color:#39c874;font-weight:700;font-size:.875rem;line-height:1rem}.form-link>a[data-v-dc5f63e8]:hover{color:#1ab058}.form-button[data-v-dc5f63e8]{margin-bottom:1.25rem;width:100%}.form-button>input[data-v-dc5f63e8]{width:100%;padding:1rem;font-weight:500;font-size:.875rem;line-height:1.25rem;border-radius:12px;color:#fff;background-color:#454c5b;cursor:pointer}.form-button>input[data-v-dc5f63e8]:disabled{color:#b7b8be;background-color:#d6d8dc}.sign-body[data-v-dc5f63e8]{background-image:url('+l+");background-repeat:no-repeat;background-position:100% 0;min-height:650px}input[data-v-dc5f63e8]{padding-left:1rem!important}",""]),e.exports=t},215:function(e,t,r){e.exports=r.p+"img/registrate.6f92ac5.svg"},227:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{data:{surname:"",given_name:"",email:"",phone_number:"",password:"",re_enter_password:""},show_pass:!1,show_re_pass:!1,error:""}},computed:{validate:function(){return this.data.surname.length<2||this.data.given_name.length<2||this.data.email.length<5||this.data.phone_number.length<10||this.data.password.length<7||this.data.password!==this.data.re_enter_password}},methods:{sendForm:function(){var e=this;this.error="",this.$axios.post("/registration",this.data).then((function(){e.$router.push("/verification")})).catch((function(t){e.error="Неверный логин",new Error(t)}))}}},n=(r(213),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login items-start"},[r("div",{staticClass:"content items-start justify-start flex-col"},[r("h1",{staticClass:"content-title"},[e._v("Создание аккаунта")]),e._v(" "),r("div",{staticClass:"sign-body justify-start w-full"},[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.sendForm(t)}}},[r("h2",{staticClass:"form-title"},[e._v("Регистрация")]),e._v(" "),r("h6",{staticClass:"form-error"},[e._v("\n          "+e._s(e.error)+"\n        ")]),e._v(" "),r("label",{staticClass:"form-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.surname,expression:"data.surname"}],attrs:{type:"text",placeholder:"Фамилия",required:""},domProps:{value:e.data.surname},on:{input:function(t){t.target.composing||e.$set(e.data,"surname",t.target.value)}}})]),e._v(" "),r("label",{staticClass:"form-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.given_name,expression:"data.given_name"}],attrs:{type:"text",placeholder:"Имя",name:"firstname",required:""},domProps:{value:e.data.given_name},on:{input:function(t){t.target.composing||e.$set(e.data,"given_name",t.target.value)}}})]),e._v(" "),r("label",{staticClass:"form-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.email,expression:"data.email"}],attrs:{type:"email",placeholder:"E-mail",name:"email",required:""},domProps:{value:e.data.email},on:{input:function(t){t.target.composing||e.$set(e.data,"email",t.target.value)}}})]),e._v(" "),r("label",{staticClass:"form-label"},[r("svg"),e._v(" "),"checkbox"==(e.show_pass?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.password,expression:"data.password"}],attrs:{minlength:"8",placeholder:"Пароль",name:"password",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.data.password)?e._i(e.data.password,null)>-1:e.data.password},on:{change:function(t){var r=e.data.password,o=t.target,n=!!o.checked;if(Array.isArray(r)){var d=e._i(r,null);o.checked?d<0&&e.$set(e.data,"password",r.concat([null])):d>-1&&e.$set(e.data,"password",r.slice(0,d).concat(r.slice(d+1)))}else e.$set(e.data,"password",n)}}}):"radio"==(e.show_pass?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.password,expression:"data.password"}],attrs:{minlength:"8",placeholder:"Пароль",name:"password",required:"",type:"radio"},domProps:{checked:e._q(e.data.password,null)},on:{change:function(t){return e.$set(e.data,"password",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.password,expression:"data.password"}],attrs:{minlength:"8",placeholder:"Пароль",name:"password",required:"",type:e.show_pass?"text":"password"},domProps:{value:e.data.password},on:{input:function(t){t.target.composing||e.$set(e.data,"password",t.target.value)}}}),e._v(" "),r("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){e.show_pass=!e.show_pass}}},[e.show_pass?r("path",{attrs:{d:"M2 5.5C2.52887 6.28109 3.10431 6.9477 3.71251 7.5M15 5.5C14.4712 6.28105 13.8959 6.94771 13.2877 7.5M13.2877 7.5L15 9.23429M13.2877 7.5C12.3546 8.34737 11.3442 8.92546 10.3056 9.23429M3.71251 7.5L2 9.23429M3.71251 7.5C4.64563 8.34736 5.65608 8.92546 6.69472 9.23429M10.3056 9.23429L11.0278 11.5M10.3056 9.23429C9.11431 9.58851 7.88598 9.5885 6.69472 9.23429M6.69472 9.23429L5.97222 11.5",stroke:"#D6D8DC","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}):r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.5 11.75C6.56271 11.75 4.50451 10.5827 2.87694 8C4.50451 5.41731 6.56271 4.25 8.5 4.25C10.4373 4.25 12.4955 5.41731 14.1231 8C12.4955 10.5827 10.4373 11.75 8.5 11.75ZM15.6478 7.6221C13.8086 4.46908 11.2206 2.75 8.5 2.75C5.77937 2.75 3.19142 4.46908 1.35217 7.62209C1.21594 7.85562 1.21594 8.14438 1.35217 8.3779C3.19142 11.5309 5.77937 13.25 8.5 13.25C11.2206 13.25 13.8086 11.5309 15.6478 8.3779C15.7841 8.14438 15.7841 7.85562 15.6478 7.6221ZM8.5 11C10.1569 11 11.5 9.65685 11.5 8C11.5 6.34315 10.1569 5 8.5 5C6.84315 5 5.5 6.34315 5.5 8C5.5 9.65685 6.84315 11 8.5 11Z",fill:"#D6D8DC"}})])]),e._v(" "),r("span",[e._v("Пароль должен содержать не менее 6 символов")]),e._v(" "),r("label",{staticClass:"form-label"},[r("svg"),e._v(" "),"checkbox"==(e.show_re_pass?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.re_enter_password,expression:"data.re_enter_password"}],attrs:{placeholder:"Повторите пароль",name:"password",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.data.re_enter_password)?e._i(e.data.re_enter_password,null)>-1:e.data.re_enter_password},on:{change:function(t){var r=e.data.re_enter_password,o=t.target,n=!!o.checked;if(Array.isArray(r)){var d=e._i(r,null);o.checked?d<0&&e.$set(e.data,"re_enter_password",r.concat([null])):d>-1&&e.$set(e.data,"re_enter_password",r.slice(0,d).concat(r.slice(d+1)))}else e.$set(e.data,"re_enter_password",n)}}}):"radio"==(e.show_re_pass?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.re_enter_password,expression:"data.re_enter_password"}],attrs:{placeholder:"Повторите пароль",name:"password",required:"",type:"radio"},domProps:{checked:e._q(e.data.re_enter_password,null)},on:{change:function(t){return e.$set(e.data,"re_enter_password",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.re_enter_password,expression:"data.re_enter_password"}],attrs:{placeholder:"Повторите пароль",name:"password",required:"",type:e.show_re_pass?"text":"password"},domProps:{value:e.data.re_enter_password},on:{input:function(t){t.target.composing||e.$set(e.data,"re_enter_password",t.target.value)}}}),e._v(" "),r("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){e.show_re_pass=!e.show_re_pass}}},[e.show_re_pass?r("path",{attrs:{d:"M2 5.5C2.52887 6.28109 3.10431 6.9477 3.71251 7.5M15 5.5C14.4712 6.28105 13.8959 6.94771 13.2877 7.5M13.2877 7.5L15 9.23429M13.2877 7.5C12.3546 8.34737 11.3442 8.92546 10.3056 9.23429M3.71251 7.5L2 9.23429M3.71251 7.5C4.64563 8.34736 5.65608 8.92546 6.69472 9.23429M10.3056 9.23429L11.0278 11.5M10.3056 9.23429C9.11431 9.58851 7.88598 9.5885 6.69472 9.23429M6.69472 9.23429L5.97222 11.5",stroke:"#D6D8DC","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}):r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.5 11.75C6.56271 11.75 4.50451 10.5827 2.87694 8C4.50451 5.41731 6.56271 4.25 8.5 4.25C10.4373 4.25 12.4955 5.41731 14.1231 8C12.4955 10.5827 10.4373 11.75 8.5 11.75ZM15.6478 7.6221C13.8086 4.46908 11.2206 2.75 8.5 2.75C5.77937 2.75 3.19142 4.46908 1.35217 7.62209C1.21594 7.85562 1.21594 8.14438 1.35217 8.3779C3.19142 11.5309 5.77937 13.25 8.5 13.25C11.2206 13.25 13.8086 11.5309 15.6478 8.3779C15.7841 8.14438 15.7841 7.85562 15.6478 7.6221ZM8.5 11C10.1569 11 11.5 9.65685 11.5 8C11.5 6.34315 10.1569 5 8.5 5C6.84315 5 5.5 6.34315 5.5 8C5.5 9.65685 6.84315 11 8.5 11Z",fill:"#D6D8DC"}})])]),e._v(" "),r("label",{staticClass:"form-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.phone_number,expression:"data.phone_number"},{name:"mask",rawName:"v-mask",value:"+7 (###) ###-####",expression:"'+7 (###) ###-####'"}],attrs:{type:"tel",placeholder:"Сотовый номер",name:"phone",required:""},domProps:{value:e.data.phone_number},on:{input:function(t){t.target.composing||e.$set(e.data,"phone_number",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-button"},[r("input",{attrs:{type:"submit",value:"Зарегистрироваться",disabled:e.validate}})]),e._v(" "),r("div",{staticClass:"form-link justify-start"},[r("span",[e._v("Есть аккаунт?")]),e._v(" "),r("nuxt-link",{attrs:{to:"/login"}},[e._v(" Войти ")])],1)])])])])}),[],!1,null,"dc5f63e8",null);t.default=component.exports}}]);