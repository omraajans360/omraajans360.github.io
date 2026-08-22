'use server';
import{revalidatePath}from'next/cache';import{requireAdmin}from'./auth';import{update}from'./db';
const text=(f:FormData,k:string)=>String(f.get(k)??'').trim();
export async function updateClientAction(f:FormData){await requireAdmin();const id=text(f,'id'),name=text(f,'name');if(!id||!name)throw new Error('Müşteri bilgisi eksik.');await update('clients',`id=eq.${encodeURIComponent(id)}`,{name,company:text(f,'company')||null,phone:text(f,'phone')||null,email:text(f,'email')||null,location:text(f,'location')||null,notes:text(f,'notes')||null});revalidatePath('/admin/musteriler');revalidatePath(`/admin/musteriler/${id}`);revalidatePath('/admin/teklif');revalidatePath('/admin/isler')}
