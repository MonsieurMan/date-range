import { TestWindow } from '@stencil/core/testing';
import { Month } from './month';

describe('ran-month', () => {
  it('should build', () => {
    expect(new Month()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRanMonthElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Month],
        html: '<ran-month></ran-month>'
      });
    });

    it('should add selected to classlist', async () => {
      element.selected = true;
      await testWindow.flush();

      expect(element.classList.contains('selected')).toBeTruthy();
    });
  });
});
