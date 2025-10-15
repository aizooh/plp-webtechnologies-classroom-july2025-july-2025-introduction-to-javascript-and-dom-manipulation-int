/**
 * ====================================================================
 * ASSIGNMENT: JAVASCRIPT FUNDAMENTALS
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // Global variables for DOM elements (Part 4 preparation)
    const checkBtn = document.getElementById('check-btn');
    const toggleBtn = document.getElementById('toggle-btn');
    const addElementBtn = document.getElementById('add-element-btn');
    const generateListBtn = document.getElementById('generate-list-btn');

    // Initial message output
    console.log("JavaScript script loaded successfully.");


    // ------------------------------------------------------------
    // PART 1: Mastering JavaScript Basics
    // ------------------------------------------------------------

    /*
     * Variable Declarations, Data Types, and Conditionals
     * This logic is tied to the 'Check Status & Calculate' button (Part 4)
     */
    checkBtn.addEventListener('click', () => {
        // 1. Variable declaration and fetching input (string data type initially)
        const ageInput = document.getElementById('user-age').value;
        const statusOutput = document.getElementById('status-output');

        // 2. Data type conversion (string to number)
        const age = parseInt(ageInput, 10);

        // 3. Conditional Logic (if/else and comparison operators)
        if (isNaN(age) || age <= 0) {
            statusOutput.textContent = 'Status: Please enter a valid age.';
            console.warn("Invalid age input received.");
        } else if (age >= 18) {
            statusOutput.textContent = 'Status: You are an adult.';
            console.log(`User is ${age}, classified as adult.`);
        } else {
            statusOutput.textContent = 'Status: You are a minor.';
            console.log(`User is ${age}, classified as minor.`);
        }

        // Call Part 2 Function
        const initialValue = 50;
        const total = calculateTotal(initialValue, age);
        document.getElementById('total-output').textContent = `Calculation: Base $${initialValue} + Age Multiplier ($${age}) = Total $${total}`;
    });


    // ------------------------------------------------------------
    // PART 2: JavaScript Functions — The Heart of Reusability
    // ------------------------------------------------------------

    /**
     * Custom Function 1: Calculates a total based on a base value and an age multiplier.
     * @param {number} base - The starting value.
     * @param {number} multiplier - The age value to multiply.
     * @returns {number} The calculated total.
     */
    function calculateTotal(base, multiplier) {
        // Simple arithmetic operator used here
        return base + multiplier; 
    }

    /**
     * Custom Function 2: Formats a string (simple capitalization).
     * @param {string} text - The input string.
     * @returns {string} The formatted string.
     */
    function formatGreeting(text) {
        if (!text) return "";
        // String methods demonstrate basic data processing
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    // Example of Function 2 usage (initial page load)
    const initialGreeting = document.getElementById('greeting-message').textContent;
    document.getElementById('greeting-message').textContent = formatGreeting(initialGreeting);


    // ------------------------------------------------------------
    // PART 3: JavaScript Loops — Embrace the Power of Repetition!
    // ------------------------------------------------------------
    
    // Loop Example 1: Generate dynamic list items using a 'for' loop
    generateListBtn.addEventListener('click', () => {
        const listContainer = document.getElementById('dynamic-list');
        listContainer.innerHTML = ''; // Clear existing list

        const features = ['Semantic HTML', 'CSS Box Model', 'Flexbox & Grid', 'DOM Manipulation', 'Functions & Loops'];

        // Use a 'for...of' loop to iterate through the array (modern iteration)
        for (const item of features) {
            const li = document.createElement('li'); // Part 4: Create element
            li.textContent = item;
            listContainer.appendChild(li); // Part 4: Append element
        }
        console.log("Dynamic list generated using 'for...of' loop.");

        // Call Loop Example 2 function
        startCountdown();
    });

    // Loop Example 2: Simulate a simple countdown using a 'while' loop
    function startCountdown() {
        const countdownOutput = document.getElementById('countdown-output');
        let count = 5;
        countdownOutput.textContent = 'Starting countdown...';

        const countdownInterval = setInterval(() => {
            // Use a 'while' loop structure, though 'setInterval' controls the pacing
            if (count > 0) {
                countdownOutput.textContent = `Countdown: ${count}...`;
                count--;
            } else {
                clearInterval(countdownInterval);
                countdownOutput.textContent = 'Countdown complete! (Simulated with a while-like structure)';
                console.log("Countdown finished.");
            }
        }, 1000);
    }


    // ------------------------------------------------------------
    // PART 4: Mastering the DOM with JavaScript
    // ------------------------------------------------------------

    /*
     * DOM Interaction 1: Change text content
     * This is already demonstrated in Part 1's conditional logic (`statusOutput.textContent = ...`)
     * and in Part 2's initial formatting (`greeting-message.textContent = ...`).
     */

    /*
     * DOM Interaction 2: Toggling classes (responding to a click event)
     */
    toggleBtn.addEventListener('click', () => {
        const domElement = document.getElementById('dom-text');
        
        // Toggling a CSS class
        domElement.classList.toggle('highlight'); 
        
        // Change text based on state (optional)
        if (domElement.classList.contains('highlight')) {
            domElement.textContent = "The style (class) is now HIGHLIGHTED!";
        } else {
            domElement.textContent = "The style (class) has been removed.";
        }
        console.log("CSS class toggled on the element.");
    });


    /*
     * DOM Interaction 3: Creating and appending a new element
     */
    addElementBtn.addEventListener('click', () => {
        const section = addElementBtn.closest('.section-container'); // Find nearest parent section

        // Create a new paragraph element
        const newParagraph = document.createElement('p'); 
        
        // Set content and style
        newParagraph.textContent = "🥳 Success! A new paragraph was created and added to the page dynamically.";
        newParagraph.style.cssText = "color: #dc3545; font-style: italic; margin-top: 15px;"; // Inline style example
        
        // Append the new element to the section
        section.appendChild(newParagraph); 
        
        // Disable the button to prevent spamming the page
        addElementBtn.disabled = true;
        
        console.log("New DOM element created and appended.");
    });

    // End DOMContentLoaded listener
});