# Property Management System
## Getting Started

This project utilizes React for the frontend, Tailwind CSS for styling, and Django for the backend.

## Frontend Setup

### React Installation

Make sure you have Node.js and npm installed. If not, download and install Node.js from here, <https://nodejs.org/en/download>.

#### Create a project directory
```bash
mkdir Project
cd Project
mkdir Frontend
cd Frontend
```
#### Initialize your React app
Initialize React app using Create React App.
```bash
npx create-react-app pms
cd pms
npm start
```
### Additional Frontend Dependencies
#### Install Axios

Install Axios for making HTTP requests from the frontend to the backend.

```bash
npm install axios
```
#### Install React-router

Set up React Router for handling routing in your application.

```bash
npm install react-router-dom
```
#### Install FontAwesome Icons

Enhance your app’s visual appeal with FontAwesome icons.

```bash
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```
#### Intergrating Tailwindcss

Tailwind CSS is a utility-first CSS framework that provides a set of pre-built, atomic-level utility classes to help you quickly build user interfaces.

##### Install Tailwindcss

###### Install tailwindcss via npm.
```bash
npm install -D tailwindcss
```
###### Generate your tailwind.config.js file:
```bash
npx tailwindcss init
```
##### Configure template paths
Configure template paths in tailwindcss.config.js:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
```
##### Additional tailwindcss plugin
```bash
npm install tailwind-scrollbar
```
##### Add Tailwind directives to index.css
In your index.css file, include the following directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Run frontend 
```bash
npm run start
```


