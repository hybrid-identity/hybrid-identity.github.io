import RelativeTimeElement from './relative-time-element';
export default class TimeUntilElement extends RelativeTimeElement {
    getFormattedDate(): string | undefined;
}
declare global {
    interface Window {
        TimeUntilElement: typeof TimeUntilElement;
    }
    interface HTMLElementTagNameMap {
        'time-until': TimeUntilElement;
    }
}
