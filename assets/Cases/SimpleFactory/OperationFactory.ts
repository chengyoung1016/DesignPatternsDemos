import Operation, { OperationAdd, OperationSub, OperationMul, OperationDiv } from "./Operation";

export default class OperationFactory {
    public static createOperate(operate: string): Operation {
        let oper: Operation = null;

        switch(operate) {
            case "+":
                oper = new OperationAdd();
                break;
            case "-":
                oper = new OperationSub();
                break;
            case "*":
                oper = new OperationMul();
                break;
            case "/":
                oper = new OperationDiv();
                break;
        }
        return oper;
    }

    
}