'use client';
import{useEffect}from'react';
export function MenuViewTracker({menuId,slug}:{menuId:string;slug:string}){useEffect(()=>{const key=`omra-menu-view:${menuId}`;try{if(sessionStorage.getItem(key))return;sessionStorage.setItem(key,'1')}catch{}fetch('/api/menu/view',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({menuId,slug}),keepalive:true}).catch(()=>{})},[menuId,slug]);return null}
