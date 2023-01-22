# Star war

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score ).
 ✅ Search functionality is working fine by making api request and results are visible- 3 marks.
 ✅ when we search for any character and clicked on it should add data local storage with key "details"- 3 mark
 ✅ verify whether data is rendered to dom or not when we visit the detail page - 2 mark
 ✅ Check goback is working fine or not - 1 mark.

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- detail.html
- src
  - scripts
    - index.js
    - detail.js
- styles
  - index.css
  - detail.css
- cypress (ignore the file under cypress)

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## For API use below
Use the search endpoint to search the movies 
   - `https://swapi.dev/api/people/?search={your_search_term}`
   - Search query is the input entered by you

## Description

- Create a search bar where users can search for any star wars character.
- On every letter typed, the user should be able to see the results. Optimize API calls with Debouncing.
- The list of results should be appended to div with the id "midcontainer" mentioned in the template(Each individual result should be inside a div and that should be appended to div with the id "midcontainer").
- When the user clicks on any results he needs to see the details of the data in detail.html;
- Use local storage to save data with key name as "details".
- In details.html Html elements are already provided in the template, you just need to append the text content and css. (You can make use of id names for identifying which data needs to be appended to which element)

#### For reference check out this app https://star-wars-searchbar.vercel.app/

## index.html
- Here you will make the home page like the star-wars website;
- contains input box to search and it should search when we are typing query(follow debouncing to optimise API call with time 2000s);  
## Things to follow:-
```
- The input box to search should have id="searchip".
- the seach results should get appended to div with id-"midcontainer".
- The data required for details.html should be saved in the local storage with the key name "details".
```
## detail.html
- We need to see the details of the clicked char as in the main website.
- clicking on goback button should redirect us to home page.

## Things to follow
```
- In details.html in the template you need to update the charactername at h1 tag with id "char_name".
- Also update the remaining details as per the original website, Html elements with tags already mentioned in the template just need to add text content to respective span elements.    
```
- you can add styling under the `styles` folder

**Note:- Do not use any other names for the Ids, Classes, and local storage key other than those mentioned.**

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not submit it last minute
- try to keep one submission at a time
