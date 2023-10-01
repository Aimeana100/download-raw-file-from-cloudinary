export interface FileSystemItem {
    name: string;
    isDirectory: boolean;
    content?: string;
    children?: FileSystemItem[];
  }
  