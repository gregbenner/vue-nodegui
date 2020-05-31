import { QWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';

export class VNMetaWidget extends QWidget implements VNWidget<{}> {
  constructor() {
    super();
    this.setFixedSize(0, 0);
  }

  insertChild() {
    throw new Error('cannot add child to meta widgets');
  }

  patchProp() {
    throw new Error('cannot add props to meta widgets');
  }

  removeChild() {
    throw new Error('cannot add props to meta widgets');
  }
}
