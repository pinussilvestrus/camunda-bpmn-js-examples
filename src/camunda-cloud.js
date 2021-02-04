import Modeler from 'camunda-bpmn-js/lib/camunda-cloud/Modeler';

import diagram from '../resources/diagram.bpmn';

import 'camunda-bpmn-js/dist/assets/camunda-cloud-modeler.css';
import './app.css';

const modeler = new Modeler({
  container: '.canvas',
  propertiesPanel: {
    parent: '.properties'
  }
});

modeler.importXML(diagram);