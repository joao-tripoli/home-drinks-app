import { UserButton } from '@clerk/nextjs';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <UserButton />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-2">My Drinks</h2>
            <p className="text-muted-foreground">0 drinks in your library</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <p className="text-muted-foreground">No recent activity</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-2">Favorites</h2>
            <p className="text-muted-foreground">0 favorite drinks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
