# Netflix Clone
A comprehensive Netflix clone app developed using modern web technologies. The application includes:

### Features
- User Authentication: Secure login and signup using Firebase Authentication.
- Content Browsing: Fetches and displays trending movies and TV shows from The Movie Database (TMDB) API.
- Video Player: Integrated video player for watching selected content.
- Responsive Design: Styled with styled-components for a Netflix-like interface across devices.
- State Management: Uses Redux Toolkit for efficient state handling.
- Routing: Multi-page navigation with React Router for different sections (home, login, signup, player, TV shows, movies).

### Technologies Used
- Frontend: React 19, Vite
- Styling: Styled Components, Tailwind CSS
- State Management: Redux Toolkit
- Routing: React Router DOM
- API Integration: Axios for TMDB API calls
- Authentication: Firebase
- Icons: React Icons, Lucide React
- Carousels: React Slick
- Development Tools: ESLint, Vite plugins

### Project Structure
- `src/pages/`: Main pages (Netflix home, Login, SignUp, Player, etc.)
- `src/components/`: Reusable UI components (Header, MovieCard, Sliders, etc.)
- `src/store/`: Redux store configuration and API calls
- `src/utils/`: Firebase config and API keys
- `src/assets/`: Images, videos, and static assets
