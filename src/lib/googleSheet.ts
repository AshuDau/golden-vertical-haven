const GOOGLE_SHEET_URL = "https://docs.google.com/forms/d/e/placeholder/formResponse";

// Using Google Apps Script Web App endpoint for the sheet
// Sheet ID: 1xrE-unWkfo77yn_GnBBa-R9IIqNHioeCgkD9aFdZy4I
const APPS_SCRIPT_URL = `https://script.google.com/macros/s/AKfycbwPlaceholder/exec`;

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  source_page: string;
  service?: string;
  budget?: string;
  location?: string;
  property_type?: string;
  project_type?: string;
  area_sqft?: string;
  timeline?: string;
  style_preference?: string;
  partnership_type?: string;
  company_name?: string;
}

export async function submitToGoogleSheet(data: LeadFormData): Promise<boolean> {
  try {
    // Using the Google Sheet as a form endpoint
    const sheetUrl = `https://docs.google.com/spreadsheets/d/1xrE-unWkfo77yn_GnBBa-R9IIqNHioeCgkD9aFdZy4I/edit`;
    
    // For now, we'll use a fetch to a Google Apps Script web app
    // The sheet owner needs to deploy an Apps Script to receive POST data
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    formData.append('timestamp', new Date().toISOString());

    // Attempt submission - in production, replace with actual Apps Script URL
    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbxExample/exec`,
      {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      }
    );

    // no-cors mode always returns opaque response, so we assume success
    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    return false;
  }
}
