import { writable } from 'svelte/store';

export const dark = writable(true);
export const play = writable(false);
export const admin = writable(false);