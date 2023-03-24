# citz-imb-full-stack-code-challenge-req97073

## Instructions for IS-24 Full Stack Developer Position

For this code challenge we are asking you to build a Web Application that tracks and manages Web Applications developed by the Province of BC as described by the User Stories below. 

In order to move forward to an interview, you must demonstrate development knowledge and implement the following in your Web Application:

* Github Repository
* Modern Backend API Framework 
    * **BONUS** Swagger Documentation
* Modern Frontend Web Application Framework
* Basic Documentation on how to effortlessly run your solution components on a local development machine


### Important!

* Read the Code Challenge Context, User Stories and Assessment Scoring for this challenge carefully. Development of the functionality described in these sections is what you are being marked against.

* Only solutions that build and run without warning or error will be considered, or solutions that take minimal effort to troubleshoot and resolve errors at build/runtime to move forward in this interview process.

* This code challenge does not require a database to accomplish your solution. In memory data storage or mock-data is highly encouraged.

* **BONUS** Swagger Documentation that allows a developer with no knowledge of your Web Application API to integrate with the endpoints that you have developed

## What to Submit

### Github Repository

Create a GitHub repository using your GitHub Account. The name of the repository should use the following convention:

your_first_name-your_last_name_-IS24-full_stack_competition_requisition_number

Your working solution should be present on the **main** branch of the repository. Please trim or remove any extraneous branches prior to submission.

Your submission to the marking panel should come in the form of a link to the repository you have created with your working solution.

Please send the link to your repository to christie.spiteri@gov.bc.ca

### API Component

The API component should use a modern framework or language (of your choice) to create API endpoints utilized by the Frontend component. All endpoints should originate from http://localhost:3000/api

**Example** A GET endpoint to retrieve a user with a specfic user id

http://localhost:3000/api/user/:userId

**User Authentication/Authorization is not required for the purposes of your solution.**

Your API should include at minimum the following functionality:
* A health endpoint that returns a http 200 reponse indicating your component is healthy
* All GET, POST, PUT and DELETE endpoints return the proper response codes when consumed

### Sample JSON Schema

```
    {
        projectId: VALUE,
        projectName: VALUE,
        description: VALUE,
        productOwnerFirstName: VALUE,
        productOwnerLastName: VALUE,
        tecnicalLeadFirstName: VALUE,
        technicalLeadLastName: VALUE,
    }
```

Pre-populate a JSON object within your solution with upto 40 sample projects. This will not be provided for your solution. Use of a random generator is encouraged.

### BONUS - Swagger Documentation **

All API endpoints that created in order to develop the required frontend application functionality should be documented via Swagger.

The Swagger documentation should be consumed by anyone building the project on their local workstation at http://localhost:3000/api/api-docs.

### Frontend Component

This component should be developed using a modern javascript framework (of your choice). This component should utilize endpoints developed in your API solution to
provide your Frontend component with basic CRUD actions described in the user stories provided. 

This component should be comprised of a basic table or datatable that displays information related to the Web Applications being listed.

## Code Challenge Context

The BC Government Ministry of Citizens' Services Information Management Branch (IMB) is currently trying to catalog current modern web applications in GitHub, as well as new projects that are coming up in the future. Currently there are 40 projects marked for modernization that need to be cataloged, as well as 3 projects that are either actively being developed or in a maintainence lifecyle.

Product owners have expressed the desire to communicate to the branch where these projects are housed (GitHub Repository). As IMB is currently driving a common component practice as well, Senior leadership would like to tag or label which projects use common component services like Keycloak, GC-Notify, Redis, RabbitMQ for example.

The user base for this application will include a wide array of technical skills, therefore making this application as simple as possible to display, create and edit information is being stressed by the IMB Senior Leadership Team (SLT).

## Personas

**Lisa** A director within IMB that is fairly new to the branch, but has worked with BC Government for 10+ years. She has experience with software development projects as she was previously a Product Owner for a project that had a successful production launch. She currently manages Service Design and SCRUM Master resources, and would like to know at a glance who is resourced on what project. She understands Agile philosophy and knows that a solution may take many iterations to achieve a desired state of functionality.

**Alan** A DevOps resource that has worked for IMB for the last 3 Years. He has worked on many projects, including from inception to maintainance lifecycles for IMB, setting up deployment pipelines and integrating technologies into projects that help increase developer velocity. He actively engages the developer community to understand their ever changing needs from project to project. Alan is currently looking to build a tool that allows product owners/stakeholders within IMB to understand resource utilization across all projects within IMB to help avoid developer/resource burn-out.

**Both IMB Employees** are looking for a tool that offers all users within IMB easily digestible data based on the breadth and depth of the many projects they currently develop and maintain, as well as projects that are on the horizon for IMB. Displaying exactly the right amount of information at a glance is paramount to both Lisa and Alan.

## User Stories

### User Story One

As Lisa, I want to be able to add a project to the list of projects that IMB is developing or maintaining.

**Acceptance Criteria**
* Given that I am Lisa
* And I am aware of a new development project within IMB
* When I go to the project dashboard
* I can click a button 
* And the application takes me to a basic "Create Project" form
* And I can click a submit button to save basic product data

### User Story Two

As Lisa, I want to see a list of all projects that IMB currently develops or maintains in a dashboard

**Acceptance Criteria**
* Given that I am Lisa
* And I am trying to see a list of all projects within IMB
* When I navigate to the application landing page
* I can see a list of all projects within IMB
* And all relevant information related to each project

### User Story Three

As Alan I want to be able to add/edit project related information

**Acceptance Criteria**
* Given that I am Alan
* And I want edit details related to a specific project
* When I click on an edit button found at the end of a row within a dashboard
* I am redirected to a simple form that displays all of a given projects details
* And allows me to edit and submit those such that they are persistent

## Questions

If you require further clarification on this code challenge, questions can be directed to the following email addresses
* craig.shutko@gov.bc.ca
* justin.hewitt@gov.bc.ca
* adam.kroon@gov.bc.ca

Emails should be responded to with best effort of being received during business hours (9am-5pm).
Outside of normal business hours will be best effort, normally within the next business day.

## Assessment Scoring

The following tables will be provided to you via email after marking of your solution is complete.

### Github Repository Component
| Rating                  | Criteria                                                                        |
|-------------------------|---------------------------------------------------------------------------------|
| Pass/Acceptable         | * Organized, easy to read                                                       |
|                         | * Documentation when required                                                   |
|                         | * Solution is present on main branch of repository                              |
|                         | * Extraneous branches removed/trimmed from repo                                 |
| Fail/Unacceptable       | * Any of the requirements of Pass/Acceptable are not met                        |

### Backend API Component
| Rating                  | Criteria                                                               |
|-------------------------|------------------------------------------------------------------------|
| Pass/Acceptable         | * RESTful                                                              |
|                         | * Endpoints return http responses required for given CRUD actions      |
|                         | * Basic commenting of your solution                                    |
| Fail/Unacceptable       | * More than one requirement of Pass/Acceptable are not met             |

### BONUS - API Swagger Documentation

| Rating                  | Criteria                                                                                                      |
|-------------------------|---------------------------------------------------------------------------------------------------------------|
| Pass/Acceptable         | * Swagger documentation present for all endpoints developed, and served at http://localhost:3000/api/api-docs |
| Fail/Unacceptable       | * Swagger Documentation is incomplete or not present                                                          |

### Frontend Component
| Rating                  | Criteria                                                                                                               |
|-------------------------|------------------------------------------------------------------------------------------------------------------------|
| Pass/Acceptable         | * Microservice component                                                                                               |
|                         | * Functional or Class based component design based on requirement                                                      | 
|                         | * Appropriate naming of components, elements, classes, etc.                                                            |
|                         | * Basic error handling when interacting with API (ex// API is not present or healthy)                                  |
|                         | * Basic commenting of your solution                                                                                    | 
|                         | * Utilizes API to perform required GET, PUT, POST or DELETE actions when required (3 of 4 CRUD actions is acceptable)  |
|                         | * Acceptance criteria for User Story 1 is complete                                                                     |
|                         | * Acceptance criteria for User Story 2 is complete                                                                     |
|                         | * Acceptance criteria for User Story 3 is complete                                                                     |
| Fail/Unacceptable       | * More than one requirement of Pass/Acceptable are not met                                                             |
