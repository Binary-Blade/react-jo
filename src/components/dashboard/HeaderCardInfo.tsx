import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type HeaderCardInfoProps = {
  cardData: {
    title: string;
    value: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
};

export const HeaderCardInfo = ({ cardData }: HeaderCardInfoProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardDescription>{card.title}</CardDescription>
            <CardTitle>{card.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center p-4">
              <card.Icon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
