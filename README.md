
# Woofer - Twitter for Dogs

A basic twitter clone built to demonstrate the full stack 🥞 (client, server, database).

With the following features:

* Dogs can send a woof 
* Dogs can see all woogs that have been sent 🐦


![Woofer](assets/woofer.png)

## Objectives

* [ ] 📝 Diagram the Full Stack
* [x] 🔎 Differentiate between Client and Server
* [x] ⌨️ Get user input on the Client
* [x] ➡️ Send user input from the client with fetch to the server
* [x] 🗃 Store data in a database
* [x] 🔍 Retrieve data from a database on the Server
* [x] ⬅️ Retrieve data from a server on the client using Fetch
* [x] 🙈 Hide/Show elements on the client
* [x] ✨ Add elements to the page on the client
* [ ] 🚀 Deploy the client with now.sh
* [ ] 🚀 Deploy the database with mlab
* [ ] 🚀 Deploy the server with now.sh

## Front-end

* [x] Create client folder
* [x] Setup index.html
* [x] Bring in Skeleton CSS
  * http://getskeleton.com/
  * https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
* [x] Create Header
* [x] Create form
  * [x] Name
  * [x] Content
  * [x] u-full-width to both inputs
* [x] Listen for form submit
* [x] Hide the form
* [x] Show loading spinner
* [x] Get data from form and log it
* ✅ Get user input on the Client
* ✅ Hide/Show elements on the client

## Back-end

* [x] Create server folder
* [x] npm init -y
* [x] npm install express morgan
* [x] Setup index.js
* [x] Add GET / route
* [x] Add POST /woofs route
  * [x] log out req.body

## Front-end

* [x] fetch POST /woofs with form data
* [x] See the CORS error and revel in this moment
* ✅ Send user input from the client with fetch to the server

## Back-end

* [x] npm install cors
* [x] Make sure the server is recieving the data
* [x] Add JSON body parser middleware
* [x] Validate name and content
  * [x] Must be a string
  * [x] Cannot be empty
* [x] If not valid
  * [x] Error code 422
  * [x] Invalid woof, must contain name and content
* [x] Setup DB Connection
  * [x] npm install monk
  * [x] connect to db
  * [x] create document collection (woofs)
* [x] If Valid
  * [x] Create woof object with
    * [x] name, content, created_date
  * [x] Insert into DB
  * [x] Respond with created woof object
* ✅ Store data in a database

## Front-end

* [ ] Log out created woof after POST request
* [ ] Show the form
* [ ] Hide loading spinner

## Back-end

* [ ] GET /woofs
  * [ ] Respond with woofs from DB
* ✅ Retrieve data from a database on the Server

## Front-end

* [ ] fetch GET /woofs
  * [ ] Iterate over array
  * [ ] Append each to page
  * [ ] Reverse before appending
  * [ ] Show the form
  * [ ] Hide loading spinner
* [ ] fetch GET /woofs after creating a woof
* ✅ Retrieve data from a server on the client using Fetch
* ✅ Hide/Show elements on the client
* ✅ Add elements to the page on the client

## Back-end

* [x] npm install bad-words
  * [x] Use filter before inserting into DB
* [x] npm install express-rate-limit
  * [x] Limit to 1 request every 15 seconds

## Deploy

* ✅ Deploy server with vercel
  * [x] Setup environment variables
    * [x] Database connection
      * process.env.MONGO_URI
  * ✅ Show mlab
  * [ ] Deploy with environment variable
    * vercel -e MONGO_URI=@woofer-db
  * [ ] Add alias
* ✅ Deploy client folder with vercel
  * [ ] Set API_URL based on hostname

## What's next?

* Add comments/replies to a woof
* User Accounts
  * Don't just have the user enter their name
  * Sign up/Login
* User Profiles
  - Only show woof from a given user
* Search Woof
* Hashtags
* User @mentions
* Realtime feed of woof
