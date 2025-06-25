import bcrypt from "bcrypt"
//util to handle hashing

export const hasher = {
    hash: async (plaintext) => await bcrypt.hash(plaintext, 10),
    compare: async (plaintext, hash) => await bcrypt.compare(plaintext, hash),
};
  
