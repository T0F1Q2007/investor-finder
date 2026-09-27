# FoundersMatch

> Find the right investors for your startup. Connect with local and global partners who understand your vision.

FoundersMatch is a kinetic, 3D-integrated web application designed to help startup CEOs find and evaluate potential investors in their specific region and industry.

## Features

- **Intelligent Discovery**: A two-step search flow that first identifies your industry category, and then targets the search by country (auto-detecting your current location).
- **Interactive 3D Globe**: Built with Three.js, a rotating interactive globe serves as the hero background, visualizing the global network of investors.
- **Kinetic Scrolling**: Utilizes GSAP ScrollTrigger to translate vertical scrolling into horizontal reveals of matched investor profiles, providing a tactile, premium browsing experience.
- **Detailed Profiles**: Investor cards display crucial information such as key startups invested in, current projects, companies, net worth, and a brief biography.
- **High-Performance Architecture**: Built on Next.js App Router with React Server Components where applicable, ensuring fast loading states and SEO readiness.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Architecture

This project is built using:
- **Next.js** for the React framework
- **Tailwind CSS** for styling
- **Three.js** for the 3D globe visualization
- **GSAP** for advanced kinetic scrolling and animations
- **Lucide React** for iconography

The codebase adheres strictly to rigorous design and accessibility guidelines, ensuring functional completeness, high color contrast, and proper keyboard navigation capabilities.

## License

MIT
