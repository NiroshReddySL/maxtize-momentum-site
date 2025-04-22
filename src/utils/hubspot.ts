// Add the service parameter to the interface and function
interface HubSpotFormData {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
  service?: string; // Optional service parameter
}

export const submitToHubSpot = async (data: HubSpotFormData): Promise<boolean> => {
  // Simulate API call (replace with actual HubSpot API call)
  // In a real implementation, you would use the HubSpot API client library
  // to send the data to HubSpot.
  
  // For this example, we'll just log the data to the console and return a successful response.
  
  // Log the data including the service if provided
  console.log('Submitting to HubSpot:', data);
  
  // Simulate a successful API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
