import * as brevo from '@getbrevo/brevo';

if (!process.env.BREVO_API_KEY) {
  throw new Error("BREVO_API_KEY environment variable must be set");
}

const apiInstance = new brevo.ContactsApi();
apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

export async function addContactToBrevo(email: string): Promise<boolean> {
  try {
    const createContact = new brevo.CreateContact();
    createContact.email = email;
    
    await apiInstance.createContact(createContact);
    console.log(`Successfully added ${email} to Brevo contacts`);
    return true;
  } catch (error) {
    // Check if contact already exists (error code 400 with duplicate_parameter)
    if (error && typeof error === 'object' && 'body' in error) {
      const errorBody = error.body as any;
      if (errorBody?.code === 'duplicate_parameter') {
        console.log(`Contact ${email} already exists in Brevo`);
        return true; // Treat as success since the email is captured
      }
    }
    
    console.error('Brevo contact creation error:', error);
    return false;
  }
}