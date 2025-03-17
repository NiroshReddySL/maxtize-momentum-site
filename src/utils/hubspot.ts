
const HUBSPOT_PORTAL_ID = ''; // Add your HubSpot portal ID here
const HUBSPOT_FORM_ID = ''; // Add your HubSpot form ID here

interface HubSpotFormData {
  [key: string]: string | number | boolean;
}

export const submitToHubSpot = async (formData: HubSpotFormData): Promise<boolean> => {
  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
    console.error('HubSpot Portal ID or Form ID is not defined');
    return false;
  }

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
  
  // Format the data as HubSpot expects it
  const fields = Object.keys(formData).map(key => ({
    name: key,
    value: formData[key]
  }));
  
  const data = {
    fields,
    context: {
      pageUri: window.location.href,
      pageName: document.title
    }
  };
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('HubSpot submission error:', errorData);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error submitting to HubSpot:', error);
    return false;
  }
};
