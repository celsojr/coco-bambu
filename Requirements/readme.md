# Introduction

The Coco Bambu restaurant chain has such an extensive menu that the staff at each unit does not have in-depth knowledge of all the items. Thus, the conception of this project was to create a website that would be accessed in the kitchen so that the recipes could be easily consulted and updated.

Remember: the site must be responsive to work on tablets (starting at 768px wide) and desktops.

# Login

The system must have a login screen (file `0 - Gestão-cozinha.jpg`) that must validate if the username and password are correct.

Validation can be done directly on the front-end for a given username and password pair (eg testeusername / testeenha).

# Recipe List

After login, the user should be directed to the recipe list screen (file `1 - Gestão-cozinha.jpg`). Note that this screen was initially designed so that each recipe would generate multiple orders, but for simplicity this screen should only list the recipes.

Therefore, information relating to the order does not need to be displayed (eg the message “Dish Finished” and the gray ball indicating the time at which the order was placed).
The text search bar, located in the header, must filter the recipes in memory.

# Recipe Details

After clicking on “See recipe“, the user should be directed to the recipe details page (file `2 - Gestão-cozinha1.jpg`).
For simplicity, this page only needs to list all the ingredients and preparation steps in checkboxes. As long as there is any ingredient or preparation step unmarked, the button at the bottom of the page must be disabled.

After everything is checked, the status should be that of the file `3 - Gestão-cozinha1.jpg`. When clicking on the “Finish” button, the system should display a modal window with a generic message of finished dish (file `3 - Gestão-cozinha2.jpg`).

# API

The API must be developed in Node.js and must be the application's revenue data source. It is not mandatory for them to be stored in a database, but that would be a nice bonus.

# Versioning

The code must be made available in a repository from GitHub, Bitbucket or similar, and must contain a file of type README to instruct us how to run your project in our environment.

# Conclusion

If something isn't clear, feel free to ask questions.
