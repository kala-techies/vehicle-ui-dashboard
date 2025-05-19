describe('dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the dashboard title', () => {
    cy.get('h1').contains('Vehicle Dashboard');
  });

  it('should have a speedometer component', () => {
    cy.get('h2').contains('Speedometer');
  });

  it('should have a fuel gauge component', () => {
    cy.get('h2').contains('Fuel Level');
  });

  it('should have turn signals component', () => {
    cy.get('h2').contains('Turn Signals');
  });

  it('should have climate control component', () => {
    cy.get('h2').contains('Climate Control');
  });

  it('should have media player component', () => {
    cy.get('h2').contains('Media Player');
  });

  it('should have status indicators component', () => {
    cy.get('h2').contains('Status Indicators');
  });

  it('should have settings panel component', () => {
    cy.get('h2').contains('Settings');
  });

  it('should have warnings panel component', () => {
    cy.get('h2').contains('Warnings & Alerts');
  });

  it('should toggle theme when clicking the theme button', () => {
    // First expand the settings panel
    cy.contains('Tap to expand settings').click();
    
    // Find and click the theme toggle button
    cy.get('button').contains('Display Mode').parent().find('button').click();
    
    // Check if the app container has the dark theme class
    cy.get('div.app').should('have.class', 'bg-gray-900');
    
    // Toggle back to light theme
    cy.get('button').contains('Display Mode').parent().find('button').click();
    
    // Check if the app container has the light theme class
    cy.get('div.app').should('have.class', 'bg-gray-100');
  });

  it('should simulate speed change when clicking the button', () => {
    // Get the initial speed value
    cy.get('.bg-gray-800 span.text-xl').invoke('text').then((initialSpeed) => {
      // Click the simulate speed change button
      cy.contains('Simulate Speed Change').click();
      
      // Wait for the speed to update
      cy.wait(500);
      
      // Get the updated speed value
      cy.get('.bg-gray-800 span.text-xl').invoke('text').then((updatedSpeed) => {
        // The speed should have changed
        expect(updatedSpeed).not.to.eq(initialSpeed);
      });
    });
  });
});