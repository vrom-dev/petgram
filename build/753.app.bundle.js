(self.webpackChunkpetgram=self.webpackChunkpetgram||[]).push([[753],{7546:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var r,i=t(7294),a=t(4593),o=t(2465),l=t(9163).ZP.div(r||(r=(0,o.Z)(["\n  padding: 16px;\n"]))),u=function(n){var e=n.children,t=n.title,r=n.subtitle;return i.createElement(i.Fragment,null,i.createElement(a.q,null,t&&i.createElement("title",null,t," | Petgram 🐶"),r&&i.createElement("meta",{name:"description",content:r})),i.createElement(l,null,e))}},2608:(n,e,t)=>{"use strict";t.d(e,{M:()=>s});var r,i=t(7294),a=t(5697),o=t.n(a),l=t(2465),u=t(9163).ZP.button(r||(r=(0,l.Z)(["\n  background: #FD0042;\n  border-radius: 3px;\n  color: #fff;\n  height: 32px;\n  display: block;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  text-align: center;\n  &[disabled] {\n    opacity: .3;\n  }\n"]))),s=function(n){var e=n.children,t=n.disabled,r=n.onClick;return i.createElement(u,{disabled:t,onClick:r},e)};s.propTypes={disabled:o().bool,onClick:o().func,children:o().node}},6753:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>y});var r,i,a,o,l,u,s=t(7294),d=t(1798),c=t(7546),p=t(3391),g=t(2465),m=t(6829),b=t(2527),f=(0,b.ZP)(r||(r=(0,g.Z)(["\nmutation signup($input: UserCredentials!) {\n  signup (input: $input)\n}\n"]))),v=(0,b.ZP)(i||(i=(0,g.Z)(["\nmutation login($input: UserCredentials!) {\n  login (input: $input)\n}\n"]))),h=t(2122),E=function(n){var e=(0,s.useState)(n),t=(0,p.Z)(e,2),r=t[0],i=t[1];return{value:r,onChange:function(n){return i(n.target.value)}}},Z=t(9163),x=Z.ZP.form(a||(a=(0,g.Z)(["\n  padding: 16px 0;\n"]))),M=Z.ZP.input(o||(o=(0,g.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  margin-bottom: 8px;\n  padding: 8px 4px;\n  display: block;\n  width: 100%;\n  &[disabled] {\n    opacity: .3;\n  }\n"]))),w=Z.ZP.h2(l||(l=(0,g.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  padding: 8px 0;\n\n"]))),k=Z.ZP.span(u||(u=(0,g.Z)(["\n  color: red;\n  font-size: 14px;\n"]))),P=t(2608),C=function(n){var e=n.onSubmit,t=n.disabled,r=n.title,i=n.error,a=E(""),o=E("");return s.createElement(s.Fragment,null,s.createElement(x,{disabled:t,onSubmit:function(n){n.preventDefault(),e({email:a.value,password:o.value})}},s.createElement(w,null,r),s.createElement(M,(0,h.Z)({placeholder:"Email",disabled:t},a)),s.createElement(M,(0,h.Z)({placeholder:"Password",disabled:t,type:"password"},o)),s.createElement(P.M,{disabled:t},r),i&&s.createElement(k,null,i)))};const y=function(){var n=(0,s.useContext)(d.Z),e=n.activateAuth,t=n.removeAuth,r=function(){var n=(0,m.useMutation)(f),e=(0,p.Z)(n,2),t=e[0],r=e[1];return{registerMutation:t,registerMutationLoading:r.loading,registerMutationError:r.error}}(),i=r.registerMutation,a=r.registerMutationLoading,o=r.registerMutationError,l=function(){var n=(0,m.useMutation)(v),e=(0,p.Z)(n,2),t=e[0],r=e[1];return{loginMutation:t,loginMutationLoading:r.loading,loginMutationError:r.error}}(),u=l.loginMutation,g=l.loginMutationLoading,b=o&&"El usuario ya existe o hay algún problema",h=l.loginMutationError&&"Los credenciales no son correctos o el usuario no existe";return s.createElement(c.A,{title:"Tu panel"},s.createElement(C,{onSubmit:function(n){var r=n.email,a=n.password;i({variables:{input:{email:r,password:a}}}).then((function(n){var t=n.data.signup;e(t)})).catch((function(){return t()}))},title:"Registrarse",error:b,disabled:a}),s.createElement(C,{onSubmit:function(n){var r=n.email,i=n.password;u({variables:{input:{email:r,password:i}}}).then((function(n){var t=n.data.login;e(t)})).catch((function(){return t(!1)}))},title:"Iniciar sesión",disabled:g,error:h}))}}}]);