import { RATE_COLORS, RATE_NUMBERS } from "../constants";

export const getIconColor = (averageRate) => {
  switch (true) {
    case averageRate > RATE_NUMBERS.FOUR:
      return RATE_COLORS.DARK_GREEN;
    case averageRate > RATE_NUMBERS.THREE:
      return RATE_COLORS.LIGHT_GREEN;
    case averageRate > RATE_NUMBERS.TWO:
      return RATE_COLORS.YELLOW;
    case averageRate > RATE_NUMBERS.ONE:
      return RATE_COLORS.ORANGE;
    default:
      return RATE_COLORS.RED;
  }
};