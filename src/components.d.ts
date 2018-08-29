/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface RanDateRange {
      'end': string;
      'selectionEnd': string;
      'selectionStart': string;
      'start': string;
    }

    interface RanMonth {
      'month': Date;
      'selected': boolean;
    }
  }


    interface HTMLRanDateRangeElement extends StencilComponents.RanDateRange, HTMLStencilElement {}

    var HTMLRanDateRangeElement: {
      prototype: HTMLRanDateRangeElement;
      new (): HTMLRanDateRangeElement;
    };
    

    interface HTMLRanMonthElement extends StencilComponents.RanMonth, HTMLStencilElement {}

    var HTMLRanMonthElement: {
      prototype: HTMLRanMonthElement;
      new (): HTMLRanMonthElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'ran-date-range': JSXElements.RanDateRangeAttributes;
    'ran-month': JSXElements.RanMonthAttributes;
    }
  }

  namespace JSXElements {

    export interface RanDateRangeAttributes extends HTMLAttributes {
      'end'?: string;
      'selectionEnd'?: string;
      'selectionStart'?: string;
      'start'?: string;
    }

    export interface RanMonthAttributes extends HTMLAttributes {
      'month'?: Date;
      'selected'?: boolean;
    }
  }

  interface HTMLElementTagNameMap {
    'ran-date-range': HTMLRanDateRangeElement
    'ran-month': HTMLRanMonthElement
  }

  interface ElementTagNameMap {
    'ran-date-range': HTMLRanDateRangeElement;
    'ran-month': HTMLRanMonthElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;