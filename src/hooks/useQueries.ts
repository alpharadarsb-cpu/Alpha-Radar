import { useMutation } from "@tanstack/react-query";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxpBJukjPiBPpJ-AX9jG_NhxH1LLpw3pC_8AgRZq6Ix1_Glma6FYYdf-0eCU5Mevw5Q/exec";

// Google Apps Script requires form-encoded POST with no-cors
// JSON + Content-Type header triggers CORS preflight which GAS blocks
async function postToSheet(data: Record<string, string>) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  // no-cors mode bypasses CORS — response is opaque (we can't read it)
  // but the data still reaches Google Sheets successfully
  await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
  // With no-cors, response is always opaque — don't check response.ok
  // The submission still works — GAS receives and processes the data
}

export function useSubmitContactForm() {
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      await postToSheet({ formType: "contact", ...data });
    },
  });
}

export function useSubmitQualificationForm() {
  return useMutation({
    mutationFn: async (data: {
      fullName: string;
      email: string;
      phone: string;
      age: string;
      profession: string;
      companyName: string;
      industry: string;
      annualTurnover: string;
      biggestChallenge: string;
      primaryGoal: string;
    }) => {
      await postToSheet({ formType: "qualification", ...data });
    },
  });
}
