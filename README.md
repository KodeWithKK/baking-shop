# Next.js NextAuth Project

Welcome to the Next.js NextAuth project! This project showcases the implementation of authentication and various key features using Next.js 14, NextAuth v5, Tailwind CSS, Shadcn UI, Prisma, and MongoDB.

## Getting Started

1. **Clone the repository:**

```bash
git clone git@github.com:diwashbhattarai999/Next-Auth-v5.git
```

2. **Change into the project directory:**

```bash
cd next-auth-v5
```

3. **Install dependencies:**

```bash
npm install
```

4. **Set up environment variables in .env file at root directory:**

```bash
DATABASE_URL = your-mongodb-url
GOOGLE_CLIENT_ID = your-google-client-id
GOOGLE_CLIENT_SECRET = your-google-client-secret
FACEBOOK_CLIENT_ID = your-facebook-client-id
FACEBOOK_CLIENT_SECRET = your-facebook-client-secret
TWITTER_CLIENT_ID = your-twitter-client-id
TWITTER_CLIENT_SECRET = your-twittert-client-secret
RESEND_API_KEY = your-resend-api-key
AUTH_SECRET = your-auth-secret-token
NEXT_PUBLIC_APP_URL = http://localhost:3000
```

5. **Run the development server:**

```bash
npm run dev
```

6. **Open your browser and navigate to http://localhost:3000 to view the project.**

## Tech Stack

- **Next.js 14**: The foundation for building React applications with server-side rendering and more.
- **Tailwind CSS**: A utility-first CSS framework for building modern designs.
- **Shadcn UI**: A UI component library for Next.js.
- **Prisma**: A modern database toolkit for TypeScript and Node.js.
- **MongoDB**: A NoSQL database for storing user data.

## Key Features

## Key Features

- 🔐 **Authentication:**

  - Next-auth v5 (Auth.js)
  - Credentials Provider
  - OAuth Provider (Google & GitHub)

- 🔒 **Security:**

  - Forgot password functionality
  - Email verification
  - Two-factor verification (2FA)

- 👥 **User Management:**

  - User roles (Admin & User)
  - Flexible login (Redirect or Modal)
  - Register, Forgot Password, Verification components

- 🧩 **Components & Utilities:**

  - Reusable Login and Logout buttons
  - Role Gate for access control
  - Middleware, session, and callback exploration
  - Hooks: useCurrentUser, useRole
  - Utilities: currentUser, currentRole

- 🌐 **Examples & Demonstrations:**

  - Server and client-side rendering examples
  - Render content based on roles
  - Protect API routes and server actions

- ⚙️ **Settings Page Functionality:**
  - Change email with new verification
  - Change password with old password confirmation
  - Enable/disable 2FA
  - Change user role (for development)
