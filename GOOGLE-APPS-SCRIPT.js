// ═══════════════════════════════════════════════════════════════════════════
//  ALPHA RADAR — Google Apps Script Backend
//  Handles: Contact Form + Client Qualification Form
//
//  IMPORTANT: This script must handle BOTH JSON (doPost) and FormData (e.parameter)
//  because browsers send FormData with no-cors to avoid CORS issues.
//
//  SETUP STEPS:
//  1. Go to https://script.google.com → New Project
//  2. Paste this entire file
//  3. Fill in CONFIG values below
//  4. Click Deploy → New Deployment → Web App
//     - Execute as: Me
//     - Who has access: Anyone (anonymous)
//  5. Copy the Web App URL — already added to useQueries.ts
// ═══════════════════════════════════════════════════════════════════════════

const CONFIG = {
  WHATSAPP_NUMBER: "919377676979",
  CALLMEBOT_API_KEY: "YOUR_API_KEY_HERE",
  SHEET_NAME_CONTACT: "Contact Leads",
  SHEET_NAME_QUALIFY: "Qualification Applications",
};

// ── Main handler ──────────────────────────────────────────────────────────────
function doPost(e) {
  try {
    // FormData arrives in e.parameter (no-cors mode from browser)
    // JSON arrives in e.postData.contents
    let data = {};

    if (e.parameter && Object.keys(e.parameter).length > 0) {
      // FormData / URL-encoded
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      // JSON
      data = JSON.parse(e.postData.contents);
    }

    const formType = data.formType || "";

    if (formType === "contact") {
      saveContactForm(data);
      sendWhatsApp(formatContactMessage(data));
    } else if (formType === "qualification") {
      saveQualificationForm(data);
      sendWhatsApp(formatQualificationMessage(data));
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log("Error: " + err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Save contact form ─────────────────────────────────────────────────────────
function saveContactForm(data) {
  const sheet = getOrCreateSheet(CONFIG.SHEET_NAME_CONTACT, [
    "Timestamp", "Name", "Email", "Phone", "Message"
  ]);
  sheet.appendRow([
    getIST(),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.message || "",
  ]);
}

// ── Save qualification form ───────────────────────────────────────────────────
function saveQualificationForm(data) {
  const sheet = getOrCreateSheet(CONFIG.SHEET_NAME_QUALIFY, [
    "Timestamp", "Full Name", "Email", "Phone", "Age", "Role",
    "Company", "Industry", "Annual Turnover", "Biggest Challenge", "Primary Goal"
  ]);
  sheet.appendRow([
    getIST(),
    data.fullName || "",
    data.email || "",
    data.phone || "",
    data.age || "",
    data.profession || "",
    data.companyName || "",
    data.industry || "",
    data.annualTurnover || "",
    data.biggestChallenge || "",
    data.primaryGoal || "",
  ]);
}

// ── WhatsApp messages ─────────────────────────────────────────────────────────
function formatContactMessage(data) {
  return [
    "🔔 NEW CONTACT — Alpha Radar",
    "─────────────────────",
    `👤 Name: ${data.name}`,
    `📧 Email: ${data.email}`,
    `📱 Phone: ${data.phone || "Not provided"}`,
    `💬 Message: ${data.message}`,
    `🕐 ${getIST()}`,
  ].join("\n");
}

function formatQualificationMessage(data) {
  return [
    "🚀 NEW APPLICATION — Alpha Radar",
    "─────────────────────",
    `👤 Name: ${data.fullName}`,
    `📧 Email: ${data.email}`,
    `📱 Phone: ${data.phone}`,
    `🎂 Age: ${data.age}`,
    `💼 Role: ${data.profession}`,
    `🏢 Company: ${data.companyName}`,
    `🏭 Industry: ${data.industry}`,
    `💰 Turnover: ${data.annualTurnover}`,
    `❗ Challenge: ${data.biggestChallenge}`,
    `🎯 Goal: ${data.primaryGoal}`,
    `🕐 ${getIST()}`,
  ].join("\n");
}

// ── Send WhatsApp via CallMeBot ───────────────────────────────────────────────
function sendWhatsApp(message) {
  if (CONFIG.CALLMEBOT_API_KEY === "YOUR_API_KEY_HERE") return;
  try {
    const url = "https://api.callmebot.com/whatsapp.php?phone=" +
      CONFIG.WHATSAPP_NUMBER + "&text=" +
      encodeURIComponent(message) + "&apikey=" + CONFIG.CALLMEBOT_API_KEY;
    UrlFetchApp.fetch(url);
  } catch (e) {
    Logger.log("WhatsApp error: " + e.message);
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getIST() {
  return Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss");
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Alpha Radar backend active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
