import { DataFlowNode } from './dataflow';
export class SequenceNode extends DataFlowNode {
    constructor(parent, params) {
        super(parent);
        this.params = params;
    }
    clone() {
        return new SequenceNode(null, this.params);
    }
    assemble() {
        return Object.assign({ type: 'sequence' }, this.params);
    }
}
//# sourceMappingURL=sequence.js.map