if(fileSize < 1024) {
  fileSize = number + 'bytes';
} 
else if(fileSize >= 1024 && fileSize < 1048576) {
  fileSize= (fileSize/1024).toFixed(1) + 'KB';
} 
else if(fileSize >= 1048576) {
  fileSize= (fileSize/1048576).toFixed(1) + 'MB';
}
