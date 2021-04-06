import { deepMix } from '@antv/util';
import cloneDeep from 'lodash/cloneDeep';
import { layouts } from '../layout/utils/options';
import getComboStyleByTheme from '../theme/combo-style';
import getEdgeStyleByTheme from '../theme/edge-style';
import getNodeStyleByTheme from '../theme/node-style';
import hexToRgba, { hexToRgbaToHex } from './hexToRgba';
import mock from './mock';
import processEdges from './processEdges';
import shallowEqual from './shallowEqual';
import subLayout from './subLayout';
import uuid from './uuid';
import walk from './walk';

export default {
  hexToRgba,
  mock,
  shallowEqual,
  hexToRgbaToHex,
  getNodeStyleByTheme,
  getEdgeStyleByTheme,
  getComboStyleByTheme,
  deepMix,
  cloneDeep,
  uuid,
  walk,
  processEdges,
  subLayout,
  layouts,
};
