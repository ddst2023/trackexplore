"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1485],{42667:function(a,b,c){c.d(b,{D:function(){return d}});var d=function(a){return(null==a?void 0:a.inventoryType)===2}},78184:function(a,b,c){c.d(b,{C2:function(){return i}});var d=c(47568),e=c(82222),f=c(34051),g=c.n(f),h=c(27429),i=function(a){var b=a.experimentId,c=a.iteration,f=void 0===c?0:c;return new Promise(function(a){if(f>=10)a("0");else{(0,h.cM)("getExperiment: ".concat(b," iteration: ").concat(f)),(0,h.cM)("type of window google optimize: ".concat((0,e.Z)(null==window?void 0:null===(j=window.google_optimize)|| void 0===j?void 0:j.get)));var c,j,k,l,m=null==window?void 0:null===(k=window.google_optimize)|| void 0===k?void 0:null===(l=k.get)|| void 0===l?void 0:l.call(k,b);m?"1"===m||"0"===m?a(m):(c=50+50*f,new Promise(function(a){return setTimeout(a,c)})).then((0,d.Z)(g().mark(function c(){return g().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.t0=a,c.next=3,i({experimentId:b},f+1);case 3:c.t1=c.sent,(0,c.t0)(c.t1);case 5:case"end":return c.stop()}},c)}))).catch(h.vU):a("0")}})}},41485:function(a,b,c){c.r(b),c.d(b,{default:function(){return F},useProduct:function(){return G}});var d,e=c(85893),f=c(67294),g=c(32054),h=c(828),i=c(16977),j=function(a){return"string"==typeof a?a:"number"==typeof a?Number.isInteger(a)?a.toFixed():a.toFixed(2):"".concat(String(a)||"")},k=function(a){var b,c=a.product,d=a.cart,e=a.sku,g=a.calculatedPrice,k=a.variantImage,l=a.selectedVariantId,m=a.isUserSignedIn,n=void 0!==m&&m,o=null==d?void 0:d.lineItems.reduce(function(a,c){return null!==(b=a+(null==c?void 0:c.quantity))&& void 0!==b?b:0},0),p=(0,f.useState)({quantity:0,attribute:{}}),q=p[0],r=p[1],s=(0,f.useMemo)(function(){var a,b={action:"add","qty[]":j(q.quantity),product_id:j(c.id),attribute:{}};if(Object.entries(null!==(a=q.attribute)&& void 0!==a?a:{}).length){var d=(0,h.Z)(Object.entries(q.attribute)[0],2),e=d[0],f=d[1];b.attribute[e]=j(f)}return b},[q,c.id]),t=c.variants.find(function(a){return a.id===l});return(0,f.useEffect)(function(){if(l&&e&&c){var a,b,f,h,m,p;window.wunderkind={sku_id:(null==t?void 0:t.sku)?null===(a=c.warranty.variants)|| void 0===a?void 0:null===(b=a[t.sku])|| void 0===b?void 0:b.legacy_variant_id:c.sku,productSkuId:j((null==t?void 0:t.sku)?null===(f=c.warranty.variants)|| void 0===f?void 0:null===(h=f[t.sku])|| void 0===h?void 0:h.legacy_variant_id:c.sku),product_id:c.warranty.additional.legacy_product_id||c.sku,itemId:j(c.warranty.additional.legacy_product_id||c.sku),productName:null==c?void 0:c.name,imageUrl:k,price:g,categoryIds:null==c?void 0:c.categories,categoryInfo:null==c?void 0:c.category_info,cartQty:j(o),cartValue:parseFloat("".concat((null==d?void 0:d.total)||0)).toFixed(2),addToCartFormData:s,isUserSignedIn:n,itemUrl:"".concat(i.SHOP_ORIGIN).concat(c.custom_url.url,"?sku=").concat(e),addToCartEvent:"addToCartEvent",lowestPrice:null!==(p=null===(m=null==g?void 0:g.match(/[0-9]+\.[0-9]{2}/g))|| void 0===m?void 0:m[0])&& void 0!==p?p:g}}},[t,c,k,g,o,null==d?void 0:d.total,s,n,c.custom_url.url,l,e,]),{setAddToCartData:r}},l=c(42667),m=c(27429),n=c(47568),o=c(14924),p=c(26042),q=c(69396),r=c(34051),s=c.n(r),t=c(78184),u=c(48080),v=(d=(0,n.Z)(s().mark(function a(b){var d,e,f,g,j,k;return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(d=b.quantity,e=b.allowModal,a.prev=1,!(window.ExtendBigCommerce&&window.Extend)){a.next=13;break}return f=function(){return new Promise(function(a,b){(0,t.C2)({experimentId:i.EXTEND_EXPERIMENT_ID}).then(function(c){window.ExtendBigCommerce.handleAddToCart("#extend-offer",{quantity:d,modal:"0"===c&&e,done:function(c){return c?b():a()}})}).catch(b)})},a.t0=h.Z,a.next=7,(0,u.Z)(function(){return[c.e(2654).then(c.bind(c,52654)),f(),]});case 7:return a.t1=a.sent,k=(j=(g=(0,a.t0)(a.t1,1))[0]).default,a.next=13,k();case 13:a.next=18;break;case 15:a.prev=15,a.t2=a.catch(1),console.error("Failed to add extend Item",a.t2);case 18:case"end":return a.stop()}},a,null,[[1,15]])})),function(a){return d.apply(this,arguments)}),w=function(a){var b=a.product,d=a.selectedVariant,e=a.setCart,f=a.setAddToCartDataForWunderkind,g=a.calculatedPrice,i=a.sku,j=a.user;return function(){var a,k=!(arguments.length>0)|| void 0===arguments[0]||arguments[0];return(0,m.cM)("UseAddToCart start"),a=(0,n.Z)(s().mark(function a(l){var n,r,t,w,x,y,z,A,B,C;return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=parseInt("".concat(null==b?void 0:b.id)),r=d.id,a.t0=h.Z,a.next=6,(0,u.Z)(function(){return[c.e(2386).then(c.bind(c,42386)),Promise.resolve().then(c.bind(c,36511)),c.e(8487).then(c.bind(c,88487)),]});case 6:return a.t1=a.sent,w=(t=(0,a.t0)(a.t1,3))[0].addToCart,x=t[1].getCart,y=t[2].createAddToCartEvent,a.next=13,w({quantity:l,productId:n,variantId:r});case 13:if(z=a.sent,!(A=!!document.getElementById("extend-offer"))){a.next=18;break}return a.next=18,v({quantity:l,allowModal:k});case 18:return a.next=20,x();case 20:e(B=a.sent),f({quantity:l,attribute:C=d.option_values.reduce(function(a,b){return(0,q.Z)((0,p.Z)({},a),(0,o.Z)({},b.option_id,b.id))})}),setTimeout(function(){document.dispatchEvent(y())},1e3);try{(0,u.Z)(function(){return[c.e(1267).then(c.bind(c,11267))]}).then(function(a){var c,d,e=(0,h.Z)(a,1)[0].Facebook,f=parseFloat("".concat(g).replace(/(^\$|,)/g,""));return e.addToCart({content_ids:[i],contents:[{id:i,quantity:l,item_price:f}],content_name:b.name,content_category:(null===(d=null==b?void 0:null===(c=b.breadcrumbs)|| void 0===c?void 0:c.pop())|| void 0===d?void 0:d.name)||"",value:f*l,user:j})}).catch(function(a){(0,m.vU)("Failed to Send AddTocart Event to Facebook ".concat(String(a)))})}catch(s){(0,m.vU)("Failed to Send AddTocart Event to Facebook ".concat(String(s)))}return a.abrupt("return",z);case 29:a.prev=29,a.t2=a.catch(0),(0,m.vU)("Regular add to cart did not work",a.t2);case 32:return a.abrupt("return",{success:!1,newCart:null});case 33:case"end":return a.stop()}},a,null,[[0,29]])})),function(b){return a.apply(this,arguments)}}},x=function(a){var b,c,d=a.product,e=a.selectedVariant,g=null==d?void 0:null===(b=d.warranty)|| void 0===b?void 0:null===(c=b.variants)|| void 0===c?void 0:c[(null==e?void 0:e.sku)||""];return{inventoryLevel:(0,f.useMemo)(function(){try{if((0,l.D)(g)&&"number"==typeof(null==g?void 0:g.inventoryLevel))return g.inventoryLevel}catch(a){(0,m.cM)("Failed to check inventory level for backOrder ".concat(String(a)))}return(null==e?void 0:e.inventory_level)||0},[null==e?void 0:e.inventory_level,g]),variantFromWararnty:g}},y=function(a){var b=a.sku;(0,f.useEffect)(function(){if((0,m.cM)("UseWindowUrlWatcher start"),b){var a=new URL(window.location.href),c=new URLSearchParams(window.location.search);c.set("sku",b),["optionId","optionIds","optionValueId","optionValueIds"].forEach(function(a){c.has(a)&&c.delete(a)});var d="".concat(c.toString()),e=a.toString().split("?")[0]+(d?"?".concat(d):"");window.history.pushState({},document.title,e)}},[b])},z=c(63548),A=function(a){var b=a.product,c=a.calculatedPrice,d=a.selectedVariant,e=(0,f.useMemo)(function(){var a,e,f,g=null===(a=b.prices)|| void 0===a?void 0:null===(e=a.variants)|| void 0===e?void 0:e.find(function(a){return a.id===(null==d?void 0:d.id)}),h=parseFloat("".concat((null==g?void 0:g.sale_price)||(null==d?void 0:d.sale_price)||(null==g?void 0:g.calculated_price)||(null==d?void 0:d.calculated_price)||c)),i=(0,z.l)(h),j=(0,z.l)((null==g?void 0:g.price)||(null==d?void 0:d.price)||(null==b?void 0:b.price)||(null==b?void 0:null===(f=b.prices)|| void 0===f?void 0:f.price));return{rawSalePrice:h,salePrice:i,originalPrice:j,isPriceOnSale:j!==i&&"--"!==i}},[b,d,c]),g=e.rawSalePrice,h=e.salePrice,i=e.originalPrice,j=e.isPriceOnSale;return{rawSalePrice:g,salePrice:h,originalPrice:i,isPriceOnSale:j}},B=function(){},C=function(){return function(){return new Promise(function(a){return a({success:!1,newCart:null})})}},D=(0,f.createContext)({sku:"",cart:null,inStock:!1,price:"",calculatedPrice:"",variantId:0,variantImage:"",productAttribute:[],isFreeShipping:!1,addToCart:C,user:null,inventoryLevel:0,isVintage:!1,isBackOrder:!1,setCart:B,digestedPrice:{rawSalePrice:0,salePrice:"",originalPrice:"",isPriceOnSale:!1},warrantyVariant:{is_entryway:!1,is_vintage:!1,is_white_glove:!1,vendor_quantity:0,images:[],legacy_variant_id:0,vendor_sku:"",variant_type:"",primary_color_hex:"",secondary_color_hex:"",primary_size:"",primary_color:"",quantity_on_hand:0,dimensions_uom:"",is_free_shipping:!1,made_in:"",size_family:"",estimated_max_delivery_days:"0",estimated_min_delivery_days:"0",please_note:"",is_returnable:!1}}),E=function(a){return!!a.inventory_level&&a.inventory_level>0&&!(null==a?void 0:a.purchasing_disabled)},F=function(a){var b,c,d,h,i=a.product,j=a.children,n=a.cart,o=a.setCart,p=a.user,q=a.defaultVariantSku;(0,m.cM)("ProductContextProvider start");var r,s=(0,f.useMemo)(function(){(0,m.cM)("ProductContextProvider defaultVariant");var a=i.variants.find(function(a){return a.sku===q});if(a)return a;var b=null==i?void 0:i.variants.find(E);return b||(null==i?void 0:i.variants[0])},[q,i.variants]),t={sku:(r=s).sku||"",variantId:r.id||0,inStock:E(r)},u=t.sku,v=t.variantId,z=t.inStock,B=(0,f.useState)("".concat((0,g.getPriceOrPriceRange)(i,"calculated_price")||"")),C=B[0],F=(0,f.useState)("".concat((0,g.getPriceOrPriceRange)(i,"price")||"")),G=F[0],H=(0,f.useState)([]),I=H[0],J=null===(b=i.variants)|| void 0===b?void 0:b.find(function(a){return a.id===v}),K=(null==J?void 0:null===(c=J.images)|| void 0===c?void 0:null===(d=c[0])|| void 0===d?void 0:d.url_square)||"",L=i.warranty.variants[parseInt((null==J?void 0:J.sku)||"")],M=!!(null==L?void 0:L.is_free_shipping),N=(null==i?void 0:null===(h=i.variants)|| void 0===h?void 0:h.find(function(a){return v===a.id}))||(null==i?void 0:i.variants[0]);y({sku:u});var O=k({product:i,cart:n,selectedVariantId:v,sku:u,calculatedPrice:C,variantImage:K,isUserSignedIn:!!(null==p?void 0:p.entityId)}).setAddToCartData,P=w({product:i,selectedVariant:N,setCart:o,setAddToCartDataForWunderkind:O,calculatedPrice:C,sku:u,user:p}),Q=x({product:i,selectedVariant:N}),R=Q.inventoryLevel,S=Q.variantFromWararnty,T=(0,f.useMemo)(function(){return!!(null==S?void 0:S.is_vintage)},[S]),U=(0,l.D)(S),V=A({product:i,calculatedPrice:C,selectedVariant:N});return(0,e.jsx)(D.Provider,{value:{sku:u,product:i,inStock:z,price:G,calculatedPrice:C,variantId:v,variantImage:K,selectedVariant:N,productAttribute:I,isFreeShipping:M,addToCart:P,cart:n,setCart:o,user:p,inventoryLevel:R,isVintage:T,isBackOrder:U,digestedPrice:V,warrantyVariant:L},children:j})},G=function(){return(0,f.useContext)(D)}}}])
//# sourceMappingURL=1485-1f34cd15dc763fdf.js.map