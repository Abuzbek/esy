# Laravel + React Project

## Prerequisites

Before starting, ensure you have the following installed:

- PHP (8.2) / Laravel (11.9)
- Composer 
- Node.js & NPM or Yarn
- PSQL

## Getting Started

To get a local copy up and running, follow these steps:

### Backend Setup (Laravel)

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Abuzbek/esy.git
   ```

2. **Navigate into the project directory:**

   ```sh
   cd esy/server
   ```

3. **Install Composer dependencies:**

   ```sh
   composer install
   ```

4. **Copy `.env.example` to `.env`:**

   ```sh
   cp .env.example .env
   ```

5. **Generate application key:**

   ```sh
   php artisan key:generate
   ```

6. **Configure `.env` file:**

   Update `.env` file with your database credentials and other settings.

7. **Run database migrations and seed (if applicable):**

   ```sh
   php artisan migrate --seed
   ```

### Frontend Setup (Vite)

1. **Navigate to the frontend directory:**

   ```sh
   cd esy/client
   ```

2. **Install Node.js dependencies using NPM:**

   ```sh
   npm install
   ```

   or using Yarn:

   ```sh
   yarn
   ```

### Running the Application

1. **Start the Laravel development server:**

   ```sh
   php artisan serve
   ```

   Access the Laravel application at `http://localhost:8000` in your web browser.

2. **Start the Vite development server for frontend:**

   ```sh
   cd esy/frontend
   npm run dev
   ```

   The Vite server typically runs at `http://localhost:5173`. You can configure Vite's proxy or Laravel's CORS settings as needed for API requests.

## Additional Information

- **Environment configuration:** Customize `.env` file for local development, staging, or production environments.
- **Deployment:** Deploy your Laravel application and Vite frontend to a hosting service or server.
- **Maintenance:** Keep Composer dependencies updated (`composer update`), run migrations (`php artisan migrate`), and manage frontend dependencies (`npm/yarn install`).

## Contributing

Contributions are welcome. For major changes, please open an issue first to discuss what you would like to change.
