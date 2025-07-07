import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Culinary Arts',
  description: 'Discover our story, mission, and the passion behind Culinary Arts. Learn about our services and commitment to culinary excellence.',
  keywords: ['culinary', 'about us', 'cooking', 'recipes', 'food art'],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-sans font-bold text-foreground mb-6">
            Our Culinary Journey
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Founded in 2015, Culinary Arts has been revolutionizing home cooking through innovative recipes and expert guidance.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-sans font-semibold text-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe everyone deserves access to gourmet cooking experiences. Our team of world-class chefs creates accessible recipes without compromising on flavor or quality.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden" />
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-sans font-semibold text-foreground text-center mb-8">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Recipes', 'Tutorials', 'Community'].map((service) => (
              <article key={service} className="p-6 bg-background rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-sans font-medium text-foreground mb-3">
                  {service}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service === 'Recipes' ? 'Daily curated recipes with step-by-step instructions' 
                   : service === 'Tutorials' ? 'Video tutorials from professional chefs' 
                   : 'Global community of food enthusiasts'}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
