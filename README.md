# More In - Food Ordering Web Application

A modern, bilingual food ordering platform built with Next.js 15, featuring customer and admin portals with multi-store management capabilities.

## 🌟 Features

### Customer Portal
- **Bilingual Support**: Arabic (RTL) and English (LTR) with seamless language switching
- **Store Selection**: Browse and select from multiple restaurant locations
- **Menu Browsing**: View categorized menus with product details and availability
- **Shopping Cart**: Add items, modify quantities, and persist cart across sessions
- **Checkout Flow**: Complete order process with delivery/pickup options
- **Payment Integration**: Stripe payment processing (test mode)
- **Order Tracking**: Real-time order status and confirmation

### Admin Portal
- **Dashboard**: Overview of sales, orders, and key metrics
- **Store Management**: CRUD operations for restaurant locations
- **Menu Management**: Manage categories, products, and pricing
- **Order Management**: View and update order statuses
- **Multi-store Support**: Manage multiple restaurant locations

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Icon library

### Backend & Database
- **Prisma ORM** - Database toolkit and query builder
- **PostgreSQL** - Primary database
- **Next.js API Routes** - Backend API endpoints

### Payment & Services
- **Stripe** - Payment processing (test mode)
- **Vercel** - Deployment platform

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd more-in-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/more_in_db"
   
   # Stripe (Test Mode)
   STRIPE_PUBLISHABLE_KEY_TEST="pk_test_..."
   STRIPE_SECRET_KEY_TEST="sk_test_..."
   
   # NextAuth (if implementing authentication)
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # App Configuration
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # Seed the database (optional)
   npx prisma db seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── page.tsx       # Home page
│   │   └── store/         # Store-specific pages
│   ├── admin/             # Admin portal
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── customer/          # Customer-facing components
│   └── admin/             # Admin portal components
├── lib/                   # Utility libraries
│   ├── db.ts              # Prisma client
│   ├── stripe.ts          # Stripe configuration
│   └── translations.ts    # i18n utilities
├── locales/               # Translation files
│   ├── ar.json            # Arabic translations
│   └── en.json            # English translations
├── types/                 # TypeScript type definitions
└── prisma/                # Database schema and migrations
    ├── schema.prisma      # Database schema
    └── seed.ts            # Database seeding
```

## 🌐 Internationalization

The application supports Arabic and English with:
- **RTL/LTR Layout**: Automatic direction switching
- **Dynamic Translations**: JSON-based translation system
- **URL Routing**: Locale-based routing (`/ar/`, `/en/`)
- **Font Support**: Optimized fonts for both languages

## 💳 Payment Integration

Stripe integration includes:
- **Test Mode**: Safe testing environment
- **Multiple Payment Methods**: Cards, digital wallets
- **Order Processing**: Secure payment handling
- **Webhook Support**: Real-time payment status updates

## 🗄️ Database Schema

Key models:
- **Store**: Restaurant locations and details
- **Category**: Menu categories (bilingual)
- **Product**: Menu items with pricing and availability
- **Order**: Customer orders with status tracking
- **OrderItem**: Individual order line items
- **Admin**: Admin user management

## 🔧 Configuration

### Tailwind CSS
Custom configuration with:
- **Design System**: Consistent color palette and typography
- **RTL Support**: Automatic RTL layout handling
- **Component Variants**: Reusable component styles

### Next.js
Optimized configuration:
- **Turbopack**: Fast development builds
- **Image Optimization**: Automatic image optimization
- **API Routes**: Backend functionality

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Enhanced tablet experience
- **Desktop**: Full desktop functionality
- **Cross-Browser**: Compatible with modern browsers

## 🚀 Deployment

### Vercel
1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

## 📝 Development Workflow

1. **Feature Development**: Create feature branches
2. **Code Quality**: ESLint and TypeScript checks
3. **Testing**: Manual testing and type safety
4. **Deployment**: Automatic deployment via Vercel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments

## 🔮 Future Enhancements

- [ ] Real-time order tracking
- [ ] Push notifications
- [ ] Advanced analytics
- [ ] Mobile app development
- [ ] Multi-language expansion
- [ ] Advanced payment options

---

**More In** - Delivering delicious food with modern technology 🍕📱
