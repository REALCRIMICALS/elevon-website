export function MoneyFormat(labelValue: string | number): string {
  return Math.abs(Number(labelValue)) >= 1.0e+9
    ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
    : Math.abs(Number(labelValue)) >= 1.0e+6
      ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
      : Math.abs(Number(labelValue)) >= 1.0e+3
        ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"
        : Math.abs(Number(labelValue)) + "";
}