import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { ChevronRightIcon } from "@/assets/icons/IconComponents"

export const DescriptionSelectedEvent = () => {
  return (
    <div className="prose">
      <p>
        The Olympic Games are the world's premier sporting event, bringing together the best athletes from around
        the globe to compete in a celebration of human achievement and international unity.
      </p>
      <p>
        In 2024, the Olympic Games return to Paris, the iconic French capital that previously hosted the Games in
        1900 and 1924. This historic city will provide a stunning backdrop for the world's greatest athletes to
        showcase their skills and determination.
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
