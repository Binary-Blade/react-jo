import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
