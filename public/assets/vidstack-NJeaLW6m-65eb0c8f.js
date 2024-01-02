import{c as $,T as r,s as v,p as T,e as b,a as P,i as q,F as E,L as l,l as V,Q as y}from"./index-6a53f99a.js";import{R as j}from"./vidstack-UK1DzmJ--acb29b7a.js";import{E as C,t as w}from"./vidstack-hTYvsvxZ-a51ba84e.js";const R=["bufferend","bufferstart","durationchange","ended","enterpictureinpicture","error","fullscreenchange","leavepictureinpicture","loaded","pause","play","playbackratechange","qualitychange","seeked","seeking","timeupdate","volumechange","waiting"],f=class p extends C{constructor(){super(...arguments),this.scope=$(),this.qg=0,this.rg=new r(0,0),this.Tg=new r(0,0),this.lg=null,this.mg=null,this.Vg=null,this.og=v(""),this.Ug=v(!1),this.Wg=null,this.sg=null,this.Zg=null,this.Xg=new j(this._g.bind(this)),this.$$PROVIDER_TYPE="VIMEO",this.cookies=!1,this.title=!0,this.byline=!0,this.portrait=!0,this.color="00ADEF"}get Pb(){return this.kg.delegate.Pb}get type(){return"video"}get currentSrc(){return this.sg}get videoId(){return this.og()}get hash(){return this.Wg}get isPro(){return this.Ug()}preconnect(){const t=[this.tg(),"https://i.vimeocdn.com","https://f.vimeocdn.com","https://fresnel.vimeocdn.com"];for(const e of t)T(e,"preconnect")}setup(t){this.kg=t,super.setup(t),b(this.xg.bind(this)),b(this.$g.bind(this)),b(this.ah.bind(this)),this.Pb("provider-setup",this)}destroy(){this.j(),this.ng("destroy")}async play(){const{paused:t}=this.kg.$state;if(P(t))return this.lg||(this.lg=w(()=>{if(this.lg=null,t())return"Timed out."}),this.ng("play")),this.lg.promise}async pause(){const{paused:t}=this.kg.$state;if(!P(t))return this.mg||(this.mg=w(()=>{if(this.mg=null,!t())return"Timed out."}),this.ng("pause")),this.mg.promise}setMuted(t){this.ng("setMuted",t)}setCurrentTime(t){this.ng("seekTo",t)}setVolume(t){this.ng("setVolume",t)}setPlaybackRate(t){this.ng("setPlaybackRate",t)}async loadSource(t){if(!q(t.src)){this.sg=null,this.Wg=null,this.og.set("");return}const e=t.src.match(p.zg),s=e==null?void 0:e[1],i=e==null?void 0:e[2];this.og.set(s??""),this.Wg=i??null,this.sg=t}xg(){this.j();const t=this.og();if(!t){this.Ag.set("");return}this.Ag.set(`${this.tg()}/video/${t}`)}$g(){const t=this.Ag(),e=this.og(),s=p.bh,i=s.get(e);if(!e)return;const h=E();if(this.Vg=h,i){h.resolve(i);return}const o=`https://vimeo.com/api/oembed.json?url=${t}`,a=new AbortController;return window.fetch(o,{mode:"cors",signal:a.signal}).then(n=>n.json()).then(n=>{var m,k;const u=/vimeocdn.com\/video\/(.*)?_/,c=(k=(m=n==null?void 0:n.thumbnail_url)==null?void 0:m.match(u))==null?void 0:k[1],g=c?`https://i.vimeocdn.com/video/${c}_1920x1080.webp`:"",d={title:(n==null?void 0:n.title)??"",duration:(n==null?void 0:n.duration)??0,poster:g,pro:n.account_type!=="basic"};s.set(e,d),h.resolve(d)}).catch(n=>{h.reject(),this.Pb("error",{message:`Failed to fetch vimeo video info from \`${o}\`.`,code:1})}),()=>{h.reject(),a.abort()}}ah(){const t=this.Ug(),{$state:e,qualities:s}=this.kg;if(e.canSetPlaybackRate.set(t),s[l.g](!t),t)return V(s,"change",()=>{var h;if(s.auto)return;const i=(h=s.selected)==null?void 0:h.id;i&&this.ng("setQuality",i)})}tg(){return"https://player.vimeo.com"}Kg(){const{$iosControls:t}=this.kg,{keyDisabled:e}=this.kg.$props,{controls:s,muted:i,playsinline:h}=this.kg.$state,o=s()||t();return{title:this.title,byline:this.byline,color:this.color,portrait:this.portrait,controls:o,h:this.hash,keyboard:o&&!e(),transparent:!0,muted:i(),playsinline:h(),dnt:!this.cookies}}_g(){this.ng("getCurrentTime")}Fg(t,e){const{currentTime:s,paused:i,bufferedEnd:h}=this.kg.$state;if(s()===t)return;const o=s(),a={currentTime:t,played:this.qg>=t?this.rg:this.rg=new r(0,this.qg)};this.Pb("time-update",a,e),Math.abs(o-t)>1.5&&(this.Pb("seeking",t,e),!i()&&h()<t&&this.Pb("waiting",void 0,e))}wg(t,e){this.Pb("seeked",t,e)}Eg(t){var s;const e=this.og();(s=this.Vg)==null||s.promise.then(i=>{if(!i)return;const{title:h,poster:o,duration:a,pro:n}=i;this.Xg.qc(),this.Ug.set(n),this.Tg=new r(0,a),this.Pb("poster-change",o,t),this.Pb("title-change",h,t),this.Pb("duration-change",a,t);const u={buffered:new r(0,0),seekable:this.Tg,duration:a};this.kg.delegate.Lg(u,t);const{$iosControls:c}=this.kg,{controls:g}=this.kg.$state;g()||c()||this.ng("_hideOverlay"),this.ng("getQualities")}).catch(i=>{e===this.og()&&this.Pb("error",{message:`Failed to fetch oembed data: ${i}`,code:2})})}ch(t,e,s){switch(t){case"getCurrentTime":this.Fg(e,s);break;case"getChapters":break;case"getQualities":this.dh(e,s);break}}eh(){for(const t of R)this.ng("addEventListener",t)}va(t){var e;this.Pb("pause",void 0,t),(e=this.mg)==null||e.resolve(),this.mg=null}ua(t){var e;this.Pb("play",void 0,t),(e=this.lg)==null||e.resolve(),this.lg=null}fh(t){const{paused:e}=this.kg.$state;e()||this.Pb("playing",void 0,t)}gh(t,e){const s={buffered:new r(0,t),seekable:this.Tg};this.Pb("progress",s,e)}hh(t){this.Pb("waiting",void 0,t)}ih(t){const{paused:e}=this.kg.$state;e()||this.Pb("playing",void 0,t)}jh(t){const{paused:e}=this.kg.$state;e()&&this.Pb("play",void 0,t),this.Pb("waiting",void 0,t)}zd(t,e){const s={volume:t,muted:t===0};this.Pb("volume-change",s,e)}dh(t,e){this.kg.qualities[y.ub]=t.some(s=>s.id==="auto")?()=>{this.ng("setQuality","auto")}:void 0;for(const s of t){if(s.id==="auto")continue;const i=+s.id.slice(0,-1);isNaN(i)||this.kg.qualities[l.h]({id:s.id,width:i*(16/9),height:i,codec:"avc1,h.264",bitrate:-1},e)}this.Yg(t.find(s=>s.active),e)}Yg({id:t}={},e){if(!t)return;const s=t==="auto",i=this.kg.qualities.toArray().find(h=>h.id===t);s?(this.kg.qualities[y.tb](s,e),this.kg.qualities[l.$](void 0,!0,e)):this.kg.qualities[l.$](i,!0,e)}kh(t,e,s){switch(t){case"ready":this.eh();break;case"loaded":this.Eg(s);break;case"play":this.ua(s);break;case"playprogress":this.fh(s);break;case"pause":this.va(s);break;case"loadprogress":this.gh(e.seconds,s);break;case"waiting":this.jh(s);break;case"bufferstart":this.hh(s);break;case"bufferend":this.ih(s);break;case"volumechange":this.zd(e.volume,s);break;case"durationchange":this.Tg=new r(0,e.duration),this.Pb("duration-change",e.duration,s);break;case"playbackratechange":this.Pb("rate-change",e.playbackRate,s);break;case"qualitychange":this.Yg(e,s);break;case"fullscreenchange":this.Pb("fullscreen-change",e.fullscreen,s);break;case"enterpictureinpicture":this.Pb("picture-in-picture-change",!0,s);break;case"leavepictureinpicture":this.Pb("picture-in-picture-change",!1,s);break;case"ended":this.Pb("end",void 0,s);break;case"error":this.sd(e,s);break;case"seeked":this.wg(e.seconds,s);break}}sd(t,e){var s;if(t.method==="play"){(s=this.lg)==null||s.reject(t.message);return}}Pg(t,e){t.event?this.kh(t.event,t.data,e):t.method&&this.ch(t.method,t.value,e)}Pf(){}ng(t,e){return this.Dg({method:t,value:e})}j(){this.Xg.rc(),this.qg=0,this.rg=new r(0,0),this.Tg=new r(0,0),this.lg=null,this.mg=null,this.Vg=null,this.Zg=null,this.Ug.set(!1)}};f.zg=/(?:https:\/\/)?(?:player\.)?vimeo(?:\.com)?\/(?:video\/)?(\d+)(?:\?hash=(.*))?/;f.bh=new Map;let _=f;export{_ as VimeoProvider};
