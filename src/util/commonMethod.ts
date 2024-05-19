import { SaltType } from '../types';

export const getAvailableSaltList = (salt: SaltType) => {
  let available = {};
  salt.available_forms.forEach((s) => {
    Object.keys(salt.salt_forms_json[s]).forEach((st) => {
      Object.keys(salt.salt_forms_json[s][st]).forEach((pa) => {
        Object.entries(salt.salt_forms_json[s][st][pa]).forEach((element) => {
          const tempAvailable = available;
          let minPrice = 0;
          if (element[1] != null) {
            Object.entries(element[1]).forEach((el) => {
              if (minPrice === 0) minPrice = el[1].selling_price;
              else if (minPrice > el[1].selling_price)
                minPrice = el[1].selling_price;
            });
            if (Object.keys(tempAvailable).indexOf(s) !== -1) {
              let tempS: object = tempAvailable[s];
              tempS = {
                ...tempS,
                [st]: {
                  ...(tempS?.[st] ?? {}),
                  [pa]:
                    minPrice !== 0 && tempS?.[st]?.[pa] < minPrice
                      ? tempS?.[st]?.[pa]
                      : minPrice,
                },
              };
              tempAvailable[s] = tempS;
            } else {
              tempAvailable[s] = { [st]: { [pa]: minPrice } };
            }
          }
          available = tempAvailable;
        });
      });
    });
  });
  return available;
};
