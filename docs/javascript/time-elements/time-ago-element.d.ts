import RelativeTimeElement from './relative-time-element';
export default class TimeAgoElement extends RelativeTimeElement {
    getFormattedDate(): string | undefined;
}
declare global {
    interface Window {
        TimeAgoElement: typeof TimeAgoElement;
    }
    interface HTMLElementTagNameMap {
        'time-ago': TimeAgoElement;
    }
}
