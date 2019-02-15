# Portrait Artist Website - Testing details

[Main README.md file](/README.md)

[View website in GitHub Pages](https://github.com/AJGreaves/portrait-artist)

## Testing - STILL TO COMPLETE

- [W3C CSS validation](https://jigsaw.w3.org/css-validator/)
- [W3C Markup Validation]( https://validator.w3.org/)
    - The developer used **W3C CSS Validation Service** and **W3C  Markup Validation Service** to check the validity of the website code.

#### Home Page:

### Client stories testing:

Most common path through the website: 
- Home > Gallery > Pricing > How to Order > Contact 
Each of these pages points clearly to the next one with a call to action button, but in some places the customer may have a different question in their mind, so a second button is also provided. 

Some pages offer two possible paths: 
- From Gallery > Pricing OR How to Order
- From About > Gallery OR How to Order

*IMPORTANT* 

1. As a new visitor to the website, I want to easily navigate the site, so I can find what I need efficiently. 
    1. No matter what page the new visitor lands on, they can easily find and use the navigation bar. 
    2. The logo image always leads back to the home page (the starting place for most client stories).
    3. The home page call to action button leads the client through the 
    
2. As a new visitor to the website, I want view this artist's gallery, and view their work in detail so I can decide if I want to commission their work. 
    1. At the bott
    2. 
    
3. As a new visitor to the website, I want learn more about the artist, so I can feel I connect with her as a person.
4. As a potential client, I want to know what past clients thought of their artwork and the service they received.
5. As a potential client, I want to view expected prices for a portrait, so I can decide if it is within my budget to order. 
6. As an interested client, I want to understand the ordering process, so I know what steps to take next. 
7. As an interested client, I want an easy to fill in contact form, so I can make contact with the artist and place my order. 
8. As an interested observer and/or potential client, I want to follow the artist on social media, so I can keep up with her latest news. 

### Manual (logical) testing of all elements and functionality on every page.

1. Navigation bar:
    1. Go to the "Home" page from a desktop.
    2. Change the screen size from from desktop to tablet to verify that the navigation bar is responsive and switches from in line menu to burger icon dropdown menu at the appropriate place.
    3. When checking responsiveness of navbar, verify that there is no overflow causing ugly size changes to menu items. _During testing there were overflow problems here. This was fixed by reducing size of the button and logo margins_
    4. Hover over the logo in the navigation bar and verify that the alt text appears. _During testing  this did not happen, so I added a title attribute to the logo to fix_
    5. Click on the logo in the navigation bar and verify that it links to the home page. 
    6. Click on each navigation menu item and verify that it links to the correct page. 
    7. Hover over the "request quote" button and verify the hover colour change works as expected.
    8. Click on the "request quote" button and verify that it links to the contact page. 
    9. Change screen size to small and click burger icon, verify that the menu drops down and that the menu text is centered.
    10. Repeat verification of functionality and responsiveness on my mobile phone and tablet.

2. Hero image / video:
    1. Go to "Home" page from a desktop. 
    2. Confirm video is visible, autoplays on mute and is 100% width of the screen. 
    3. Reduce the width of the window to confirm that the video switches to static image in mobile.
    4. Reduce and expand width of window to confirm that the overlay on top of image / video responds correctly and does not obscure important features. 

3. Compelling copy section:
    1. Reduce and expand width of window to confirm that the text in this section responds correctly and looks good on all device widths. 

4. Testimonials:
    1. Reduce and expand width of window to confirm that 3 testimonials display on medium to large screens, but one is hidden on mobile devices.

5. Call to action button:
    1. Hover over call to action button and verify the hover colour change. 
    2. Click the call to action button and verify that it links to the correct page. 
    
6. Footer: 
    1. Hover over each social media icon and confirm colour and size transitions expected.
    2. Click on each icon to confirm it opens a separate tab for it's link.
    3. Reduce and expand width of window to verify that the footer is responsive and looks good on all device widths. 

7. Review all functionality and responsiveness on my mobile phone and tablet.


#### About Page:

1. Navigation bar: 
    1. Repeat verification steps done for navbar on Home page.
    2. Confirm that navbar code is identical on all html pages. 

2. Hero image:
    1. Hover over hero image and confirm that alt title appears.
    2. Reduce and expand width of window to verify that the hero image behaves and centres the way expected, and that it looks good on all device widths.

3. Page images: 
    1. Hover over each image in the content and confirm that the alt title for each appears.
    2. Reduce and expand width of window to verify that each image behaves and centres the way expected, and that they look good on all device widths.

4. Page content: 
    1. Reduce and expand width of window to verify that each line of text behaves the way expected, and that the text arrangement looks good on all device widths.
    
5. Call to action buttons:
    1. Hover over each call to action button and verify the hover colour change. 
    2. Click each call to action button and verify that it links to its relevant correct page. 
    3. Reduce and expand width of window to verify that the call to action buttons spacing responds as expected. 
    4. Confirm that the two buttons move to stacked on top of each other for mobile devices and display next to each other for larger screens.

6. Footer:
    1. Repeat verification steps done for footer on Home page.
    2. Confirm that footer code is identical on all html pages.


#### Gallery Page:

1. Navigation bar: 
    1. Navbar code is identical on all html pages. Testing already completed.

2. Hero image:
    1. Repeat verification steps done for hero image on About page.
    
3. Gallery:
    1. Hover over each gallery thumbnail and confirm the hover animation works as expected.
    2. Check code to confirm that each gallery thumbnail has a descriptive alt attribute. _titles were deliberately *not* added here because they ruin the clean look of the gallery page. Because of the alt attribute the page is still navagable for visually impared users_
    3. Click on each gallery thumbnail and confirm that the Fancybox gallery modal activates. 
    4. In the gallery modal test click forwards and backwards, play and pause functions and confirm they all work as expected. 
    5. Reduce and expand width of window to verify that each row of gallery images behave and centre the way expected, and that the grid of images looks good on all device widths.

4. Call to action buttons: 
    1. Repeat verification steps done for call to action buttons on About page.
    
5. Footer:
    1. Footer code is identical on all html pages. Testing already completed.


#### Pricing Page:

1. Navigation bar: 
    1. Navbar code is identical on all html pages. Testing already completed.

2. Hero image:
    1. Repeat verification steps done for hero image on About page.

3. Pricing tables: 
    1. Reduce and expand width of window to verify that each table responds in the way expected, they display next to each other on desktop, but stacked on top of each other on mobile and tablet.
    2. Confirm the page looks good at all device widths.

4. Small print: 
    1. Reduce and expand width of window to verify that the small print text behaves and centres the way expected, and that it looks good on all device widths.
    
5. Call to action button: 
    1. Repeat verification steps done for call to action button on Home page.
    
6. Footer:
    1. Footer code is identical on all html pages. Testing already completed.

#### How to Order Page:

1. Navigation bar: 
    1. Navbar code is identical on all html pages. Testing already completed.

2. Hero image:
    1. Repeat verification steps done for hero image on About page.

3. Steps to Order Section: 
    1. Reduce and expand width of window to verify that the steps containers, icons and text display the way expected, 
    2. Confirm that the steps look good on all device widths.

4. Completion times text: 
    1. Repeat verification steps done for small print on pricing page.

5. Call to action button: 
    1. Repeat verification steps done for call to action button on Home page.
    
6. Footer:
    1. Footer code is identical on all html pages. Testing already completed.
    

#### Contact Page:

1. Navigation bar: 
    1. Navbar code is identical on all html pages. Testing already completed.

2. Hero image:
    1. Repeat verification steps done for hero image on About page.

3. Contact form: 
    1. Try to submit the empty form and verify that an error message about the required fields appears
    2. Try to submit the form with an invalid email address and verify that a relevant error message appears
    3. Try to submit the form with a file uploaded, verify that file selection process works.
    4. Try to submit the form with all inputs valid and verify that a success message appears.
    5. Reduce and expand width of window to verify that the form display behaves and centres the way expected, and that it looks good on all device widths.

4. Footer:
    1. Footer code is identical on all html pages. Testing already completed.

## Further testing: 

1. Asked fellow students, friends and family to look at the site on their devices and report any issues they find. _margins were adjusted for navigation bar after feedback that "request quote" button was too close to nav menu on some devices_
2. I viewed my website on several devices at a local tech store, no further issues found.

In this section, you need to convince the assessor that you have conducted enough testing 
to legitimately believe that the site works well. Essentially, in this part you will want 
to go over all of your user stories from the UX section and ensure that they all work as 
intended, with the project providing an easy and straightforward way for the users to achieve
their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief
explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide 
as much detail as is relevant. A particularly useful form for describing your testing process 
is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered 
during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.
