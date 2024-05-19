"use server";
import nodeMailer from "nodemailer";
import fs from "fs/promises";

const lockFilePath = ".mailService";
let executionCount = 0;
let lastExecutionTimestamp = null;

function canExecute() {
  if (
    !lastExecutionTimestamp ||
    Date.now() - lastExecutionTimestamp > 10 * 60 * 1000
  ) {
    executionCount = 0;
    lastExecutionTimestamp = Date.now();
  }
  console.log(executionCount);
  return executionCount < 3;
}

const mailService = async (formData) => {
  try {
    if (!canExecute()) {
      return "null";
    }
    executionCount++;

    try {
      await fs.open(lockFilePath, "wx");
    } catch (error) {
      return "null";
    }

    const mailTransporter = nodeMailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@bostondiniocoach.com",
        pass: "@Bostondinio12",
      },
      timeout: 10000,
    });

    const details = {
      from: "info@bostondiniocoach.com",
      to: "info@bostondiniocoach.com",
      subject: formData.type + ": " + formData.phone,
      text: JSON.stringify(formData, null, 2).replace(/\\n/g, "\n"),
    };

    mailTransporter.sendMail(details, (err) => {
      if (err) {
      }
    });

    return "true";
  } catch (err) {
    return "false";
  } finally {
    await fs.unlink(lockFilePath).catch(() => {});
  }
};

export default mailService;
