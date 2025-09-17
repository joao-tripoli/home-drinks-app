import { UserButton } from '@clerk/nextjs';

export default function Profile() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Profile</h1>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-4 mb-6">
            <UserButton />
            <div>
              <h2 className="text-xl font-semibold">Account Settings</h2>
              <p className="text-muted-foreground">
                Manage your account preferences
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Display Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                placeholder="Enter your display name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded-lg bg-background h-24"
                placeholder="Tell us about yourself..."
              />
            </div>

            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
