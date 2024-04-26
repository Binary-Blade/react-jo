import { Progress } from "@/components/ui/progress";

export const PaymentProcessLoading = ({ progress }: any) => (

    <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 sm:py-8 sm:px-12">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold">Payment Processing</h1>
            <Progress value={progress} className="h-4 w-64" />
            <p className="text-center text-gray-500 dark:text-gray-400">
                Your payment is being processed. Please do not close this window.
            </p>
        </div>
        <div className="flex items-center gap-4">
            <p className="text-gray-500 dark:text-gray-400">Processing...</p>
        </div>
    </div>
)
