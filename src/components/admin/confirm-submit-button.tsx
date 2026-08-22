'use client';
import{useFormStatus}from'react-dom';
export function ConfirmSubmitButton({label='Sil',confirmText='Bu kaydı kalıcı olarak silmek istediğinize emin misiniz?'}:{label?:string;confirmText?:string}){const{pending}=useFormStatus();return <button type="submit" className="admin-btn admin-btn-danger" disabled={pending} onClick={e=>{if(!window.confirm(confirmText))e.preventDefault()}}>{pending?'İşleniyor...':label}</button>}
