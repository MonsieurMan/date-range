import { Component, Prop } from '@stencil/core';
import { format } from 'date-fns';
import french from 'date-fns/locale/fr';

@Component({
  tag: 'ran-month',
  styleUrl: 'month.scss',
  host: {
    class: 'ran-month'
  },
})
export class Month {
  @Prop()
  month: Date;

  @Prop()
  selected: boolean = false;

  hostData() {
    return {
      class: {
        'selected': this.selected,
      }
    }
  }
  render() {
    return format(this.month, 'MMM', { locale: french }).slice(0, 3).toUpperCase();
  }
}
