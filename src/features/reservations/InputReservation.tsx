import { FC } from "react"

interface InputReservationProps {
    name: string
    label: string
    value: string
}

export const InputReservation: FC<InputReservationProps> = ({ name, label, value }) => {
    return (
        <div className="sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400" htmlFor={name}>
                {label}
            </label>
            <div className="mt-1">
                <input
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    disabled
                    id={name}
                    name={name}
                    type="text"
                    value={value}
                />
            </div>
        </div>
    )
}
