# Redux Toolkit Demo (Lab 06)

This project is a ReactJS application built with Vite and designed to demonstrate how to manage application state using **Redux Toolkit** and render user interfaces using **React-Bootstrap**.

## Features

The application consists of three main features:
1. **Counter**: Synchronous basic state management for a numeric counter.
2. **Todos**: State management for an array of items supporting add, toggle, and delete operations.
3. **Posts**: Asynchronous API fetching from JSONPlaceholder using `createAsyncThunk` with loading states and error alerts.

## Tech Stack

- React 18 + Vite
- JavaScript
- `@reduxjs/toolkit` & `react-redux`
- `react-bootstrap` & `bootstrap`

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Navigate to the project folder:
   ```bash
   cd redux-rtk-demo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To run the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To compile the application for production:
```bash
npm run build
```
The output files will be in the `dist/` directory.
