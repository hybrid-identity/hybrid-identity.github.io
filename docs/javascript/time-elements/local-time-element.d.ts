import ExtendedTimeElement from './extended-time-element';
export default class LocalTimeElement extends ExtendedTimeElement {
    attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void;
    getFormattedDate(): string | undefined;
}
declare global {
    interface Window {
        LocalTimeElement: typeof LocalTimeElement;
    }
    interface HTMLElementTagNameMap {
        'local-time': LocalTimeElement;
    }
}
