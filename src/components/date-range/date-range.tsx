import { Component, Prop, Watch } from '@stencil/core';
import { differenceInCalendarMonths, addMonths, isWithinRange, parse, isValid } from 'date-fns';

export interface DateRange {
  start: Date;
  end: Date;
}

@Component({
  tag: 'ran-date-range',
  styleUrl: 'date-range.scss'
})
export class RanDateRange {
  @Prop({ mutable: true })
  start?: string;

  @Prop({ mutable: true })
  end?: string;

  @Prop({ mutable: true })
  selectionStart?: string;

  @Prop({ mutable: true })
  selectionEnd?: string;

  @Watch('start')
  @Watch('end')
  @Watch('selectionStart')
  @Watch('selectionEnd')
  dateValidator(newValue: string) {
    const date = parse(newValue);
    if (!isValid(date)) {
      throw new Error('Invalid date passed as prop');
    }
  }

  private getMonthCount(): number {
    const diff = differenceInCalendarMonths(this.end, this.start);
    return isNaN(diff) ? 0 : diff;
  }

  private getMonths(): Date[] {
    return range(this.getMonthCount() + 1)
      .map(monthCount =>
          addMonths(this.start, monthCount - 1)
      )
  }

  isInSelectionRange(month: Date): boolean {
    return isWithinRange(month, this.selectionStart, this.selectionEnd);
  }

  render() {
    return this.getMonths().map(month => (
      <ran-month month={month} selected={this.isInSelectionRange(month)}></ran-month>
    ))
  };
}

function range(size: number, startAt: number = 0): ReadonlyArray<number> {
  return Array(size).fill(1).map((x, y) => x + y + startAt);
}
