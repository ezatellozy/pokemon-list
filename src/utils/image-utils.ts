/**
 * Utility functions for handling image conversion between File objects and base64 strings
 */

// File size constants
export const FILE_SIZE_LIMITS = {
  IMAGE_1MB: 1024 * 1024, // 1MB in bytes
  IMAGE_2MB: 2 * 1024 * 1024, // 2MB in bytes
  IMAGE_5MB: 5 * 1024 * 1024, // 5MB in bytes
} as const;

/**
 * Validates if a file size is within the specified limit
 * @param file - The file to validate
 * @param maxSize - Maximum file size in bytes (default: 1MB)
 * @returns boolean - True if file size is within limit
 */
export const isValidFileSize = (file: File, maxSize: number = FILE_SIZE_LIMITS.IMAGE_1MB): boolean => {
  return file.size <= maxSize;
};

/**
 * Gets a human-readable file size string
 * @param bytes - File size in bytes
 * @returns string - Human-readable file size (e.g., "1.5 MB")
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Validates if a file is a valid image with acceptable size
 * @param file - The file to validate
 * @param maxSize - Maximum file size in bytes (default: 1MB)
 * @returns { isValid: boolean; error?: string } - Validation result with optional error message
 */
export const validateImageFile = (file: File, maxSize: number = FILE_SIZE_LIMITS.IMAGE_1MB): { isValid: boolean; error?: string } => {
  // Check file type
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml'];
  if (!validTypes.includes(file.type)) {
    return {
      isValid: false,
      error: 'Please select a valid image file (JPEG, PNG, WebP, or SVG)'
    };
  }
  
  // Check file size
  if (!isValidFileSize(file, maxSize)) {
    return {
      isValid: false,
      error: `File size must be less than ${formatFileSize(maxSize)}. Current size: ${formatFileSize(file.size)}`
    };
  }
  
  return { isValid: true };
};

/**
 * Converts a File object to a base64 string
 * @param file - The file to convert
 * @returns Promise<string> - The base64 encoded string
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Converts multiple File objects to base64 strings
 * @param files - Array of files to convert
 * @returns Promise<string[]> - Array of base64 encoded strings
 */
export const filesToBase64 = async (files: File[]): Promise<string[]> => {
  const promises = files.map(file => fileToBase64(file));
  return Promise.all(promises);
};

/**
 * Converts a base64 string back to a File object (for preview purposes)
 * @param base64 - The base64 encoded string
 * @param filename - The filename for the file
 * @param mimeType - The MIME type of the file
 * @returns File - The file object
 */
export const base64ToFile = (base64: string, filename: string, mimeType: string): File => {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });
  
  return new File([blob], filename, { type: mimeType });
};

/**
 * Creates a data URL from a base64 string for image preview
 * @param base64 - The base64 encoded string
 * @param mimeType - The MIME type of the file
 * @returns string - The data URL
 */
export const base64ToDataUrl = (base64: string, mimeType: string): string => {
  return `data:${mimeType};base64,${base64}`;
};

/**
 * Validates if a string is a valid base64 encoded image
 * @param str - The string to validate
 * @returns boolean - True if valid base64 image
 */
export const isValidBase64Image = (str: string): boolean => {
  try {
    // Check if it's a valid base64 string
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(str)) {
      return false;
    }
    
    // Try to decode it
    const decoded = atob(str);
    
    // Check if it's a valid image by looking at the first few bytes
    const bytes = new Uint8Array(decoded.length);
    for (let i = 0; i < decoded.length; i++) {
      bytes[i] = decoded.charCodeAt(i);
    }
    
    // Check for common image file signatures
    const signatures = {
      jpeg: [0xFF, 0xD8, 0xFF],
      png: [0x89, 0x50, 0x4E, 0x47],
      gif: [0x47, 0x49, 0x46],
      webp: [0x52, 0x49, 0x46, 0x46]
    };
    
    for (const [, signature] of Object.entries(signatures)) {
      if (signature.every((byte, index) => bytes[index] === byte)) {
        return true;
      }
    }
    
    return false;
  } catch {
    return false;
  }
}; 