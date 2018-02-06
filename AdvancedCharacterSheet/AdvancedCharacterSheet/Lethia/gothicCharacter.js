"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GothicCharacter;
(function (GothicCharacter_1) {
    var GothicCharacter = /** @class */ (function () {
        function GothicCharacter() {
            this._name = "Dummy Name";
            this._fatherName = "Dummy Father Name";
            this._motherName = "Dummy Mother Name";
        }
        Object.defineProperty(GothicCharacter.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GothicCharacter.prototype, "fatherName", {
            get: function () {
                return this._fatherName;
            },
            set: function (fatherName) {
                this._fatherName = fatherName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GothicCharacter.prototype, "motherName", {
            get: function () {
                return this._motherName;
            },
            set: function (motherName) {
                this._motherName = motherName;
            },
            enumerable: true,
            configurable: true
        });
        return GothicCharacter;
    }());
    GothicCharacter_1.GothicCharacter = GothicCharacter;
})(GothicCharacter = exports.GothicCharacter || (exports.GothicCharacter = {}));
//# sourceMappingURL=gothicCharacter.js.map