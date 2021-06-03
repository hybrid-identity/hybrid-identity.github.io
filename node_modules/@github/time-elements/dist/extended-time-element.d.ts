export default class ExtendedTimeElement extends HTMLElement {
    static get observedAttributes(): string[];
    connectedCallback(): void;
    attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void;
    get date(): Date | null;
    getFormattedTitle(): string | undefined;
    getFormattedDate(): string | undefined;
}
