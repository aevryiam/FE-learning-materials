// Base API URL
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com";

// Response type generic
interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

// Error class
class ApiError extends Error {
  status: number;

  constructor({ message, status }: { message: string; status: number }) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}

// Generic fetch function
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new ApiError({
        message: `HTTP error! status: ${response.status}`,
        status: response.status,
      });
    }

    const data = await response.json();

    return {
      data,
      status: response.status,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError({
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
      status: 0,
    });
  }
}

// GET request
export async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await apiFetch<T>(endpoint, { method: "GET" });
  return response.data;
}

// POST request
export async function apiPost<T, U>(endpoint: string, data: U): Promise<T> {
  const response = await apiFetch<T>(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.data;
}

// PUT request
export async function apiPut<T, U>(endpoint: string, data: U): Promise<T> {
  const response = await apiFetch<T>(endpoint, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return response.data;
}

// DELETE request
export async function apiDelete<T>(endpoint: string): Promise<T> {
  const response = await apiFetch<T>(endpoint, { method: "DELETE" });
  return response.data;
}

// Export types
export type { ApiResponse, ApiError };
