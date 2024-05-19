import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';
import { ChevronRightIcon } from '@/components/ui/IconComponents';
import { FC } from 'react';

type DescriptionSelectedEventProps = {
  shortDescription: string | undefined;
  longDescription: string | undefined;
};

export const DescriptionSelectedEvent: FC<DescriptionSelectedEventProps> = ({
  shortDescription,
  longDescription
}) => {
  return (
    <div className="prose">
      <p>{shortDescription}</p>
      <Collapsible className="py-4">
        <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
          Voir plus
          <ChevronRightIcon className="w-4 h-4 translate-y-px transition-all" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p>{longDescription}</p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
