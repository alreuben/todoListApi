# todoListApi
## To-do List API

A todo list API that uses Node.js to GET all todo tasks from a MongoDB database.



## Getting Started
### Dependencies
* node.js
* MongoDB



### Installing
How/where to download your program
Any modifications needed to be made to files/folders

### Executing program
How to run the program
Step-by-step bullets
 
Project Set-up
Clone the repo
Run `npm i express`


To run tests, from the project root run:
`npm tests`

## API documentation

### Return all to-do list tasks

* **URL**

`/todo`

* **Method:**

`GET`

* **URL Params**
 **Required:**

There are no required URL params

 **Optional:**

Can filter request route to see all complete or uncomplete todos

* `/todo?task_status=true`
* `/todo?task_status=false`


Can filter request route to see all todos via their priorty

* `/todo?task_priority=Low`
* `/todo?task_priority=Medium`
* `/todo?task_priority=High`

Can filter request route to see all complete or uncomplete todos along with their priorty

* `/todo?task_status=true&task_priority=Low`


 **Success Response:**

 * **Code:** 200 
   **Content:** 

```json
{
    "message": "All todo tasks",
    "data": [
    {
        "_id": "6435660a45610017e364ed93",
        "task_name": "pat dog",
        "task_status": false,
        "task_priority": "Low"
    },
    {
        "_id": "6435660a45610017e364ed94",
        "task_name": "wash dog",
        "task_status": false,
        "task_priority": "High"
    }
],
    "status": 200
}
 ```

* **Error Response:**

 **Code:** 400 BAD REQUEST ERROR 
 **Content:** `find content`
 
 
 
## Return a specific to-do list item

* **URL**

`/todo/6435660a45610017e364ed97`

* **Method:**

`GET`

* **URL Params**
 **Required:**

id=[numeric] - The id of the project to return

 **Optional:**

There are no optional URL params


 **Success Response:**

 * **Code:** 200 
   **Content:** 

```json
{
    "message": "All todo tasks",
    "data": [
    {
        "_id": "6435660a45610017e364ed93",
        "task_name": "pat dog",
        "task_status": false,
        "task_priority": "High"
    },
    {
        "_id": "6435660a45610017e364ed94",
        "task_name": "wash dog",
        "task_status": false,
        "task_priority": "High"
    }
],
    "status": 200
}
 ```


## Authors
* alreuben 

