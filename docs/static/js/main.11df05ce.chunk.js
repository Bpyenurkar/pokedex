(this["webpackJsonppokedex-sprin4-dic-21"]=this["webpackJsonppokedex-sprin4-dic-21"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/redPokeball.00867a4e.svg"},function(e,a,t){e.exports=t.p+"static/media/town.6029a9b4.png"},function(e,a,t){e.exports=t.p+"static/media/bluePokeball.dd22ef18.svg"},function(e,a,t){e.exports=t.p+"static/media/greenPokeball.c6762428.svg"},function(e,a,t){e.exports=t.p+"static/media/yellowPokeball.7804a57b.svg"},,,,,function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(14),l=t.n(r),c=t(4),m=t(2),s=t(1);function i(e){var a=e.pokemonInfo,t=a.name,n=a.abilities;return o.a.createElement("div",null,t&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("img",{className:"card__images",src:a.sprites.front_default,alt:""}),o.a.createElement("img",{className:"card__images",src:a.sprites.back_default,alt:""})),o.a.createElement("h1",{className:"card__h1 title-h1"},t),o.a.createElement("ul",{className:"card__skillsUl"},n.map((function(e){return o.a.createElement("li",{className:"card__skillsLi",key:e.ability.name},e.ability.name)})))))}console.clear();var p=t(7),u=t.n(p);function k(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"shadow"}),o.a.createElement("img",{className:"background-image",src:u.a,alt:"town"}),o.a.createElement("div",{className:"home__title"},o.a.createElement("h1",{className:"title-h1"},"POKEDEX"),o.a.createElement(c.b,{to:"/pokedex"},o.a.createElement("button",{className:"btn home__title-btn"},"Enter"))))}console.clear();var d=t(5),E=t.n(d),b=t(12),f=t(8),h=t.n(f),N=t(9),_=t.n(N),v=t(6),g=t.n(v),x=t(10),j=t.n(x);function w(e){var a=e.pokemonColor,t=e.pokemonName;return o.a.createElement("div",{className:"loading"},o.a.createElement("img",{className:"loading__pokeball animate__animated animate__shakeY displayNone",src:function(e){return e&&"red"!==e?"blue"===e?h.a:"green"===e?_.a:"yellow"===e?j.a:void 0:g.a}(a),alt:"pokeball"}),t?o.a.createElement("p",null,"Loading Pokemon..."):o.a.createElement("p",null,"Loading ",a," Pokemons..."))}function O(e){var a=e.name,t=e.handleName;return o.a.createElement("li",{className:"pokemon-picker__li",onClick:function(){return t(a)}},o.a.createElement("img",{alt:"pokeball",className:"pokemon-picker__li-pokeball",src:g.a}),o.a.createElement(c.b,{to:"pokemon=".concat(a)},o.a.createElement("p",null,a)))}function C(e){var a=e.error,t=e.handleName,n=e.isNameLoading,r=e.pokemonColor,l=e.pokemonInfo,c=e.pokemonsList,m=e.pokemonName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("aside",{className:"pokemons__aside"},o.a.createElement("h2",{className:"pokemons__aside--h2"},"Pokemons"),o.a.createElement("ul",{className:"pokemons__aside--pokemonPiker-Ul"},c.map((function(e){return o.a.createElement(O,{key:e.name,handleName:t,name:e.name})})))),o.a.createElement("section",{className:"pokemons__cardContainer"},m?n?o.a.createElement(w,{pokemonName:m}):a?o.a.createElement("p",null,"Pokemon not found, \xa1please choose another!"):o.a.createElement(i,{pokemonInfo:l}):o.a.createElement("p",null,"Select a ",r," Pokemon")))}function y(e){var a=e.handleColor,t=e.handleName,r=e.handleReset,l=e.pokemonColor,s=e.pokemonName,i=Object(n.useState)(!1),p=Object(m.a)(i,2),k=p[0],d=p[1],f=Object(n.useState)(void 0),N=Object(m.a)(f,2),v=N[0],x=N[1],O=Object(n.useState)(void 0),y=Object(m.a)(O,2),P=y[0],L=y[1],S=Object(n.useState)({}),I=Object(m.a)(S,2),B=I[0],R=I[1],T=Object(n.useState)([]),F=Object(m.a)(T,2),J=F[0],U=F[1],A=l?"visible":"invisible",D=function(){var e=Object(b.a)(E.a.mark((function e(){var a,t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?limit=60");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,n=t.results,U(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.warn("Error getPokemons");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||s){e.next=16;break}return x(!0),e.prev=2,e.next=5,fetch("https://pokeapi.co/api/v2/pokemon-color/".concat(a,"/"));case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,U(n.pokemon_species),setTimeout((function(){return x(!1)}),2e3),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.warn("Error getPokemonsByColor");case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(a){return e.apply(this,arguments)}}(),M=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=17;break}return L(!0),e.prev=2,e.next=5,fetch("https://pokeapi.co/api/v2/pokemon/".concat(a));case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,R(n),setTimeout((function(){L(!1),d(!1)}),1500),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.warn("Error getPokemonByName"),setTimeout((function(){L(!1),d(!0)}),1500);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){D(),K(l),M(s)}),[l,s]),o.a.createElement("div",{className:"container"},o.a.createElement("header",null,o.a.createElement("div",{className:"shadow"}),o.a.createElement("img",{className:"background-image",src:u.a,alt:"header"}),o.a.createElement("div",{className:"pokedex__hero"},o.a.createElement(c.b,{to:"/"},o.a.createElement("h1",{className:"title-h1"},"Pokedex")),o.a.createElement("p",{className:"pokedex__hero-subtitle"},"Pick one and choose your Pokemon by color:"),o.a.createElement("button",{className:"pokedex__hero-pokeball",onClick:function(){return a(0,"")}},o.a.createElement("img",{src:g.a,alt:"red pokeball"})),o.a.createElement("button",{className:"pokedex__hero-pokeball",onClick:function(){return a(1,"")}},o.a.createElement("img",{src:h.a,alt:"blue pokeball"})),o.a.createElement("button",{className:"pokedex__hero-pokeball",onClick:function(){return a(2,"")}},o.a.createElement("img",{src:_.a,alt:"green pokeball"})),o.a.createElement("button",{className:"pokedex__hero-pokeball",onClick:function(){return a(3,"")}},o.a.createElement("img",{src:j.a,alt:"yellow pokeball"})),o.a.createElement("button",{className:"btn pokedex__hero-btn ".concat(A),onClick:function(){return r()}},"Remove color"))),o.a.createElement("main",{className:"pokedex__main"},l?v?o.a.createElement(w,{pokemonColor:l}):o.a.createElement(C,{error:k,handleName:t,isNameLoading:P,pokemonColor:l,pokemonInfo:B,pokemonsList:J,pokemonName:s}):J.length?o.a.createElement(C,{error:k,handleName:t,isNameLoading:P,pokemonColor:l,pokemonInfo:B,pokemonsList:J,pokemonName:s}):o.a.createElement(w,{pokemonColor:l})))}console.clear(),console.clear();t(21);function P(){var e=["red","blue","green","yellow"],a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],l=t[1],c=Object(n.useState)(""),p=Object(m.a)(c,2),u=p[0],d=p[1];return o.a.createElement("div",{className:"App ".concat(r)},o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/pokedex",element:o.a.createElement(y,{handleColor:function(a,t){l(e[a]),d(t)},handleName:function(e){d(e)},handleReset:function(){l(""),d("")},pokemonColor:r,pokemonName:u})},o.a.createElement(s.a,{path:"pokemon=:name",element:o.a.createElement(i,null)})),o.a.createElement(s.a,{path:"/",element:o.a.createElement(k,null)})))}var L=document.getElementById("root");l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,null,o.a.createElement(P,null))),L)}],[[15,1,2]]]);
//# sourceMappingURL=main.11df05ce.chunk.js.map