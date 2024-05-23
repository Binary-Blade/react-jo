import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HeaderCardInfoProps {
  cardData: {
    title: string;
    value: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}

/**
 * `HeaderCardInfoDashboard` component displays a set of cards with information.
 * Each card includes a title, a value, and an icon.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Array} props.cardData - Array of card data objects.
 * @param {string} props.cardData.title - The title of the card.
 * @param {string} props.cardData.value - The value displayed in the card.
 * @param {React.FC<React.SVGProps<SVGSVGElement>>} props.cardData.Icon - The icon component to display in the card.
 * @returns {JSX.Element} The rendered HeaderCardInfoDashboard component.
 *
 * @example
 * const cardData = [
 *   { title: 'Users', value: '1000', Icon: UserIcon },
 *   { title: 'Revenue', value: '$5000', Icon: DollarIcon },
 * ];
 * return <HeaderCardInfoDashboard cardData={cardData} />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Card`, `CardContent`, `CardHeader`, `CardTitle` for the card layout.
 */
export const HeaderCardInfoDashboard = ({ cardData }: HeaderCardInfoProps): JSX.Element => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card key={index} data-testid="card">
          {/* Card Header */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.Icon data-testid={`icon-${index}`} className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          {/* Card Content */}
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
