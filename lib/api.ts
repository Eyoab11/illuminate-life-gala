// API client for Illuminate Life backend

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002') + '/api';

export class APIError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = 'APIError';
  }
}

// Helper to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type');
  const isJson = contentType?.includes('application/json');

  if (!response.ok) {
    let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
    let errorDetails;

    if (isJson) {
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
        errorDetails = errorData;
      } catch {
        // If JSON parsing fails, use default error message
      }
    }

    throw new APIError(response.status, errorMessage, errorDetails);
  }

  if (isJson) {
    return response.json();
  }

  return response.text() as any;
}

// Ticket Booking API
export const bookingApi = {
  // Submit ticket booking
  createTicketBooking: async (data: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    ticketTier: string;
    ticketName: string;
    quantity: number;
    pricePerUnit: number;
    totalAmount: number;
    specialRequests?: string;
    dietaryRestrictions?: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/illuminate/bookings/ticket`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<{ success: boolean; bookingId: string; message: string }>(response);
  },

  // Verify booking
  verifyBooking: async (bookingId: string) => {
    const response = await fetch(`${API_BASE_URL}/illuminate/bookings/${bookingId}/verify`);
    return handleResponse<{ exists: boolean; type: string; status: string; createdAt: string }>(response);
  },
};

// Sponsor API
export const sponsorApi = {
  // Submit sponsor inquiry
  createSponsorInquiry: async (data: {
    companyName: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    sponsorTier: string;
    message?: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/illuminate/bookings/sponsor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<{ success: boolean; inquiryId: string; message: string }>(response);
  },

  // Get active sponsors for display
  getActiveSponsors: async () => {
    const response = await fetch(`${API_BASE_URL}/illuminate/sponsors/active`);
    return handleResponse<{ sponsors: Array<{
      tier: string;
      companyName: string;
      logoUrl?: string;
      websiteUrl?: string;
    }> }>(response);
  },
};

// Branding API
export const brandingApi = {
  // Submit branding inquiry
  createBrandingInquiry: async (data: {
    companyName: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    brandingType: string;
    specifications?: object;
    message?: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/illuminate/bookings/branding`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<{ success: boolean; inquiryId: string; message: string }>(response);
  },
};

// User-friendly error messages
export function getErrorMessage(error: unknown): string {
  if (error instanceof APIError) {
    switch (error.statusCode) {
      case 400:
        return error.message || 'Invalid request. Please check your input.';
      case 404:
        return 'Resource not found.';
      case 500:
        return 'Server error. Please try again later.';
      default:
        return error.message || 'An unexpected error occurred.';
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred.';
}
