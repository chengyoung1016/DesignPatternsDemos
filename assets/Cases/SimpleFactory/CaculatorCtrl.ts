import OperationFactory from "./OperationFactory";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CaculatorCtrl extends cc.Component {
    /**
     * 组件首字母大写+组件类型  
     * 需要显示在编辑器上的变量首字母大写
     * 不需显示在编辑器上的组件变量首字母小写
     * 不需显示在编辑器上的普通变量首字母前加_小写
     */
    @property(cc.Integer)
    TotalKeys: number = 0;

    @property(cc.Label)
    ResultLabel: cc.Label = null;

    @property(cc.Node)
    Calculator: cc.Node = null;

    _cacheNumA: string = null;
    _cacheInputValue: string = null;
    _cacheInputType: string = null;

    _showResult: boolean = false;

    set cacheNumAValue(value) {
        this._cacheNumA = value;
        this._cacheInputValue = "";
    }

    onLoad () {
        this.init();
        //注册每个按钮对应的触摸事件 顺序依次为0~9 + - x ÷
        for(let i = 0; i < this.TotalKeys; i++) {
            let key = this.Calculator.children[i];
            key.on(cc.Node.EventType.TOUCH_END, this.getKeyValue, this);
        }
    }

    start () {
        
    }

    init() {
        this._cacheNumA = null;
        this._cacheInputValue = "";
        this._cacheInputType = "";
    }

    getKeyValue(event: cc.Event) {
        let curValue = this._cacheInputValue;
        switch(event.target._name) {
            case "Num0":
                this.inputNumPro("0");
                break;
            case "Num1":
                this.inputNumPro("1");
                break;
            case "Num2":
                this.inputNumPro("2");
                break;
            case "Num3":
                this.inputNumPro("3");
                break;
            case "Num4":
                this.inputNumPro("4");
                break;
            case "Num5":
                this.inputNumPro("5");
                break;
            case "Num6":
                this.inputNumPro("6");
                break;
            case "Num7":
                this.inputNumPro("7");
                break;
            case "Num8":
                this.inputNumPro("8");
                break;
            case "Num9":
                this.inputNumPro("9");
                break;
            case "AddKey":
                this.cacheNumAValue = this._cacheInputValue;
                this._cacheInputType = "+";
                break;
            case "SubKey":
                this.cacheNumAValue = this._cacheInputValue;
                this._cacheInputType = "-";
                break;
            case "MultiKey":
                this.cacheNumAValue = this._cacheInputValue;
                this._cacheInputType = "*";
                break;
            case "DivideKey":
                this.cacheNumAValue = this._cacheInputValue;
                this._cacheInputType = "/";
                break;
            case "ResultKey":
                this.caculate(this._cacheNumA, this._cacheInputType, this._cacheInputValue);
                this._showResult = true;
                this.init();
                break;
        }
    }

    inputNumPro(numStr: string) {
        this._cacheInputValue = this._cacheInputValue.concat(numStr);
        this._showResult = false;
    }

    caculate(num0: string, type: string, num1: string) {
        let oper = OperationFactory.createOperate(type);
        oper.NumberA = num0;
        oper.NumberB = num1;
        let result = oper.GetResult();
        this.ResultLabel.string = result.toString();
    }

    update (dt) {
        if(this._showResult) {return}
        this.ResultLabel.string = this._cacheInputValue;
    }
}
