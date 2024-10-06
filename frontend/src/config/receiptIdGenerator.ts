import CryptoJS from "crypto-js";

export const generateReceiptId = (
  userName: string,
  totalPrice: number
): string => {
  // Get today's date in YYYYMMDD format
  const today = new Date();
  const dateStr = today.toISOString().slice(0, 10).replace(/-/g, "");

  // Combine the elements into a single string
  const rawString = `${userName}_${dateStr}_${totalPrice}`;

  // Create a SHA256 hash of the string
  const hash = CryptoJS.SHA256(rawString).toString(CryptoJS.enc.Hex);

  // Encode the hash using Base64 and limit the length to 40 characters
  const base64Hash = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Hex.parse(hash)
  );

  // Truncate the string to ensure it is no longer than 40 characters
  const receiptId = base64Hash.replace(/[^a-zA-Z0-9]/g, "").substring(0, 40);

  return receiptId;
};
