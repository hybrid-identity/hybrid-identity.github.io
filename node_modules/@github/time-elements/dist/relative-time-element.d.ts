import ExtendedTimeElement from './extended-time-element';
export default class RelativeTimeElement extends ExtendedTimeElement {
    getFormattedDate(): string | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare global {
    interface Window {
        RelativeTimeElement: typeof RelativeTimeElement;
    }
    interface HTMLElementTagNameMap {
        'relative-time': RelativeTimeElement;
    }
}
