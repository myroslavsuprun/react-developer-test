"use strict";(self.webpackChunkreact_developer_test=self.webpackChunkreact_developer_test||[]).push([[584],{3584:function(t,r,e){e.r(r),e.d(r,{default:function(){return j}});var n,a=e(5671),c=e(3144),o=e(136),u=e(3668),i=e(2791),d=e(5781),s=e(3531),p=e(7781),l=e(6351),f=e(3107),m=e(7021),v=e(8467),y=e(168),P=e(6444).ZP.div(n||(n=(0,y.Z)(["\n  display: grid;\n  grid-template-columns: 730px auto;\n  gap: 40px;\n"]))),h=e(999),C=e(184),b=function(t){(0,o.Z)(e,t);var r=(0,u.Z)(e);function e(){var t;(0,a.Z)(this,e);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=r.call.apply(r,[this].concat(c))).addProductToCart=function(){var r=t.props,e=r.addCartProduct,n=r.getProductByIdStatus.data.product;n.inStock&&e(n)},t.memoizedActivePrice=(0,d.Z)((function(t,r){return t.find((function(t){return t.currency.symbol===r.symbol}))})),t}return(0,c.Z)(e,[{key:"componentDidUpdate",value:function(){var t=this.props.getProductByIdStatus.data;if(t){var r=t.product;document.title="".concat(h.X," | ").concat(r.name)}}},{key:"render",value:function(){var t=this.props,r=t.getProductByIdStatus,e=t.activeCurrency,n=r.isSuccess,a=r.isError,c=r.isLoading,o=r.data,u=r.error;if(c)return(0,C.jsx)(v.aN,{});if(a)return(0,C.jsx)(v.jj,{error:u});if(n){var i=o.product,d=i.gallery,s=i.name,p=i.prices,l=i.brand,f=i.description,m=i.inStock,y=i.attributes,h=this.memoizedActivePrice(p,e),b=h.amount,g=h.currency.symbol;return(0,C.jsxs)(P,{children:[(0,C.jsx)(v.VU,{name:s,gallery:d}),(0,C.jsx)(v.vI,{addProductToCart:this.addProductToCart,brand:l,description:f,inStock:m,attributes:y,amount:b,symbol:g,name:s})]})}}}]),e}(i.PureComponent),g={addCartProduct:f.TB},k=(0,s.$j)((function(t){return{activeCurrency:(0,l.q)(t)}}),g),j=(0,p.qC)(k,m.eG)(b)}}]);
//# sourceMappingURL=584.3fbf6e5a.chunk.js.map