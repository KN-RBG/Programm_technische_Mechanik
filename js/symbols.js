"use strict";
const NS="http://www.w3.org/2000/svg";
const types={beam:"Balken",fixed:"Festlager",roller:"Loslager",clamp:"Einspannung",force:"Einzelkraft",moment:"Moment",dimension:"Bemaßung",text:"Text"};
function svgNode(tag,attrs={},parent){const n=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);if(parent)parent.append(n);return n}
function symbol(e){const g=svgNode("g",{stroke:"#18212c","stroke-width":2,fill:"none","stroke-linejoin":"round"});
const path=d=>svgNode("path",{d},g);
if(e.type==="beam"){svgNode("rect",{x:0,y:-e.height/2,width:e.length,height:e.height,fill:"#dce2e8"},g)}
if(e.type==="fixed"||e.type==="roller"){const y=e.type==="fixed"?42:50;svgNode("circle",{cx:0,cy:0,r:5},g);path("M-2.7 4.2L-24 42H24L2.7 4.2");path("M-32 "+y+"H32");for(let x=-24;x<=32;x+=12)path("M"+x+" "+y+"l-9 10")}
if(e.type==="clamp"){path("M0 -30V30");for(let y=-28;y<30;y+=10)path("M0 "+y+"l-12 10")}
if(e.type==="force"){const l=e.magnitude*e.scale;path("M"+(-l)+" 0H0");if(l>0)svgNode("path",{d:"M0 0L"+(-Math.min(12,l))+" -5V5Z",fill:"#18212c"},g)}
if(e.type==="moment"){const r=e.momentRadius??32,dir=e.clockwise?1:-1,start=-Math.PI/2,end=start+dir*Math.PI*1.5;const x=r*Math.cos(end),y=r*Math.sin(end),tx=-dir*Math.sin(end),ty=dir*Math.cos(end),h=Math.min(10,r*.45),w=h*.42;path("M0 "+(-r)+" A"+r+" "+r+" 0 1 "+(dir===1?1:0)+" "+x+" "+y);svgNode("path",{d:"M"+x+" "+y+" L"+(x-h*tx-w*ty)+" "+(y-h*ty+w*tx)+" L"+(x-h*tx+w*ty)+" "+(y-h*ty-w*tx)+" Z",fill:"#18212c"},g)}
return g}
function defaults(type){return {type,x:0,y:0,angle:type==="force"?-90:0,label:type==="force"?"F":type==="moment"?"M":"",length:200,height:16,magnitude:100,scale:1,...(type==="moment"?{momentRadius:32,clockwise:false}: {})}}
