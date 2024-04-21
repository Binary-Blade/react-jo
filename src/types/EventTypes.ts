export type EventPropsType = {
    title: string,
    description: string,
    imageSrc: string
}


export type CreateEventDto = {
    title: string;
    description: string;
    price: number;
    quantityAvailable: number;
}
