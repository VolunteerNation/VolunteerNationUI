## Volunteer Nation UI CEN3031 University of Florida Fall 2020

Just a Simple React and Material UI App 

## To Run Locally
- Install `node` and `npm` with OS package manager

- Clone down this repository.
  - `git clone https://github.com/VolunteerNation/VolunteerNationUI`

- Install local libraries
  - `npm install`

- Start Server:
  - `npm start`

Browser will open automatically to `localhost:3000`  

By default UI points at API running at https://volunteernation-api.herokuapp.com/.

Change `API_REMOTE_HOST` to your remote API hostname.
> src/Util/util.js
```js
const API_REMOTE_HOST = 'https://volunteernation-api.herokuapp.com';
```
