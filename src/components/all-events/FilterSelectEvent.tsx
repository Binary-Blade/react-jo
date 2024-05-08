import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export const FilterSelectEvent = () => {
    return (
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Input className="max-w-lg flex-1" placeholder="Search events" type="text" />
            <Select defaultValue="all">
                <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by sport" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Sports</SelectItem>
                    <SelectItem value="athletics">Athletics</SelectItem>
                    <SelectItem value="swimming">Swimming</SelectItem>
                    <SelectItem value="gymnastics">Gymnastics</SelectItem>
                    <SelectItem value="cycling">Cycling</SelectItem>
                    <SelectItem value="rowing">Rowing</SelectItem>
                    <SelectItem value="fencing">Fencing</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
