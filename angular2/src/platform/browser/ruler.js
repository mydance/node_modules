'use strict';var async_1 = require('angular2/src/facade/async');
var Rectangle = (function () {
    function Rectangle(left, top, width, height) {
        this.left = left;
        this.right = left + width;
        this.top = top;
        this.bottom = top + height;
        this.height = height;
        this.width = width;
    }
    return Rectangle;
})();
exports.Rectangle = Rectangle;
var Ruler = (function () {
    function Ruler(domAdapter) {
        this.domAdapter = domAdapter;
    }
    Ruler.prototype.measure = function (el) {
        var clntRect = this.domAdapter.getBoundingClientRect(el.nativeElement);
        // even if getBoundingClientRect is synchronous we use async API in preparation for further
        // changes
        return async_1.PromiseWrapper.resolve(new Rectangle(clntRect.left, clntRect.top, clntRect.width, clntRect.height));
    };
    return Ruler;
})();
exports.Ruler = Ruler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9ydWxlci50cyJdLCJuYW1lcyI6WyJSZWN0YW5nbGUiLCJSZWN0YW5nbGUuY29uc3RydWN0b3IiLCJSdWxlciIsIlJ1bGVyLmNvbnN0cnVjdG9yIiwiUnVsZXIubWVhc3VyZSJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNDLDJCQUEyQixDQUFDLENBQUE7QUFJbEU7SUFPRUEsbUJBQVlBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLEtBQUtBLEVBQUVBLE1BQU1BO1FBQ2xDQyxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNqQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDMUJBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ2ZBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLEdBQUdBLE1BQU1BLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDckJBLENBQUNBO0lBQ0hELGdCQUFDQTtBQUFEQSxDQUFDQSxBQWZELElBZUM7QUFmWSxpQkFBUyxZQWVyQixDQUFBO0FBRUQ7SUFFRUUsZUFBWUEsVUFBc0JBO1FBQUlDLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBO0lBQUNBLENBQUNBO0lBRXJFRCx1QkFBT0EsR0FBUEEsVUFBUUEsRUFBY0E7UUFDcEJFLElBQUlBLFFBQVFBLEdBQVFBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7UUFFNUVBLDJGQUEyRkE7UUFDM0ZBLFVBQVVBO1FBQ1ZBLE1BQU1BLENBQUNBLHNCQUFjQSxDQUFDQSxPQUFPQSxDQUN6QkEsSUFBSUEsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsUUFBUUEsQ0FBQ0EsR0FBR0EsRUFBRUEsUUFBUUEsQ0FBQ0EsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbkZBLENBQUNBO0lBQ0hGLFlBQUNBO0FBQURBLENBQUNBLEFBWkQsSUFZQztBQVpZLGFBQUssUUFZakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvbWlzZSwgUHJvbWlzZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnRfcmVmJztcblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGxlZnQ7XG4gIHJpZ2h0O1xuICB0b3A7XG4gIGJvdHRvbTtcbiAgaGVpZ2h0O1xuICB3aWR0aDtcbiAgY29uc3RydWN0b3IobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gbGVmdCArIHdpZHRoO1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMuYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUnVsZXIge1xuICBkb21BZGFwdGVyOiBEb21BZGFwdGVyO1xuICBjb25zdHJ1Y3Rvcihkb21BZGFwdGVyOiBEb21BZGFwdGVyKSB7IHRoaXMuZG9tQWRhcHRlciA9IGRvbUFkYXB0ZXI7IH1cblxuICBtZWFzdXJlKGVsOiBFbGVtZW50UmVmKTogUHJvbWlzZTxSZWN0YW5nbGU+IHtcbiAgICB2YXIgY2xudFJlY3QgPSA8YW55PnRoaXMuZG9tQWRhcHRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwubmF0aXZlRWxlbWVudCk7XG5cbiAgICAvLyBldmVuIGlmIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyBzeW5jaHJvbm91cyB3ZSB1c2UgYXN5bmMgQVBJIGluIHByZXBhcmF0aW9uIGZvciBmdXJ0aGVyXG4gICAgLy8gY2hhbmdlc1xuICAgIHJldHVybiBQcm9taXNlV3JhcHBlci5yZXNvbHZlKFxuICAgICAgICBuZXcgUmVjdGFuZ2xlKGNsbnRSZWN0LmxlZnQsIGNsbnRSZWN0LnRvcCwgY2xudFJlY3Qud2lkdGgsIGNsbnRSZWN0LmhlaWdodCkpO1xuICB9XG59XG4iXX0=