import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogContent, Dialog } from "@/components/ui/dialog"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FlagIcon } from "@/assets/icons/IconComponents"
import { Separator } from "@/components/ui/separator"

export const ReportedIssueButtonEvent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 underline text-gray-500 hover:text-inherit dark:text-gray-400" variant="link">
          <FlagIcon className="w-4 h-4" />
          Report an issue
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report an issue</DialogTitle>
          <DialogDescription>This won't be shared with the organizers.</DialogDescription>
          <div className="py-6">
            <form>
              <RadioGroup>
                <Label
                  className="text-base font-normal flex items-center w-full cursor-pointer"
                  htmlFor="inaccurate"
                >
                  It's inaccurate or incorrect
                  <RadioGroupItem className="ml-auto" id="inaccurate" value="inaccurate" />
                </Label>
                <Separator className="my-4" />
                <Label
                  className="text-base font-normal flex items-center w-full cursor-pointer"
                  htmlFor="not_an_event"
                >
                  It's not an event
                  <RadioGroupItem className="ml-auto" id="not_an_event" value="not_an_event" />
                </Label>
                <Separator className="my-4" />
                <Label
                  className="text-base font-normal flex items-center w-full cursor-pointer"
                  htmlFor="scam"
                />
              </RadioGroup>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
};
