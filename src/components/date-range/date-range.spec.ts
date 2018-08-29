import { TestWindow } from '@stencil/core/testing';
import { DateRange } from './date-range';

describe('date-range', () => {
  it('should build', () => {
    expect(new DateRange()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDateRangeElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DateRange],
        html: '<dr-date-range></dr-date-range>'
      });
    });
  });
});
