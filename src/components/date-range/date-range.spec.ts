import { TestWindow } from '@stencil/core/testing';
import { RanDateRange, DateRange } from './date-range';

import { addMonths, startOfToday } from 'date-fns';

describe('date-range', () => {
  it('should build', () => {
    expect(new RanDateRange()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRanDateRangeElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RanDateRange],
        html: `<ran-date-range></ran-date-range>`
      });
    });

    it('should add two div for two month', async () => {
      element.start = '2000-01';
      element.end = '2000-02';

      await testWindow.flush();

      expect(element.children.length).toEqual(2);
    });

    it('should add one div for one month', async () => {
      element.start = '2000-01';
      element.end = '2000-01';

      await testWindow.flush();

      expect(element.children.length).toEqual(1);
    })

    it('should add selected class to selected month', async () => {
      const start = '2000-01';
      const end = '2000-03';
      element.start = start;
      element.end = end;
      element.selectionStart = '2000-02';
      element.selectionEnd = '2000-02';

      await testWindow.flush();

      expect(element.children[0].classList.contains('selected')).toBeFalsy();
      expect(element.children[1].classList.contains('selected')).toBeTruthy();
      expect(element.children[2].classList.contains('selected')).toBeFalsy();
    })

  });
});

