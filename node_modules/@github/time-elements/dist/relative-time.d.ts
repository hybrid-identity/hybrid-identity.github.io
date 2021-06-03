export default class RelativeTime {
    date: Date;
    locale: string;
    constructor(date: Date, locale: string);
    toString(): string;
    timeElapsed(): string | undefined | null;
    timeAhead(): string | null;
    timeAgo(): string | undefined;
    timeAgoFromMs(ms: number): string | undefined;
    microTimeAgo(): string;
    timeUntil(): string;
    timeUntilFromMs(ms: number): string;
    microTimeUntil(): string;
    formatDate(): string;
    formatTime(): string;
}
