import Certificate from '../models/Certificate.js';
import { generateCertificate } from '../utils/pdfGenerator.js';

export const issueCertificate = async (req, res) => {
  try {
    const { userId, courseId, userName, courseName } = req.body;
    const filePath = 'certificates/' + userId + '-' + courseId + '.pdf';
    generateCertificate(userName, courseName, filePath);
    const certificate = await Certificate.create({ user: userId, course: courseId, certificateUrl: filePath, issuedAt: new Date() });
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
