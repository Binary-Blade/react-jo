import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';
import { ChevronRightIcon } from '@/components/ui/IconComponents';

interface DescriptionSelectedEventProps {
  shortDescription: string | undefined;
  longDescription: string | undefined;
}

/**
 * `DescriptionCollapsible` component displays a short description with a collapsible section for the long description.
 * It includes a trigger to expand and collapse the long description.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string | undefined} props.shortDescription - The short description to display.
 * @param {string | undefined} props.longDescription - The long description to display within the collapsible section.
 * @returns {JSX.Element} The rendered DescriptionCollapsible component.
 *
 * @example
 * return (
 *   <DescriptionCollapsible
 *     shortDescription="This is the short description."
 *     longDescription="This is the long description with more details."
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` for the collapsible layout.
 * - `ChevronRightIcon` for the icon indicating expandable content.
 */
export const DescriptionCollapsible = ({
  shortDescription,
  longDescription
}: DescriptionSelectedEventProps): JSX.Element => {
  return (
    <div className="prose">
      {/* Short Description */}
      <p>{shortDescription}</p>
      {/* Collapsible Long Description */}
      <Collapsible className="py-4">
        <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
          Voir plus
          <ChevronRightIcon
            data-testid="chevron-right-icon"
            className="w-4 h-4 translate-y-px transition-all"
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p>{longDescription}</p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
