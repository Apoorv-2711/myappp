# Product List App

A modern, responsive product catalog application built with Next.js and TypeScript. This application displays products from DummyJSON API with advanced filtering capabilities including category selection, price range, and rating filters.

## ✨ Features

- **Product Display**: View a comprehensive list of products in an organized table format
- **Category Filtering**: Filter products by category using a dropdown selector
- **Price Range Filter**: Set minimum and maximum price ranges to narrow down product results
- **Rating Filter**: Filter products by minimum rating (0-5 stars)
- **Real-time Filtering**: All filters work together in real-time to provide instant results
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly experience
- **Loading States**: Smooth loading indicators while fetching data
- **Modern UI**: Clean, professional interface with hover effects and proper spacing

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.4.5](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime**: React 19.1.0
- **API**: [DummyJSON Products API](https://dummyjson.com/)
- **Build Tool**: Turbopack (for faster development)

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine (version 18 or higher recommended).

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd myappp
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The page auto-updates as you edit the files. Start by modifying `app/page.tsx` or `components/data-list.tsx`.

## 📁 Project Structure

```
myappp/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx            # Home page
├── components/
│   └── data-list.tsx       # Main product list component
├── public/                 # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Usage

1. **Browse Products**: The application loads with all available products displayed in a table
2. **Filter by Category**: Use the dropdown menu to select a specific product category
3. **Set Price Range**: Enter minimum and/or maximum price values to filter by price
4. **Filter by Rating**: Set a minimum rating to show only highly-rated products
5. **Combine Filters**: Use multiple filters together for more precise results

## 📝 Available Scripts

```bash
npm run dev         # Start development server with Turbopack
npm run build       # Build the application for production
npm run start       # Start the production server
npm run lint        # Run ESLint for code quality checks
```

## 🌐 API Integration

This application integrates with the [DummyJSON API](https://dummyjson.com/) to fetch:

- Product data (up to 1000 products)
- Category list for filtering options

The API calls are made client-side using the native `fetch` API with proper error handling and loading states.

## 🎨 Styling

The application uses Tailwind CSS for styling with:

- Responsive design principles
- Hover effects and transitions
- Professional color scheme
- Clean table layouts
- Mobile-first approach

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Deployment Options

This Next.js application can be deployed on any platform that supports Node.js:

- Netlify
- Railway
- Heroku
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://react.dev/) - learn about React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about utility-first CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript
