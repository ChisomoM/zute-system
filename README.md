# Zute System

A comprehensive React-based system for managing educational or organizational operations, featuring admin dashboards, teacher interfaces, and public-facing pages, built with TypeScript, Vite, and Tailwind CSS.

## Features

- **Authentication System**: Login/logout with Firebase Auth, protected routes based on account types (admin, teacher, public)
- **Admin Dashboard**: Comprehensive admin interface with sidebar navigation, user management, approvals, region management, reports, and analytics
- **Teacher Dashboard**: Dedicated interface for teachers to manage affiliates, finances, and personal data
- **Public Pages**: Landing page, join forms, about, contact, and other public-facing content
- **SEO Optimization**: Generic SEO component for managing meta tags, Open Graph, and Twitter Cards
- **Responsive Design**: Mobile-first design using Tailwind CSS and Radix UI components
- **TypeScript**: Full type safety throughout the application
- **Modern Tooling**: Vite for fast development, ESLint for code quality, and pnpm for package management
- **Routing**: Client-side routing with React Router, including nested routes and protected access
- **Firebase Integration**: Authentication, database (Firestore), and file storage

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, Radix UI
- **Routing**: React Router DOM
- **State Management**: React Context (for auth)
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Icons**: Lucide React
- **Forms**: Custom form components with validation
- **Notifications**: Sonner for toast notifications
- **File Handling**: Cloudinary for image uploads, PDF/CSV exports

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ChisomoM/zute-system.git
   cd zute-system
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Linting

```bash
pnpm lint
```

## Project Structure

```
src/
├── (admin)/
│   └── admin/
│       ├── Admin.tsx                 # Main admin dashboard
│       ├── ApprovalsPage.tsx         # Approvals management
│       ├── JoinApplications.tsx      # Join application reviews
│       ├── LoginPage.tsx             # Admin login
│       ├── Referrals.tsx             # Referral management
│       ├── RegionManagement.tsx      # Region administration
│       ├── Reports.tsx               # Reports and analytics
│       ├── TeacherManagement.tsx     # Teacher management
│       └── TeamManagement.tsx        # Team management
├── (teacher)/
│   └── dashboard/
│       ├── AffiliatesPage.tsx        # Affiliate management
│       ├── FinancesPage.tsx          # Financial data
│       └── TeacherDashboard.tsx      # Teacher dashboard
├── (public)/
│   ├── about/
│   │   └── AboutPage.tsx             # About page
│   ├── contact/
│   │   └── contact-us.tsx            # Contact page
│   ├── ecos/
│   │   └── EcosPage.tsx              # ECOS page
│   ├── home/
│   │   ├── home.tsx                  # Public home page
│   │   └── components/               # Home page components
│   └── join/
│       └── JoinPage.tsx              # Join Zute form
├── components/
│   ├── ui/                           # Reusable UI components (shadcn/ui)
│   ├── auth/                         # Authentication components
│   ├── FileGallery.tsx               # File gallery component
│   ├── FileUpload.tsx                # File upload component
│   ├── footer.tsx                    # Site footer
│   ├── JoinZuteForm.tsx              # Join form component
│   ├── Login.tsx                     # Login component
│   ├── navbar.tsx                    # Navigation bar
│   ├── PageHero.tsx                  # Page hero component
│   ├── ScrollToTop.tsx               # Scroll to top utility
│   ├── SEO.tsx                       # SEO component
│   └── TopNavBar.tsx                 # Top navigation bar
├── layouts/
│   ├── AdminLayout.tsx               # Layout for admin pages
│   ├── MainLayout.tsx                # Layout for public pages
│   └── TeacherLayout.tsx             # Layout for teacher pages
├── lib/
│   ├── api/                          # API utilities and services
│   ├── auth/                         # Authentication logic
│   ├── context/                      # React contexts (Auth)
│   ├── firebase.ts                   # Firebase initialization
│   ├── permissions.tsx               # Role-based permissions
│   ├── ProtectedRoute.tsx            # Protected route component
│   └── utils.ts                      # Utility functions
├── types/
│   ├── admin.ts                      # Admin-related types
│   ├── auth.ts                       # Authentication types
│   └── join-zute.ts                  # Join form types
└── assets/                           # Static assets (logos, images)
```

## Key Components

### Authentication
- **AuthContext**: Manages user authentication state with Firebase
- **ProtectedRoute**: Wraps routes that require authentication and role-based access
- **LoginForm**: Handles user login with email/password

### Routing
- Public routes: `/` (home), `/join`, `/about`, `/contact`
- Admin routes: `/admin/*` (protected, admin role)
- Teacher routes: `/teacher/*` (protected, teacher role)

### UI Components
- Built with Radix UI primitives for accessibility
- Custom components for forms, navigation, and layouts
- Responsive design with Tailwind CSS

### Permissions
- Role-based access control with `permissions.tsx`
- Supports admin, teacher, and public roles

### SEO Component

The application includes a generic SEO component for managing meta tags, Open Graph, and Twitter Cards. It's built using `react-helmet-async` for dynamic document head management.

**Usage:**

```tsx
import SEO from '../components/SEO';

function MyPage() {
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description for search engines"
        keywords="keyword1, keyword2, keyword3"
        image="https://example.com/image.jpg"
        url="https://example.com/page"
        type="website"
        siteName="Zute System"
        twitterCard="summary_large_image"
        canonical="https://example.com/page"
      />
      {/* Your page content */}
    </>
  );
}
```

**Props:**

- `title`: Page title (defaults to "Default Title")
- `description`: Meta description
- `keywords`: Comma-separated keywords
- `image`: URL for Open Graph/Twitter image
- `url`: Canonical URL (defaults to current URL)
- `type`: Open Graph type (defaults to "website")
- `siteName`: Site name for Open Graph
- `twitterCard`: Twitter card type (defaults to "summary_large_image")
- `canonical`: Canonical URL
- `children`: Additional head elements

## Customization

### Adding New Pages
1. Create your component in the appropriate folder (`(public)`, `(admin)`, or `(teacher)`)
2. Add the route to `src/App.tsx`
3. Use `ProtectedRoute` with appropriate permissions if authentication is required

### Styling
- Modify `tailwind.config.js` for custom themes
- Update component classes directly or use CSS modules
- Global styles in `src/index.css`

### API Integration
- Update services in `src/lib/api/`
- Modify API calls in `src/lib/api/crud.tsx`
- Adjust authentication logic in `src/lib/context/AuthContext.tsx`
- Use Firebase for backend services (see Firebase Integration section)

## Firebase Integration

This project uses Firebase for authentication, database, and storage.

### Setup Firebase

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication, Firestore, and Storage as needed
3. Get your Firebase config from Project Settings

### Environment Variables

Add to your `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Using Firebase Auth

```tsx
import { signInWithFirebase, signUpWithFirebase, signOutFromFirebase } from '@/lib/firebase';

const handleLogin = async () => {
  try {
    const user = await signInWithFirebase(email, password);
    console.log('Logged in:', user);
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

### Using Firestore

```tsx
import { FirebaseFirestore } from '@/lib/firebase';

const getUsers = async () => {
  const users = await FirebaseFirestore.getCollection('users');
  console.log(users);
};

const addUser = async () => {
  const userId = await FirebaseFirestore.addDocument('users', {
    name: 'John Doe',
    email: 'john@example.com'
  });
  console.log('Added user with ID:', userId);
};
```

### Using Storage

```tsx
import { FirebaseStorage } from '@/lib/firebase';

const uploadFile = async (file: File) => {
  const downloadURL = await FirebaseStorage.uploadFile(`uploads/${file.name}`, file);
  console.log('File uploaded:', downloadURL);
};
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions or issues, please open an issue on GitHub or contact the maintainers. 
 