(this["webpackJsonplob-project"]=this["webpackJsonplob-project"]||[]).push([[0],{238:function(e,t,s){},239:function(e,t,s){},240:function(e,t,s){},257:function(e,t,s){},289:function(e,t){},291:function(e,t){},300:function(e,t){},302:function(e,t){},327:function(e,t){},329:function(e,t){},330:function(e,t){},335:function(e,t){},337:function(e,t){},343:function(e,t){},345:function(e,t){},364:function(e,t){},376:function(e,t){},379:function(e,t){},405:function(e,t){},504:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(22),d=s.n(c),r=(s(238),s(239),s(93)),i=s(94),l=s(51),o=s(101),j=s(99),b=(s(240),s(15)),h=s(535),u=s(532),p=s(536),m=s(224),x=s(526),O=s(529),f=s(531),g=s(530),v=(s(257),s(2)),N=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={},a}return Object(i.a)(s,[{key:"selectAddress",value:function(e){console.log(e),this.props.selectAddress(e),this.props.toggleModal()}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"list-container",children:Object(v.jsx)(m.Scrollbars,{children:Object(v.jsx)(x.a,{children:Object(v.jsx)(O.a,{children:this.props.addresses.map((function(t,s){return Object(v.jsxs)(g.a,{onClick:function(){return e.selectAddress(t)},children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)("p",{className:"name-text",children:t.name}),Object(v.jsxs)("p",{className:"address-text",children:[t.address_line1," ",t.address_line2,Object(v.jsx)("br",{}),t.address_city," ",t.address_state," ",t.address_zip,Object(v.jsx)("br",{}),t.address_country]})]}),Object(v.jsx)(f.a,{align:"center",children:Object(v.jsx)("p",{className:"address-id",children:t.id})})]},s)}))})})})})}}]),s}(a.Component),A=s(534),C=s(533),y=s(505),k=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={addresses:[],filtered:[],search:"",recipientInputModal:!1,selectedAddress:[],submitted:!1},s.recipientInputChange=s.recipientInputChange.bind(Object(l.a)(s)),s.selectAddress=s.selectAddress.bind(Object(l.a)(s)),s.toggleModal=s.toggleModal.bind(Object(l.a)(s)),s.handleClose=s.handleClose.bind(Object(l.a)(s)),s}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"compare",value:function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}},{key:"getItems",value:function(){var e=this;s(261)("test_8ddaad35dc02260ae8a4e6e33d9f3ade7ae").addresses.list().then((function(t){e.setState({addresses:t.data}),e.state.addresses.sort(e.compare)})).catch((function(e){console.log(e)}))}},{key:"recipientInputChange",value:function(e){var t=e.target.value;""!==e.target.value?this.setState({search:t.toUpperCase(),recipientInputModal:!0}):this.setState({recipientInputModal:!1});var s=this.state.addresses.sort(this.filter(t.toUpperCase()));this.setState({filtered:s})}},{key:"filter",value:function(e){return function(t,s){var a=t.name.indexOf(e),n=s.name.indexOf(e);return-1===a&&a<n?1:-1===n&&a>n?-1:a>n?1:a<n?-1:t.name<s.name?1:-1}}},{key:"toggleModal",value:function(){this.setState({recipientInputModal:!1})}},{key:"selectAddress",value:function(e){this.setState({selectedAddress:e})}},{key:"onSubmit",value:function(){this.setState({submitted:!0})}},{key:"onCancel",value:function(){this.setState({selectedAddress:[],search:""}),this.toggleModal()}},{key:"handleClose",value:function(){this.setState({submitted:!1}),this.onCancel()}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(v.jsxs)("div",{className:"form-component",children:[Object(v.jsx)("p",{className:"form-lables",children:"Description:"}),Object(v.jsx)(u.a,{className:t.root,component:"form",children:Object(v.jsx)(p.a,{className:t.input,placeholder:"Describe the mail"})}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{className:"form-lables",children:"To:"}),0===this.state.selectedAddress.length?Object(v.jsx)(u.a,{className:t.root,component:"form",children:Object(v.jsx)(p.a,{className:t.input,onChange:this.recipientInputChange,placeholder:"Recipient Name"})}):Object(v.jsx)(x.a,{className:t.root,children:Object(v.jsx)(O.a,{children:Object(v.jsxs)(g.a,{children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)("p",{className:"name-text",children:this.state.selectedAddress.name}),Object(v.jsxs)("p",{className:"address-text",children:[this.state.selectedAddress.address_line1," ",this.state.selectedAddress.address_line2,Object(v.jsx)("br",{}),this.state.selectedAddress.address_city," ",this.state.selectedAddress.address_state," ",this.state.selectedAddress.address_zip,Object(v.jsx)("br",{}),this.state.selectedAddress.address_country]})]}),Object(v.jsx)(f.a,{align:"center",children:Object(v.jsx)("p",{className:"address-id",children:this.state.selectedAddress.id})}),Object(v.jsx)(f.a,{align:"center",className:t.cancel,onClick:function(){return e.onCancel()},children:Object(v.jsx)("p",{className:"address-id",children:"X"})})]})})}),this.state.recipientInputModal&&Object(v.jsx)("div",{className:"list-component",children:Object(v.jsx)(N,{selectAddress:this.selectAddress,toggleModal:this.toggleModal,addresses:this.state.filtered})}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{className:"form-lables",children:"From:"}),Object(v.jsx)(u.a,{className:t.root,component:"form",children:Object(v.jsx)(p.a,{className:t.input,placeholder:"Describe"})}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{className:"form-lables",children:"Front:"}),Object(v.jsx)(u.a,{className:t.root,component:"form",children:Object(v.jsx)(p.a,{className:t.input,placeholder:""})}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{className:"form-lables",children:"Back:"}),Object(v.jsx)(u.a,{className:t.root,component:"form",children:Object(v.jsx)(p.a,{className:t.input,placeholder:""})}),Object(v.jsx)("br",{}),Object(v.jsx)(h.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){e.onSubmit()},children:"Submit"}),this.state.submitted&&Object(v.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:this.state.submitted,onClose:this.handleClose,closeAfterTransition:!0,BackdropComponent:C.a,children:Object(v.jsx)(y.a,{in:this.state.submitted,children:Object(v.jsxs)("div",{className:t.paper,children:[Object(v.jsx)("h2",{id:"transition-modal-title",children:"Mock Postcard sent verification!"}),Object(v.jsx)("b",{children:"Name:"}),Object(v.jsx)("p",{children:this.state.selectedAddress.name}),Object(v.jsx)("br",{}),Object(v.jsx)("b",{children:"AddressID:"}),Object(v.jsx)("p",{children:this.state.selectedAddress.id}),Object(v.jsx)("br",{}),Object(v.jsx)("b",{children:"Address:"}),Object(v.jsxs)("p",{children:[this.state.selectedAddress.address_line1," ",this.state.selectedAddress.address_line2,Object(v.jsx)("br",{}),this.state.selectedAddress.address_city," ",this.state.selectedAddress.address_state," ",this.state.selectedAddress.address_zip,Object(v.jsx)("br",{}),this.state.selectedAddress.address_country]})]})})})]})}}]),a}(a.Component),_=Object(b.a)((function(e){return{root:{padding:"2px 4px",alignItems:"left",boxShadow:"0 0 8px rgba(0, 0, 0, 0.25)"},input:{marginLeft:e.spacing(1),flex:1,height:"3.5vh",display:"flex"},button:{color:e.palette.getContrastText("#0499D7"),backgroundColor:"#0499D7",textTransform:"none",display:"flex",height:"3.5vh",width:"25%","&:hover":{backgroundColor:"#0499D7"}},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},address:{width:"100%",padding:"2px 4px",display:"flex",alignItems:"left",boxShadow:"0 0 8px rgba(0, 0, 0, 0.25)"},cancel:{cursor:"pointer"}}}))(k);var S=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)(_,{})})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,538)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,d=t.getTTFB;s(e),a(e),n(e),c(e),d(e)}))};d.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),I()}},[[504,1,2]]]);
//# sourceMappingURL=main.8a27fac5.chunk.js.map