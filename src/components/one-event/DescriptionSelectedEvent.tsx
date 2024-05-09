import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { ChevronRightIcon } from "@/assets/icons/IconComponents"

// TODO: CREATE TWO DESCRIPTION BACKEND 

export const DescriptionSelectedEvent = ({ description }) => {
  return (
    <div className="prose">
      <p>
        {description}
      </p>
      <Collapsible className="py-4">
        <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
          Show more
          <ChevronRightIcon className="w-4 h-4 translate-y-px transition-all" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p>
            From the iconic Olympic Stadium to the picturesque venues along the Seine River, Paris 2024 promises
            to be a truly unforgettable experience. Witness the drama, the passion, and the triumph of the Olympic
            Games in one of the world's most beautiful cities.
          </p>
          <p>
            Don't miss your chance to be a part of this historic event. Secure your tickets today and join
            millions of fans from around the world in celebrating the Olympic spirit.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
