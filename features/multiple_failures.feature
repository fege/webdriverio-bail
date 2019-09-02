Feature: Check bail option

	Scenario: First error
		When I open "https://www.google.com"
		Then I see "first error"
	
	Scenario: Second error
		When I open "https://www.google.com"
		Then I see "second error"
	
	Scenario: No error
		When I open "https://www.google.com"
		Then I see ""