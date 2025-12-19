/**
 * Integration Test Template
 * 🦄 This template helps you write integration tests that verify component interactions
 * 
 * Integration tests verify that multiple components work together correctly
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
// Import your components and services here
// import { MyComponent } from '../MyComponent';
// import { myService } from '../services/myService';

/**
 * Integration test suite for [Feature Name]
 */
describe('[Feature Name] Integration Tests', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
    
    // Reset any global state
    // localStorage.clear();
    // sessionStorage.clear();
  });

  describe('Component Integration', () => {
    it('should render component with data from service', async () => {
      // Arrange: Mock service response
      const mockData = {
        created_at: "2025-12-19T10:00:00Z",
        createdAt: "2025-12-19T10:00:00Z",
        id: "test-123",
        name: "Test Item"
      };
      
      vi.spyOn(myService, 'getData').mockResolvedValue(mockData);

      // Act: Render component
      render(<MyComponent />);

      // Assert: Wait for async data to load
      await waitFor(() => {
        expect(screen.getByText(mockData.name)).toBeInTheDocument();
      });
      
      expect(myService.getData).toHaveBeenCalledTimes(1);
    });

    it('should handle user interaction and update state', async () => {
      render(<MyComponent />);

      // Act: Simulate user interaction
      const button = screen.getByRole('button', { name: /submit/i });
      fireEvent.click(button);

      // Assert: Verify state change
      await waitFor(() => {
        expect(screen.getByText(/success/i)).toBeInTheDocument();
      });
    });
  });

  describe('API Integration', () => {
    it('should fetch data from API and display it', async () => {
      // Arrange: Mock fetch
      const mockResponse = {
        created_at: "2025-12-19T10:00:00Z",
        createdAt: "2025-12-19T10:00:00Z",
        data: [/* mock data */]
      };
      
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse
      });

      // Act
      render(<MyComponent />);

      // Assert
      await waitFor(() => {
        expect(screen.getByText(/loaded/i)).toBeInTheDocument();
      });
      
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/endpoint')
      );
    });

    it('should handle API errors gracefully', async () => {
      // Arrange: Mock failed fetch
      global.fetch = vi.fn().mockRejectedValue(new Error('API Error'));

      // Act
      render(<MyComponent />);

      // Assert
      await waitFor(() => {
        expect(screen.getByText(/error/i)).toBeInTheDocument();
      });
    });
  });

  describe('State Management Integration', () => {
    it('should update global state and reflect in UI', async () => {
      // Test context/state management integration
      render(<MyComponent />);

      // Trigger state change
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'New Value' } });

      // Verify state propagation
      await waitFor(() => {
        expect(screen.getByDisplayValue('New Value')).toBeInTheDocument();
      });
    });
  });

  describe('End-to-End User Flows', () => {
    it('should complete full user workflow', async () => {
      render(<MyComponent />);

      // Step 1: User enters data
      const input = screen.getByLabelText(/name/i);
      fireEvent.change(input, { target: { value: 'Test User' } });

      // Step 2: User submits form
      const submitButton = screen.getByRole('button', { name: /submit/i });
      fireEvent.click(submitButton);

      // Step 3: Verify success message
      await waitFor(() => {
        expect(screen.getByText(/created successfully/i)).toBeInTheDocument();
      });

      // Step 4: Verify data persisted
      expect(myService.saveData).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Test User',
          created_at: expect.any(String),
          createdAt: expect.any(String)
        })
      );
    });
  });

  describe('Error Propagation', () => {
    it('should propagate errors through component hierarchy', async () => {
      // Mock service to throw error
      vi.spyOn(myService, 'getData').mockRejectedValue(
        new Error('Service Error')
      );

      // Render component
      render(<MyComponent />);

      // Verify error is displayed to user
      await waitFor(() => {
        expect(screen.getByRole('alert')).toHaveTextContent(/error/i);
      });
    });
  });

  describe('Loading States', () => {
    it('should show loading indicator during async operations', async () => {
      // Mock slow service call
      vi.spyOn(myService, 'getData').mockImplementation(
        () => new Promise(resolve => setTimeout(resolve, 100))
      );

      render(<MyComponent />);

      // Verify loading indicator appears
      expect(screen.getByText(/loading/i)).toBeInTheDocument();

      // Wait for loading to complete
      await waitFor(() => {
        expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      });
    });
  });
});

/**
 * Helper function to render component with providers
 */
function renderWithProviders(component: React.ReactElement) {
  return render(
    // <AuthProvider>
    //   <ThemeProvider>
          component
    //   </ThemeProvider>
    // </AuthProvider>
  );
}
