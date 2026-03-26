'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { mockContacts, mockProducts } from '@/data/mock-data';
import { Contact, Product } from '@/lib/types';

type StoreContextType = {
  products: Product[];
  contacts: Contact[];
  upsertProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addInterest: (payload: { nomeCliente: string; produtoId: string; mensagem: string }) => void;
};

const StoreContext = createContext<StoreContextType | null>(null);

const PRODUCTS_KEY = 'raizlocal_products';
const CONTACTS_KEY = 'raizlocal_contacts';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);

  useEffect(() => {
    const persistedProducts = localStorage.getItem(PRODUCTS_KEY);
    const persistedContacts = localStorage.getItem(CONTACTS_KEY);
    if (persistedProducts) setProducts(JSON.parse(persistedProducts));
    if (persistedContacts) setContacts(JSON.parse(persistedContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const upsertProduct = (product: Product) => {
    setProducts((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) return prev.map((p) => (p.id === product.id ? product : p));
      return [product, ...prev];
    });
  };

  const deleteProduct = (id: string) => setProducts((prev) => prev.filter((p) => p.id !== id));

  const addInterest = ({ nomeCliente, produtoId, mensagem }: { nomeCliente: string; produtoId: string; mensagem: string }) => {
    const newContact: Contact = {
      id: crypto.randomUUID(),
      nomeCliente,
      produtoId,
      mensagem,
      data: new Date().toISOString(),
      status: 'Novo'
    };
    setContacts((prev) => [newContact, ...prev]);
  };

  const value = useMemo(
    () => ({ products, contacts, upsertProduct, deleteProduct, addInterest }),
    [products, contacts]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore precisa estar dentro de StoreProvider');
  return context;
}
