/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentHarness, HarnessPredicate, ContentContainerComponentHarness, parallel, } from '@angular/cdk/testing';
const iconSelector = '.mat-list-icon';
const avatarSelector = '.mat-list-avatar';
/**
 * Gets a `HarnessPredicate` that applies the given `BaseListItemHarnessFilters` to the given
 * list item harness.
 * @template H The type of list item harness to create a predicate for.
 * @param harnessType A constructor for a list item harness.
 * @param options An instance of `BaseListItemHarnessFilters` to apply.
 * @return A `HarnessPredicate` for the given harness type with the given options applied.
 */
export function getListItemPredicate(harnessType, options) {
    return new HarnessPredicate(harnessType, options).addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text));
}
/** Harness for interacting with a list subheader. */
export class MatSubheaderHarness extends ComponentHarness {
    static with(options = {}) {
        return new HarnessPredicate(MatSubheaderHarness, options).addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text));
    }
    /** Gets the full text content of the list item (including text from any font icons). */
    async getText() {
        return (await this.host()).text();
    }
}
MatSubheaderHarness.hostSelector = '.mat-subheader';
/**
 * Shared behavior among the harnesses for the various `MatListItem` flavors.
 * @docs-private
 */
export class MatListItemHarnessBase extends ContentContainerComponentHarness {
    constructor() {
        super(...arguments);
        this._lines = this.locatorForAll('.mat-line');
        this._avatar = this.locatorForOptional(avatarSelector);
        this._icon = this.locatorForOptional(iconSelector);
    }
    /** Gets the full text content of the list item. */
    async getText() {
        return (await this.host()).text({ exclude: `${iconSelector}, ${avatarSelector}` });
    }
    /** Gets the lines of text (`mat-line` elements) in this nav list item. */
    async getLinesText() {
        const lines = await this._lines();
        return parallel(() => lines.map(l => l.text()));
    }
    /** Whether this list item has an avatar. */
    async hasAvatar() {
        return !!(await this._avatar());
    }
    /** Whether this list item has an icon. */
    async hasIcon() {
        return !!(await this._icon());
    }
    /** Whether this list option is disabled. */
    async isDisabled() {
        return (await this.host()).hasClass('mat-list-item-disabled');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLWhhcm5lc3MtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9saXN0L3Rlc3RpbmcvbGlzdC1pdGVtLWhhcm5lc3MtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsZ0JBQWdCLEVBRWhCLGdCQUFnQixFQUNoQixnQ0FBZ0MsRUFDaEMsUUFBUSxHQUNULE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7QUFDdEMsTUFBTSxjQUFjLEdBQUcsa0JBQWtCLENBQUM7QUFFMUM7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsV0FBMkMsRUFDM0MsT0FBbUM7SUFFbkMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQ3pELE1BQU0sRUFDTixPQUFPLENBQUMsSUFBSSxFQUNaLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FDM0UsQ0FBQztBQUNKLENBQUM7QUFFRCxxREFBcUQ7QUFDckQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjtJQUd2RCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQW1DLEVBQUU7UUFDL0MsT0FBTyxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDakUsTUFBTSxFQUNOLE9BQU8sQ0FBQyxJQUFJLEVBQ1osQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUMzRSxDQUFDO0lBQ0osQ0FBQztJQUVELHdGQUF3RjtJQUN4RixLQUFLLENBQUMsT0FBTztRQUNYLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7O0FBYk0sZ0NBQVksR0FBRyxnQkFBZ0IsQ0FBQztBQXNCekM7OztHQUdHO0FBQ0gsTUFBTSxPQUFnQixzQkFBdUIsU0FBUSxnQ0FBb0Q7SUFBekc7O1FBQ1UsV0FBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsWUFBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRCxVQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBMkJ4RCxDQUFDO0lBekJDLG1EQUFtRDtJQUNuRCxLQUFLLENBQUMsT0FBTztRQUNYLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLFlBQVksS0FBSyxjQUFjLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSxLQUFLLENBQUMsWUFBWTtRQUNoQixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsNENBQTRDO0lBQzVDLEtBQUssQ0FBQyxTQUFTO1FBQ2IsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsS0FBSyxDQUFDLE9BQU87UUFDWCxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDRDQUE0QztJQUM1QyxLQUFLLENBQUMsVUFBVTtRQUNkLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRIYXJuZXNzLFxuICBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3IsXG4gIEhhcm5lc3NQcmVkaWNhdGUsXG4gIENvbnRlbnRDb250YWluZXJDb21wb25lbnRIYXJuZXNzLFxuICBwYXJhbGxlbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHtCYXNlTGlzdEl0ZW1IYXJuZXNzRmlsdGVycywgU3ViaGVhZGVySGFybmVzc0ZpbHRlcnN9IGZyb20gJy4vbGlzdC1oYXJuZXNzLWZpbHRlcnMnO1xuXG5jb25zdCBpY29uU2VsZWN0b3IgPSAnLm1hdC1saXN0LWljb24nO1xuY29uc3QgYXZhdGFyU2VsZWN0b3IgPSAnLm1hdC1saXN0LWF2YXRhcic7XG5cbi8qKlxuICogR2V0cyBhIGBIYXJuZXNzUHJlZGljYXRlYCB0aGF0IGFwcGxpZXMgdGhlIGdpdmVuIGBCYXNlTGlzdEl0ZW1IYXJuZXNzRmlsdGVyc2AgdG8gdGhlIGdpdmVuXG4gKiBsaXN0IGl0ZW0gaGFybmVzcy5cbiAqIEB0ZW1wbGF0ZSBIIFRoZSB0eXBlIG9mIGxpc3QgaXRlbSBoYXJuZXNzIHRvIGNyZWF0ZSBhIHByZWRpY2F0ZSBmb3IuXG4gKiBAcGFyYW0gaGFybmVzc1R5cGUgQSBjb25zdHJ1Y3RvciBmb3IgYSBsaXN0IGl0ZW0gaGFybmVzcy5cbiAqIEBwYXJhbSBvcHRpb25zIEFuIGluc3RhbmNlIG9mIGBCYXNlTGlzdEl0ZW1IYXJuZXNzRmlsdGVyc2AgdG8gYXBwbHkuXG4gKiBAcmV0dXJuIEEgYEhhcm5lc3NQcmVkaWNhdGVgIGZvciB0aGUgZ2l2ZW4gaGFybmVzcyB0eXBlIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMgYXBwbGllZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RJdGVtUHJlZGljYXRlPEggZXh0ZW5kcyBNYXRMaXN0SXRlbUhhcm5lc3NCYXNlPihcbiAgaGFybmVzc1R5cGU6IENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcjxIPixcbiAgb3B0aW9uczogQmFzZUxpc3RJdGVtSGFybmVzc0ZpbHRlcnMsXG4pOiBIYXJuZXNzUHJlZGljYXRlPEg+IHtcbiAgcmV0dXJuIG5ldyBIYXJuZXNzUHJlZGljYXRlKGhhcm5lc3NUeXBlLCBvcHRpb25zKS5hZGRPcHRpb24oXG4gICAgJ3RleHQnLFxuICAgIG9wdGlvbnMudGV4dCxcbiAgICAoaGFybmVzcywgdGV4dCkgPT4gSGFybmVzc1ByZWRpY2F0ZS5zdHJpbmdNYXRjaGVzKGhhcm5lc3MuZ2V0VGV4dCgpLCB0ZXh0KSxcbiAgKTtcbn1cblxuLyoqIEhhcm5lc3MgZm9yIGludGVyYWN0aW5nIHdpdGggYSBsaXN0IHN1YmhlYWRlci4gKi9cbmV4cG9ydCBjbGFzcyBNYXRTdWJoZWFkZXJIYXJuZXNzIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcyB7XG4gIHN0YXRpYyBob3N0U2VsZWN0b3IgPSAnLm1hdC1zdWJoZWFkZXInO1xuXG4gIHN0YXRpYyB3aXRoKG9wdGlvbnM6IFN1YmhlYWRlckhhcm5lc3NGaWx0ZXJzID0ge30pOiBIYXJuZXNzUHJlZGljYXRlPE1hdFN1YmhlYWRlckhhcm5lc3M+IHtcbiAgICByZXR1cm4gbmV3IEhhcm5lc3NQcmVkaWNhdGUoTWF0U3ViaGVhZGVySGFybmVzcywgb3B0aW9ucykuYWRkT3B0aW9uKFxuICAgICAgJ3RleHQnLFxuICAgICAgb3B0aW9ucy50ZXh0LFxuICAgICAgKGhhcm5lc3MsIHRleHQpID0+IEhhcm5lc3NQcmVkaWNhdGUuc3RyaW5nTWF0Y2hlcyhoYXJuZXNzLmdldFRleHQoKSwgdGV4dCksXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBmdWxsIHRleHQgY29udGVudCBvZiB0aGUgbGlzdCBpdGVtIChpbmNsdWRpbmcgdGV4dCBmcm9tIGFueSBmb250IGljb25zKS4gKi9cbiAgYXN5bmMgZ2V0VGV4dCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLnRleHQoKTtcbiAgfVxufVxuXG4vKiogU2VsZWN0b3JzIGZvciB0aGUgdmFyaW91cyBsaXN0IGl0ZW0gc2VjdGlvbnMgdGhhdCBtYXkgY29udGFpbiB1c2VyIGNvbnRlbnQuICovXG5leHBvcnQgY29uc3QgZW51bSBNYXRMaXN0SXRlbVNlY3Rpb24ge1xuICBDT05URU5UID0gJy5tYXQtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAvLyBUT0RPKG1tYWxlcmJhKTogY29uc2lkZXIgYWRkaW5nIHNlY3Rpb25zIGZvciBsZWFkaW5nL3RyYWlsaW5nIGljb25zLlxufVxuXG4vKipcbiAqIFNoYXJlZCBiZWhhdmlvciBhbW9uZyB0aGUgaGFybmVzc2VzIGZvciB0aGUgdmFyaW91cyBgTWF0TGlzdEl0ZW1gIGZsYXZvcnMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNYXRMaXN0SXRlbUhhcm5lc3NCYXNlIGV4dGVuZHMgQ29udGVudENvbnRhaW5lckNvbXBvbmVudEhhcm5lc3M8TWF0TGlzdEl0ZW1TZWN0aW9uPiB7XG4gIHByaXZhdGUgX2xpbmVzID0gdGhpcy5sb2NhdG9yRm9yQWxsKCcubWF0LWxpbmUnKTtcbiAgcHJpdmF0ZSBfYXZhdGFyID0gdGhpcy5sb2NhdG9yRm9yT3B0aW9uYWwoYXZhdGFyU2VsZWN0b3IpO1xuICBwcml2YXRlIF9pY29uID0gdGhpcy5sb2NhdG9yRm9yT3B0aW9uYWwoaWNvblNlbGVjdG9yKTtcblxuICAvKiogR2V0cyB0aGUgZnVsbCB0ZXh0IGNvbnRlbnQgb2YgdGhlIGxpc3QgaXRlbS4gKi9cbiAgYXN5bmMgZ2V0VGV4dCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLnRleHQoe2V4Y2x1ZGU6IGAke2ljb25TZWxlY3Rvcn0sICR7YXZhdGFyU2VsZWN0b3J9YH0pO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGxpbmVzIG9mIHRleHQgKGBtYXQtbGluZWAgZWxlbWVudHMpIGluIHRoaXMgbmF2IGxpc3QgaXRlbS4gKi9cbiAgYXN5bmMgZ2V0TGluZXNUZXh0KCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICBjb25zdCBsaW5lcyA9IGF3YWl0IHRoaXMuX2xpbmVzKCk7XG4gICAgcmV0dXJuIHBhcmFsbGVsKCgpID0+IGxpbmVzLm1hcChsID0+IGwudGV4dCgpKSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIGxpc3QgaXRlbSBoYXMgYW4gYXZhdGFyLiAqL1xuICBhc3luYyBoYXNBdmF0YXIoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuICEhKGF3YWl0IHRoaXMuX2F2YXRhcigpKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgbGlzdCBpdGVtIGhhcyBhbiBpY29uLiAqL1xuICBhc3luYyBoYXNJY29uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiAhIShhd2FpdCB0aGlzLl9pY29uKCkpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBsaXN0IG9wdGlvbiBpcyBkaXNhYmxlZC4gKi9cbiAgYXN5bmMgaXNEaXNhYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaG9zdCgpKS5oYXNDbGFzcygnbWF0LWxpc3QtaXRlbS1kaXNhYmxlZCcpO1xuICB9XG59XG4iXX0=