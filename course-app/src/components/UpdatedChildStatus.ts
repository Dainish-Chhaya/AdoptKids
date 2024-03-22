// api.ts
export {}; 
async function updateChildStatus(childId: string, adopted: boolean): Promise<void> {
  try {
    const response = await fetch(`http://localhost:3000/child/updateStatus`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        childId,
        adopted,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Assuming your API returns some data, you can handle it here if needed
    const data = await response.json();
    console.log('Child status updated:', data);
  } catch (error) {
    console.error('Error updating child status:', error);
    throw error; // Re-throw the error for further handling if needed
  }
}

export { updateChildStatus };
