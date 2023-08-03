# Summary Component

The Summary component is a React functional component that displays a user summary fetched from the GitHub API. It shows the user's profile image, name, bio, GitHub profile URL, and the number of public repositories they have.

## How it works

The Summary component uses React hooks, `useEffect` and `useState`, to fetch the user data from the GitHub API and store it in the `userData` state. Once the data is fetched and available, it displays the user's profile information on the page.

## Features

- Fetches user data from the GitHub API using Axios.
- Displays the user's profile image, name, bio, GitHub profile URL, and public repositories count.
- Provides a loading state while fetching the data.

## Tech Stack

- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API requests.

## How to Use

To use this component in your project:

1. Install the required dependencies (if not already installed):
   - React: `npm install react` or `yarn add react`
   - Axios: `npm install axios` or `yarn add axios`

2. Copy the `Summary` component code into your project.

3. Customize the component as needed, such as styling or modifying the API URL to fetch data for a different GitHub user.

4. Use the `Summary` component wherever you want to display the GitHub user's summary.

## Example

```tsx
import React from 'react';
import { Summary } from './Summary';

function App() {
  return (
    <div>
      <h1>GitHub User Summary</h1>
      <Summary />
    </div>
  );
}

export default App;


This component was created for educational purposes and as a demonstration of using React and Axios to fetch data from the GitHub API. It is not intended for production use.
