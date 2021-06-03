export declare function strftime(time: Date, formatString: string): string;
export declare function makeFormatter(options: Intl.DateTimeFormatOptions): () => Intl.DateTimeFormat | undefined;
export declare function isDayFirst(): boolean;
export declare function isYearSeparator(): boolean;
export declare function isThisYear(date: Date): boolean;
export declare function makeRelativeFormat(locale: string, options: Intl.RelativeTimeFormatOptions): Intl.RelativeTimeFormat | void;
export declare function localeFromElement(el: HTMLElement): string;
