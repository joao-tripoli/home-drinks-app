import {
  ArrowRight,
  BookOpen,
  Edit3,
  Plus,
  Smartphone,
  Star,
  Users,
  Wine,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-chart-1/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-primary/20">
                <Wine className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Your Personal
              <span className="text-primary block">Drink Library</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create, manage, and share your collection of drinks. Perfect for
              hosting parties with custom menus your guests can order from.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Host
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From building your drink collection to serving guests, we've got
              you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-lg bg-chart-1/20 w-fit mb-6">
                <Plus className="h-8 w-8 text-chart-1" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Add & Create Drinks
              </h3>
              <p className="text-muted-foreground">
                Build your personal library by adding drinks from around the
                world or creating your own unique recipes with custom
                ingredients and instructions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-lg bg-chart-2/20 w-fit mb-6">
                <Edit3 className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Edit & Organize
              </h3>
              <p className="text-muted-foreground">
                Keep your collection organized with categories, tags, and
                ratings. Easily edit drink details, ingredients, and preparation
                methods.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-lg bg-chart-3/20 w-fit mb-6">
                <Users className="h-8 w-8 text-chart-3" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Party Mode
              </h3>
              <p className="text-muted-foreground">
                Create custom drink menus for your events. Your guests can
                browse and order drinks directly from their phones for a
                seamless experience.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-lg bg-chart-4/20 w-fit mb-6">
                <Smartphone className="h-8 w-8 text-chart-4" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Mobile Friendly
              </h3>
              <p className="text-muted-foreground">
                Access your drink library anywhere. Perfect for quick reference
                while shopping for ingredients or showing off your collection.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-lg bg-chart-5/20 w-fit mb-6">
                <BookOpen className="h-8 w-8 text-chart-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Rich Details
              </h3>
              <p className="text-muted-foreground">
                Store comprehensive information including ingredients,
                measurements, preparation steps, glassware, and personal tasting
                notes.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-lg bg-primary/20 w-fit mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Rate & Review
              </h3>
              <p className="text-muted-foreground">
                Rate your drinks and add personal notes. Track your favorites
                and remember what worked well for different occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in minutes and be hosting like a pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Build Your Library
              </h3>
              <p className="text-muted-foreground">
                Start by adding your favorite drinks. Import from popular
                recipes or create your own custom concoctions with detailed
                ingredients and instructions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Organize & Customize
              </h3>
              <p className="text-muted-foreground">
                Categorize your drinks by type, occasion, or difficulty. Add
                ratings, notes, and tags to make finding the perfect drink
                effortless.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Host & Share
              </h3>
              <p className="text-muted-foreground">
                Create custom menus for your events. Share a simple link with
                guests so they can browse and order drinks directly from their
                phones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Build Your Drink Library?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of hosts who've elevated their entertaining game with
            Home Drinks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
              Start Building Your Library
            </button>
            <button className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-2 rounded-lg bg-primary/20">
                <Wine className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Home Drinks
            </h3>
            <p className="text-muted-foreground mb-6">
              Your personal drink library for every occasion
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
