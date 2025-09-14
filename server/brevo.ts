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
  } catch (error: any) {
    console.log('Brevo error details:', JSON.stringify(error, null, 2));
    
    // Check for duplicate contact scenarios
    const isDuplicate = 
      // Case 1: Error has body with duplicate_parameter code
      (error?.body?.code === 'duplicate_parameter') ||
      // Case 2: Error message contains duplicate text
      (error?.message && error.message.toLowerCase().includes('duplicate')) ||
      (error?.message && error.message.toLowerCase().includes('already associated')) ||
      // Case 3: HTTP status 400 with duplicate in response
      (error?.status === 400 && error?.response?.body?.code === 'duplicate_parameter') ||
      // Case 4: Direct response check
      (error?.response?.data?.code === 'duplicate_parameter');
    
    if (isDuplicate) {
      console.log(`Contact ${email} already exists in Brevo - treating as success`);
      return true; // Treat as success since the email is already captured
    }
    
    console.error('Brevo contact creation error:', error);
    return false;
  }
}