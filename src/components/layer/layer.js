import tpl from './layer.html';
import ejsTpl from './layer.tpl';
import './layer.less';

function layer () {
    return {
        name: 'layer',
        tpl: tpl,
        ejsTpl: ejsTpl
    };
}

export default layer;