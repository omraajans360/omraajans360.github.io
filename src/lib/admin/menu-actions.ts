'use server';
import{revalidatePath}from'next/cache';
import{requireAdmin}from'./auth';
import{insert,select,update}from'./db';
import type{MenuProduct,QrMenu}from'./types';
const text=(f:FormData,k:string)=>String(f.get(k)??'').trim();
const num=(f:FormData,k:string)=>Number(f.get(k)??0)||0;
const yes=(f:FormData,k:string)=>f.get(k)==='on';
const list=(v:string)=>v.split(',').map(x=>x.trim()).filter(Boolean);
const path=(id:string)=>`/admin/qr-menu/${id}`;

export async function updateMenuSettingsAction(f:FormData){await requireAdmin();const id=text(f,'id');await update('qr_menus',`id=eq.${encodeURIComponent(id)}`,{business_name:text(f,'business_name'),template_name:text(f,'template_name'),primary_color:text(f,'primary_color')||'#171717',secondary_color:text(f,'secondary_color')||null,background_color:text(f,'background_color')||'#ffffff',logo_url:text(f,'logo_url')||null,cover_url:text(f,'cover_url')||null,phone:text(f,'phone')||null,whatsapp:text(f,'whatsapp')||null,instagram:text(f,'instagram')||null,address:text(f,'address')||null,maps_url:text(f,'maps_url')||null,working_hours:text(f,'working_hours')||null,wifi_name:text(f,'wifi_name')||null,wifi_password:text(f,'wifi_password')||null,show_wifi:yes(f,'show_wifi'),show_instagram:yes(f,'show_instagram'),show_whatsapp:yes(f,'show_whatsapp'),show_address:yes(f,'show_address'),updated_at:new Date().toISOString()});revalidatePath(path(id));revalidatePath('/admin/qr-menu')}

export async function setMenuStatusAction(f:FormData){await requireAdmin();const id=text(f,'id'),status=text(f,'status');if(!['taslak','yayinda','pasif'].includes(status))throw new Error('Geçersiz durum.');await update('qr_menus',`id=eq.${encodeURIComponent(id)}`,{status,published_at:status==='yayinda'?new Date().toISOString():null,updated_at:new Date().toISOString()});const menu=(await select<QrMenu>('qr_menus',`id=eq.${encodeURIComponent(id)}&select=slug`))[0];revalidatePath(path(id));revalidatePath('/admin/qr-menu');if(menu?.slug)revalidatePath(`/menu/${menu.slug}`)}

export async function createMenuCategoryAction(f:FormData){await requireAdmin();const menuId=text(f,'menu_id');await insert('menu_categories',{menu_id:menuId,name:text(f,'name'),sort_order:num(f,'sort_order'),active:true});await touch(menuId,'Kategori eklendi');revalidatePath(path(menuId))}

export async function updateMenuCategoryAction(f:FormData){await requireAdmin();const menuId=text(f,'menu_id'),id=text(f,'id');await update('menu_categories',`id=eq.${encodeURIComponent(id)}`,{name:text(f,'name'),sort_order:num(f,'sort_order'),active:yes(f,'active')});await touch(menuId,'Kategori güncellendi');revalidatePath(path(menuId))}

export async function createMenuProductAction(f:FormData){await requireAdmin();const menuId=text(f,'menu_id'),menu=(await select<QrMenu>('qr_menus',`id=eq.${encodeURIComponent(menuId)}&select=product_limit`))[0];const current=(await select<MenuProduct>('menu_products',`menu_id=eq.${encodeURIComponent(menuId)}&select=id`)).length;if(menu?.product_limit!=null&&current>=menu.product_limit)throw new Error('Paket ürün limiti doldu.');await insert('menu_products',{menu_id:menuId,category_id:text(f,'category_id'),name:text(f,'name'),description:text(f,'description')||null,price:num(f,'price'),image_url:text(f,'image_url')||null,sort_order:num(f,'sort_order'),active:true,sold_out:false,badges:list(text(f,'badges')),allergens:list(text(f,'allergens'))});await touch(menuId,'Ürün eklendi',true);revalidatePath(path(menuId))}

export async function updateMenuProductAction(f:FormData){await requireAdmin();const menuId=text(f,'menu_id'),id=text(f,'id');await update('menu_products',`id=eq.${encodeURIComponent(id)}`,{category_id:text(f,'category_id'),name:text(f,'name'),description:text(f,'description')||null,price:num(f,'price'),image_url:text(f,'image_url')||null,sort_order:num(f,'sort_order'),active:yes(f,'active'),sold_out:yes(f,'sold_out'),badges:list(text(f,'badges')),allergens:list(text(f,'allergens'))});await touch(menuId,'Ürün güncellendi',true);revalidatePath(path(menuId))}

async function touch(menuId:string,description:string,count=false){await update('qr_menus',`id=eq.${encodeURIComponent(menuId)}`,{updated_at:new Date().toISOString()});await insert('qr_menu_updates',{qr_menu_id:menuId,update_type:'icerik',description,counts_against_allowance:count});if(count){const menu=(await select<QrMenu>('qr_menus',`id=eq.${encodeURIComponent(menuId)}&select=updates_used,update_allowance`))[0];if(menu&&menu.update_allowance!=null)await update('qr_menus',`id=eq.${encodeURIComponent(menuId)}`,{updates_used:Number(menu.updates_used)+1})}}
