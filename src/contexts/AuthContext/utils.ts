// import { UserSchema } from '@/domain/validators/userValidator';
// import CryptoJS from 'crypto-js';
// import Cookies from 'js-cookie';

// const SECRET_KEY = process.env.USER_SESSION_SECRET_PASSPHRASE!;

// const STORAGE_USER_KEYS = {
//   ACCESS_TOKEN: 'atk',
//   USER_DATA: 'udata',
//   USER_SESSION: 'uSesId',
//   ROLE_ID: 'roleid',
//   FIREBASE_USER: 'fuser',
//   FIREBASE_CREDENTIALS: 'fcred',
// };

// export function storeAuthData<T>(accessKey: keyof typeof STORAGE_USER_KEYS, value: T) {
//   storeEncryptedLocalStorage(STORAGE_USER_KEYS[accessKey], value);
// }

// export function getAuthData<T>(accessKey: keyof typeof STORAGE_USER_KEYS): T | null {
//   return getDecryptedLocalStorage<T>(STORAGE_USER_KEYS[accessKey]);
// }

// // Remove item from localStorage
// export function removeLocalStorageUserDataItem(accessKey: keyof typeof STORAGE_USER_KEYS) {
//   try {
//     localStorage.removeItem(STORAGE_USER_KEYS[accessKey]);
//   } catch (error) {
//     console.error(`Error removing localStorage item "${STORAGE_USER_KEYS[accessKey]}":`, error);
//   }
// }
// const encryptData = (data: string): string => CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
// const decryptData = (encryptedData: string): string => {
//   const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
//   return bytes.toString(CryptoJS.enc.Utf8);
// };

// function storeEncryptedLocalStorage(key: string, data: any) {
//   try {
//     const encryptedData = encryptData(JSON.stringify(data));
//     localStorage.setItem(key, encryptedData);
//   } catch (error) {
//     console.error(`Error storing encrypted localStorage item "${key}":`, error);
//   }
// }

// function getDecryptedLocalStorage<T>(key: string): T | null {
//   try {
//     const encryptedData = localStorage.getItem(key);
//     if (!encryptedData) return null;
//     const decryptedData = decryptData(encryptedData);
//     if (decryptedData === '' || !decryptedData) return null;
//     return JSON.parse(decryptedData) as T;
//   } catch (error) {
//     console.error(`Error retrieving or decrypting localStorage item "${key}":`, error);
//     return null;
//   }
// }

// // Token Expiration Helper Functions
// export function getTokenExpirationTime(token: string): number {
//   const decodedToken = JSON.parse(atob(token.split('.')[1]));
//   return decodedToken.exp * 1000;
// }

// export function isTokenNearExpiration(expirationTime: number): boolean {
//   const currentTime = Date.now();
//   const timeDifference = expirationTime - currentTime;
//   return timeDifference <= 5 * 60 * 1000; // 5 minutes buffer
// }

// // Time Difference Calculation
// export function getTimeDifference(date1: Date, date2: Date) {
//   const date1Ms = date1.getTime();
//   const date2Ms = date2.getTime();

//   const differenceMs = Math.abs(date2Ms - date1Ms);

//   const hours = Math.floor(differenceMs / (1000 * 60 * 60));
//   const minutes = Math.floor((differenceMs / (1000 * 60)) % 60);
//   const seconds = Math.floor((differenceMs / 1000) % 60);

//   return {
//     hours,
//     minutes,
//     seconds,
//   };
// }
