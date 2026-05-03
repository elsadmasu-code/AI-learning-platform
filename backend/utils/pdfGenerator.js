import PDFDocument from 'pdfkit';
import fs from 'fs';

export const generateCertificate = (userName, courseName, filePath) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));
  
  doc.fontSize(25).text('Certificate of Completion', 100, 100);
  doc.fontSize(20).text(This certifies that , 100, 200);
  doc.fontSize(20).text(has successfully completed , 100, 250);
  doc.fontSize(15).text(Date: , 100, 350);
  
  doc.end();
};
