# Portrait Artist Website - Testing details

[Main README.md file](/README.md)

[View website in GitHub Pages](https://github.com/AJGreaves/portrait-artist)

## Testing - STILL TO COMPLETE

- [W3C CSS validation](https://jigsaw.w3.org/css-validator/)
- [W3C Markup Validation]( https://validator.w3.org/)
    - The developer used **W3C CSS Validation Service** and **W3C  Markup Validation Service** to check the validity of the website code.

### Home Page:

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

3. Testimonials:
    1. Reduce and expand width of window to confirm that 3 testimonials display on medium to large screens, but one is hidden on mobile devices.

4. Call to action button(s):
    1. Hover over call to action button and verify the hover colour change. 
    2. Click the call to action button and verify that it links to the correct page. 
    
5. Footer: 
    1. Hover over each social media icon and confirm colour and size transitions expected.
    2. Click on each icon to confirm it opens a separate tab for it's link.
    3. Reduce and expand width of window to verify that the footer is responsive and looks good on all device widths. 


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
