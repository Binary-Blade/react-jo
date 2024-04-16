export const CounterDate = () => {
    return (
        <section className="w-full py-16 border-t">
            <div className="container grid gap-6 px-4 text-center sm:grid-cols-3 md:px-6 lg:gap-10">
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-[3.5rem] 2xl:text-[4.5rem]">
                        12
                        <span className="sm:inline-block sm:ml-1">Days</span>
                    </h2>
                    <p className="text-sm font-medium tracking-wide/[-0.025] dark:text-gray-400">
                        Until the opening ceremony
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-[3.5rem] 2xl:text-[4.5rem]">
                        18
                        <span className="sm:inline-block sm:ml-1">Hours</span>
                    </h2>
                    <p className="text-sm font-medium tracking-wide/[-0.025] dark:text-gray-400">Until the first event</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-[3.5rem] 2xl:text-[4.5rem]">
                        42
                        <span className="sm:inline-block sm:ml-1">Medals</span>
                    </h2>
                    <p className="text-sm font-medium tracking-wide/[-0.025] dark:text-gray-400">Awarded today</p>
                </div>
            </div>
        </section>
    )
}
