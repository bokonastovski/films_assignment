# Star Wars Films App

This is a React application that fetches and displays Star Wars films using GraphQL via Apollo Client. The app allows users to filter films by director and release year, and it provides a sorting feature for the films.

## Technologies Used

- React
- TypeScript
- Apollo Client (for GraphQL data fetching)
- Ant Design (UI components)
- Context API (for language settings)

## Setup Instructions

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**
2.  `git clone https://github.com/your-username/star-wars-films-app.git`  
    `cd star-wars-films-app`
3.  **Install dependencies:**

    Using npm:  
    `npm install`

    Or using yarn:  
    `yarn install`

4.  **Start the development server:**

Using npm:  
 `npm run dev`

Or using yarn:  
 `yarn dev`

### Application Features

- **Film Listings:** Displays a list of Star Wars films with details such as episode, director, release date, and producers.
- **Filtering:** You can filter films by director and release year.
- **Sorting:** Films can be sorted by title or release date.
- **Infinite Scroll:** As you scroll, more films are loaded automatically.
- **Language Support:** The app supports both English and German. You can switch languages via the context.

### Apollo Client Configuration

The app uses Apollo Client to fetch data from the Star Wars GraphQL API.

- **API URL:** `https://swapi-graphql.netlify.app/.netlify/functions/index`
- The Apollo Client is configured in `apollo-client.ts`.

### Language Context

The language settings are managed using React's Context API. You can switch between English and German by interacting with the UI, and the language preference will be applied to the whole app.

### Customization

- To add more languages or modify existing translations, update the `translations.ts` file.
- If you need to modify the GraphQL queries, update `queries.ts`.
