import Modeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler';

import diagram from '../resources/diagram.bpmn';

const modeler = new Modeler({
  container: '.canvas',
  propertiesPanel: {
    parent: '.properties'
  }
});

modeler.importXML(diagram);