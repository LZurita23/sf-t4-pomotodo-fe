# Pomodoro Todo List (Pomotodo)

- Practice timeboxing using the [Pomodoro technique](https://todoist.com/productivity-methods/pomodoro-technique)
- Keep your todo list short and focused, easy to complete, easy to build momentum

## Requirements
- node (tested with versions 10+)
- Access the TodoArchDiagram using [draw.io](https://app.diagrams.net/?splash=0&libs=aws4)

## Installation
- `npm install`

## Usage
The pomodoro timer is set to 25 minute intervals, automatically changing to 5 minutes between for breaks. 

Finishing a timed pomodoro interval (25 min) with at least one item in the todo list will record the interval for the topmost item.

- **CREATE** - Create an item by clicking **Edit**. Press return or click add to finish creating your item. Click **Done** to close the edit menu.
- **UPDATE** - To "complete" a todo item, click on it's name in the list. To change the name or description of the item, click on the "**...**"
, make changes and click **Apply**. To change the order of the list item, click and drag on the "**=**" of the item.
- **DELETE** - To remove **completed** items from the list, click on the **Edit** menu, and select **Rem**.

- *Note, if items are not saving properly, you may not have started the [backend server](https://github.com/gSchool/sf-t4-demo-pomotodo-be) and configured its URL in your .env file. You will have to set this variable **REACT_APP_API_URL** and rebuild or serve the app.*


## Stories

**Base Functionality**
- As a user, I want to be able to add my todos (name and description) to a list, so I can see all of my tasks at a glance

- As a user, I want to be able to set my tasks as completed so I can see how much of my tasks I need to finish

- As a user, I want to be able to remove a task if it is completed

- As a user, I want to be able to edit a task's name or description if I need to

- As a user, I want to see a timer so that I can timebox my tasks

- As a user, I want to be able to time my breaks so that I can keep flow with natural breaks in my work

- As as user, I want to be able to pause and reset my timer in case something comes up

- As a user, I want to be able to set a task to be my current focus, so I can work on one task at a time

- As as user, I want to be able to reorder my tasks if I must prioritize or schedule them

- As a user, I want to be able to keep track of how many Pomodoro intervals I've completed for a certain task

**Persistence**
- As a user, I want to be able to log in and stay logged into to keep track of my todos, should I close or restart the app, so I can pick up where I left off





