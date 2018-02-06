export module GothicCharacter {
    export class GothicCharacter {
        private _name: string;
        private _fatherName: string;
        private _motherName: string;

        constructor() {
            this._name = "Dummy Name";
            this._fatherName = "Dummy Father Name";
            this._motherName = "Dummy Mother Name";
        }

        get name(): string {
            return this._name;
        }
        set name(name: string) {
            this._name = name;
        }

        get fatherName(): string {
            return this._fatherName;
        }
        set fatherName(fatherName: string) {
            this._fatherName = fatherName;
        }

        get motherName(): string {
            return this._motherName;
        }
        set motherName(motherName: string) {
            this._motherName = motherName;
        }
    }
}