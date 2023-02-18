# Dever Generator
Create tasks on Todoist based on your school subjects. Automatically add due dates, labels and at the certain project and sections.

<br>

## How it works?
Basically, you enter some text about your homework (eg.: Math Chapter 1) and the code will detect the label for the subject in Todoist and the next class (due date in Todoist, but can be one day before). After, a request will be made to Todoist server to create the task.

## How to configure?
All you need to do to be yours is to change the things in `/src/components/settings.js`.
Then, build the app using `npm run build` (make sure to do `npm install` before)

## Notes
- It's in portuguese;
- You have to self deploy the app (for now) because there's no settings page.

## Plans
- Transform into PWA to install on the phone;
- Create a settings page;
- View the JSON that will be sent;
- Make a english version.