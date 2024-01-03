import{i as l,p as y,a as c,g as L,D as a,Q as f,l as p,e as E,h as w,j as v,L as g,I as S,k as O,m as T,n as j,o as m,q as k}from"./index-f1f7abc8.js";import{VideoProvider as D}from"./vidstack-2eXmx_h5-3271ec25.js";import{R as H}from"./vidstack-UK1DzmJ--1a695126.js";import"./vidstack-HAbxB-FO-a7b33831.js";const C=h=>k(h);class b{constructor(t){this.Ca=t,this.Oa=null,this.zj=null,this.Sg={},this.H=new Set}get instance(){return this.Oa}setup(t,i){this.kg=i;const e=c(i.$state.streamType).includes("live"),r=c(i.$state.streamType).includes("ll-");this.Oa=new t({lowLatencyMode:r,backBufferLength:r?4:e?8:void 0,renderTextTracksNatively:!1,...this.Sg});const s=this.Aj.bind(this);for(const o of Object.values(t.Events))this.Oa.on(o,s);this.Oa.on(t.Events.ERROR,this.sd.bind(this));for(const o of this.H)o(this.Oa);i.player.dispatch(new a("hls-instance",{detail:this.Oa})),this.Oa.attachMedia(this.Ca),this.Oa.on(t.Events.AUDIO_TRACK_SWITCHED,this.Bj.bind(this)),this.Oa.on(t.Events.LEVEL_SWITCHED,this.Cj.bind(this)),this.Oa.on(t.Events.LEVEL_LOADED,this.Dj.bind(this)),this.Oa.on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,this.Ej.bind(this)),this.Oa.on(t.Events.CUES_PARSED,this.Fj.bind(this)),i.qualities[f.ub]=this.Gj.bind(this),p(i.qualities,"change",this.Yg.bind(this)),p(i.audioTracks,"change",this.Hj.bind(this)),this.zj=E(this.Ij.bind(this))}Ij(){if(!this.kg.$state.live())return;const t=new H(this.Jj.bind(this));return t.qc(),t.rc.bind(t)}Jj(){var t;this.kg.$state.liveSyncPosition.set(((t=this.Oa)==null?void 0:t.liveSyncPosition)??1/0)}Aj(t,i){var e;(e=this.kg.player)==null||e.dispatch(new a(C(t),{detail:i}))}Ej(t,i){const e=new a(t,{detail:i});let r=-1;for(let s=0;s<i.tracks.length;s++){const o=i.tracks[s],n=o.subtitleTrack??o.closedCaptions,u=new w({id:`hls-${o.kind}${s}`,src:n==null?void 0:n.url,label:o.label,language:n==null?void 0:n.lang,kind:o.kind});u[v.Sa]=2,u[v.eb]=()=>{u.mode==="showing"?(this.Oa.subtitleTrack=s,r=s):r===s&&(this.Oa.subtitleTrack=-1,r=-1)},o.default&&u.setMode("showing",e),this.kg.textTracks.add(u,e)}}Fj(t,i){const e=this.kg.textTracks.getById(`hls-${i.track}`);if(!e)return;const r=new a(t,{detail:i});for(const s of i.cues)s.positionAlign="auto",e.addCue(s,r)}Bj(t,i){const e=this.kg.audioTracks[i.id];e&&this.kg.audioTracks[g.$](e,!0,new a(t,{detail:i}))}Cj(t,i){const e=this.kg.qualities[i.level];e&&this.kg.qualities[g.$](e,!0,new a(t,{detail:i}))}Dj(t,i){if(this.kg.$state.canPlay())return;const{type:e,live:r,totalduration:s,targetduration:o}=i.details,n=new a(t,{detail:i});this.kg.delegate.Pb("stream-type-change",r?e==="EVENT"&&Number.isFinite(s)&&o>=10?"live:dvr":"live":"on-demand",n),this.kg.delegate.Pb("duration-change",s,n);const u=this.Oa.media;this.Oa.currentLevel===-1&&this.kg.qualities[f.tb](!0,n);for(const d of this.Oa.audioTracks)this.kg.audioTracks[g.h]({id:d.id+"",label:d.name,language:d.lang||"",kind:"main"},n);for(const d of this.Oa.levels)this.kg.qualities[g.h]({id:(d.id??d.height+"p")+"",width:d.width,height:d.height,codec:d.codecSet,bitrate:d.bitrate},n);u.dispatchEvent(new a("canplay",{trigger:n}))}sd(t,i){var e,r,s;if(i.fatal)switch(i.type){case"networkError":(e=this.Oa)==null||e.startLoad();break;case"mediaError":(r=this.Oa)==null||r.recoverMediaError();break;default:(s=this.Oa)==null||s.destroy(),this.Oa=null;break}}Gj(){this.Oa&&(this.Oa.currentLevel=-1)}Yg(){const{qualities:t}=this.kg;!this.Oa||t.auto||(this.Oa[t.switch+"Level"]=t.selectedIndex,S&&(this.Ca.currentTime=this.Ca.currentTime))}Hj(){const{audioTracks:t}=this.kg;this.Oa&&this.Oa.audioTrack!==t.selectedIndex&&(this.Oa.audioTrack=t.selectedIndex)}N(){var t,i;this.kg&&(this.kg.qualities[f.ub]=void 0),(t=this.Oa)==null||t.destroy(),this.Oa=null,(i=this.zj)==null||i.call(this),this.zj=null}}class I{constructor(t,i,e){this.Df=t,this.kg=i,this.xh=e,this.Lj()}async Lj(){const t={onLoadStart:this.Of.bind(this),onLoaded:this.Zf.bind(this),onLoadError:this.Mj.bind(this)};let i=await $(this.Df,t);if(O(i)&&!l(this.Df)&&(i=await R(this.Df,t)),!i)return null;if(!i.isSupported()){const e="[vidstack]: `hls.js` is not supported in this environment";return this.kg.player.dispatch(new a("hls-unsupported")),this.kg.delegate.Pb("error",{message:e,code:4}),null}return i}Of(){this.kg.player.dispatch(new a("hls-lib-load-start"))}Zf(t){this.kg.player.dispatch(new a("hls-lib-loaded",{detail:t})),this.xh(t)}Mj(t){const i=T(t);this.kg.player.dispatch(new a("hls-lib-load-error",{detail:i})),this.kg.delegate.Pb("error",{message:i.message,code:4})}}async function R(h,t={}){var i,e,r,s,o;if(!O(h)){if((i=t.onLoadStart)==null||i.call(t),h.prototype&&h.prototype!==Function)return(e=t.onLoaded)==null||e.call(t,h),h;try{const n=(r=await h())==null?void 0:r.default;if(n&&n.isSupported)(s=t.onLoaded)==null||s.call(t,n);else throw Error("");return n}catch(n){(o=t.onLoadError)==null||o.call(t,n)}}}async function $(h,t={}){var i,e,r;if(l(h)){(i=t.onLoadStart)==null||i.call(t);try{if(await j(h),!m(window.Hls))throw Error("");const s=window.Hls;return(e=t.onLoaded)==null||e.call(t,s),s}catch(s){(r=t.onLoadError)==null||r.call(t,s)}}}const P="https://cdn.jsdelivr.net";class _ extends D{constructor(){super(...arguments),this.$$PROVIDER_TYPE="HLS",this.Rg=null,this.ef=new b(this.video),this.Qg=`${P}/npm/hls.js@^1.0.0/dist/hls.min.js`}get ctor(){return this.Rg}get instance(){return this.ef.instance}get type(){return"hls"}get canLiveSync(){return!0}get config(){return this.ef.Sg}set config(t){this.ef.Sg=t}get library(){return this.Qg}set library(t){this.Qg=t}preconnect(){l(this.Qg)&&y(this.Qg)}setup(t){super.setup(t),new I(this.Qg,t,i=>{this.Rg=i,this.ef.setup(i,t),t.delegate.Pb("provider-setup",this);const e=c(t.$state.source);e&&this.loadSource(e)})}async loadSource(t,i){var e;l(t.src)&&(this.Ga.preload=i||"",(e=this.ef.instance)==null||e.loadSource(t.src),this.sg=t)}onInstance(t){const i=this.ef.instance;return i&&t(i),this.ef.H.add(t),()=>this.ef.H.delete(t)}destroy(){this.ef.N()}}_.supported=L();export{_ as HLSProvider};
