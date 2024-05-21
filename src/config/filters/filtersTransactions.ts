import { StatusPaymentEnum } from '../enums/StatusPayment.enum';

export const FILTER_OPTIONS_TRANSACTIONS = [
  {
    label: 'Statuts de paiement',
    options: [
      { value: 'ALL', label: 'TOUS' },
      { value: StatusPaymentEnum.APPROVED, label: 'APPROUVÉ' },
      { value: StatusPaymentEnum.REJECTED, label: 'REJETÉ' }
    ]
  }
];
