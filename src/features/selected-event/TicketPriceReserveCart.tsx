import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card"
import { MinusIcon, PlusIcon } from "@/assets/icons/IconComponents"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
export const TicketPriceReserveCart = () => {

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            Ticket Prices
            <span className="text-sm text-gray-500 font-normal dark:text-gray-400"> (per person)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <form>
            <div className="grid gap-2">
              <div className="flex gap-6 pb-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="w-full flex-col h-auto items-start" variant="outline">
                      <span className="font-semibold uppercase text-[0.65rem]">Formules</span>
                      <span className="font-normal">Solo</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <div className="grid gap-2 p-4">
                      <div className="flex items-center justify-between">
                        <span>Solo</span>
                        <span className="font-semibold">€150</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Duo</span>
                        <span className="font-semibold">€300</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Familial</span>
                        <span className="font-semibold">€450</span>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <div className="flex items-center gap-2">
                  <Button className="w-12 h-12 grid place-items-center" variant="outline">
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <div className="font-semibold">2</div>
                  <Button className="w-12 h-12 grid place-items-center" variant="outline">
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 dark:text-gray-400">€150 x 2 tickets</div>
                  <div>€300</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 dark:text-gray-400">Service fee</div>
                  <div>€30</div>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <div className="font-semibold">Total before taxes</div>
                <div>€330</div>
              </div>
              <div>
                <Button className="w-full h-12" size="lg">
                  Reserve
                </Button>
              </div>
              <div className="text-sm text-gray-500 text-center dark:text-gray-400">You won't be charged yet</div>
            </div>
          </form>
        </CardContent>
      </Card >
    </>
  )
};
