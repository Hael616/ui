import { writable } from 'svelte/store';

export type ToastType = 'default' | 'success' | 'info' | 'warning' | 'error';
export type ToastPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'top-center'
	| 'bottom-center';

export interface Toast {
	id: string;
	type: ToastType;
	title: string;
	description?: string;
	duration?: number;
	closable?: boolean;
}

const createToastState = () => {
	let toasts = $state<Toast[]>([]);

	const add = (toast: Omit<Toast, 'id'>) => {
		const id = crypto.randomUUID();
		const newToast = { id, ...toast };

		toasts.push(newToast);

		if (toast.duration !== 0) {
			setTimeout(() => {
				toasts = toasts.filter((t) => t.id !== id);
			}, toast.duration || 5000);
		}

		return id;
	};
	return {
		get toasts() {
			return toasts;
		},
		remove: (id: string) => {
			toasts = toasts.filter((t) => t.id !== id);
		},
		clear: () => {
			toasts = [];
		},
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

export const toasts = createToastState();
