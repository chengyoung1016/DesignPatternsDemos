export default abstract class Operation {
    private _numberA: string = "";
    private _numberB: string = "";

    get NumberA() {
        return this._numberA;
    }
    set NumberA(value) {
        this._numberA = value;
    }

    get NumberB() {
        return this._numberB;
    }
    set NumberB(value) {
        this._numberB = value;
    }

    public abstract GetResult(): number;
}

export class OperationAdd extends Operation {
    public GetResult(): number {
        return Number(this.NumberA) + Number(this.NumberB);
    }
} 

export class OperationSub extends Operation {
    public GetResult(): number {
        return Number(this.NumberA) - Number(this.NumberB);
    }
} 

export class OperationMul extends Operation {
    public GetResult(): number {
        return Number(this.NumberA) * Number(this.NumberB);
    }
} 

export class OperationDiv extends Operation {
    public GetResult(): number {
        return Number(this.NumberA) / Number(this.NumberB);
    }
} 