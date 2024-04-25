import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { CreditCardIcon, PlusIcon, WalletIcon } from "@/assets/icons/IconComponents"
import { Header } from "@/features/Header"

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main className="flex-1 p-4 md:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Update your profile information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input defaultValue="John Doe" id="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input defaultValue="john.doe@example.com" id="email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Enter new password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Manage your payment methods.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-1">
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                <CreditCardIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Credit Card</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Visa ending in 1234</p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md bg-gray-100 p-2 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-50">
                <WalletIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">PayPal</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                <PlusIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Add Payment Method</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Add a new payment method.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" />
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="two-factor" />
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="destructive">Delete Account</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  )
}
