/**
 * `PriceFormula` represents the different pricing formulas that can be applied to an event ticket.
 *
 * @enum {string}
 * @property {string} SOLO - Price formula for a single person.
 * @property {string} DUO - Price formula for a pair.
 * @property {string} FAMILY - Price formula for a family.
 *
 * @example
 * const formula = PriceFormula.SOLO;
 */
export enum PriceFormula {
  SOLO = 'SOLO',
  DUO = 'DUO',
  FAMILY = 'FAMILY'
}
