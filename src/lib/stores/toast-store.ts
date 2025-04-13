import { writable } from 'svelte/store';

export type ToastType = 'default' | 'success' | 'info' | 'warning' | 'error';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
  closable?: boolean;
}

const createToastStore = () => {
  const { subscribe, update } = writable<Toast[]>([]);

  function add(toast: Omit<Toast, 'id'>) {
    const id = crypto.randomUUID();
    const newToast = { id, ...toast };
    
    update((toasts) => [...toasts, newToast]);
    
    if (toast.duration !== 0) {
      setTimeout(() => {
        remove(id);
      }, toast.duration || 5000);
    }
    
    return id;
  }

  function remove(id: string) {
    update((toasts) => toasts.filter((t) => t.id !== id));
  }

  function clear() {
    update(() => []);
  }

  return {
    subscribe,
    add,
    remove,
    clear,
    success: (title: string, description?: string, duration?: number) => 
      add({ type: 'success', title, description, duration }),
    error: (title: string, description?: string, duration?: number) => 
      add({ type: 'error', title, description, duration }),
    info: (title: string, description?: string, duration?: number) => 
      add({ type: 'info', title, description, duration }),
    warning: (title: string, description?: string, duration?: number) => 
      add({ type: 'warning', title, description, duration })
  };
};

export const toasts = createToastStore(); 