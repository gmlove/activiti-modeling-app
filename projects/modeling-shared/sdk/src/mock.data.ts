
const project = { "createdBy": "modeler", "creationDate": "2020-05-28T05:00:03.129+0000", "lastModifiedBy": "modeler", "lastModifiedDate": "2020-05-28T05:00:03.129+0000", "id": "e8b9c551-5f6a-44ae-9a97-db8eb4020a58", "name": "test", "description": "" };

const models = {
    "process-simple": { "createdBy": "modeler", "creationDate": "2020-05-29T07:51:43.800+0000", "lastModifiedBy": "modeler", "lastModifiedDate": "2020-05-29T09:54:35.400+0000", "id": "process-simple", "type": "PROCESS", "name": "process-simple", "extensions": { "constants": {}, "mappings": { "ServiceTask_0tt533q": { "inputs": { "b_input": 1 }, "outputs": {} }, "ServiceTask_0em0nmt": { "inputs": {}, "outputs": {} } }, "properties": {} }, "version": "0.0.14", "projectId": "e8b9c551-5f6a-44ae-9a97-db8eb4020a58" },
    "process-with-exgateway": { "createdBy": "modeler", "creationDate": "2020-05-29T09:54:28.107+0000", "lastModifiedBy": "modeler", "lastModifiedDate": "2020-05-29T14:01:12.761+0000", "id": "process-with-exgateway", "type": "PROCESS", "name": "process-with-exgateway", "extensions": { "mappings": {}, "constants": {}, "properties": {} }, "version": "0.0.8", "projectId": "e8b9c551-5f6a-44ae-9a97-db8eb4020a58" },
    "process-with-pargateway": { "createdBy": "modeler", "creationDate": "2020-05-29T13:59:09.327+0000", "lastModifiedBy": "modeler", "lastModifiedDate": "2020-05-29T14:48:41.710+0000", "id": "process-with-pargateway", "type": "PROCESS", "name": "process-with-pargateway", "extensions": { "mappings": {}, "constants": {}, "properties": {} }, "version": "0.0.6", "projectId": "e8b9c551-5f6a-44ae-9a97-db8eb4020a58" },
    "process-with-gateways": { "createdBy": "modeler", "creationDate": "2020-05-29T14:48:57.587+0000", "lastModifiedBy": "modeler", "lastModifiedDate": "2020-05-29T15:11:29.059+0000", "id": "process-with-gateways", "type": "PROCESS", "name": "process-with-gateways", "extensions": { "mappings": {}, "constants": {}, "properties": {} }, "version": "0.0.10", "projectId": "e8b9c551-5f6a-44ae-9a97-db8eb4020a58" }
}

export const mockData = {
    projects: {
        "list": {
            "entries": [{ "entry": project }],
            "pagination": { "skipCount": 0, "maxItems": 25, "count": 1, "hasMoreItems": false, "totalItems": 1 }
        }
    } as any,
    project: { "entry": project },
    models: {
        "list": {
            "entries": [
                { "entry": models['process-simple'] },
                { "entry": models['process-with-exgateway'] },
                { "entry": models['process-with-pargateway'] },
                { "entry": models['process-with-gateways'] },
            ],
            "pagination": { "skipCount": 0, "maxItems": 1000, "count": 4, "hasMoreItems": false, "totalItems": 4 }
        }
    },
    modelsPlain: models,
    modelsXml: {
        'process-simple':
            `<?xml version="1.0" encoding="UTF-8"?>
            <bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
            <bpmn2:process id="process-simple" name="process-simple" isExecutable="true">
                <bpmn2:documentation />
                <bpmn2:startEvent id="StartEvent_1">
                <bpmn2:outgoing>SequenceFlow_1k98z8o</bpmn2:outgoing>
                </bpmn2:startEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_1k98z8o" sourceRef="StartEvent_1" targetRef="ServiceTask_0em0nmt" />
                <bpmn2:sequenceFlow id="SequenceFlow_1ltlcxk" sourceRef="ServiceTask_0em0nmt" targetRef="ServiceTask_0tt533q" />
                <bpmn2:sequenceFlow id="SequenceFlow_04gcty3" sourceRef="ServiceTask_0tt533q" targetRef="ServiceTask_1s6d5g9" />
                <bpmn2:endEvent id="EndEvent_0gn4cv2">
                <bpmn2:incoming>SequenceFlow_1ytdgjc</bpmn2:incoming>
                </bpmn2:endEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_1ytdgjc" sourceRef="ServiceTask_1s6d5g9" targetRef="EndEvent_0gn4cv2" />
                <bpmn2:serviceTask id="ServiceTask_0em0nmt" name="a" implementation="a">
                <bpmn2:incoming>SequenceFlow_1k98z8o</bpmn2:incoming>
                <bpmn2:outgoing>SequenceFlow_1ltlcxk</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_0tt533q" name="b" implementation="b">
                <bpmn2:incoming>SequenceFlow_1ltlcxk</bpmn2:incoming>
                <bpmn2:outgoing>SequenceFlow_04gcty3</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_1s6d5g9" name="c" implementation="c">
                <bpmn2:incoming>SequenceFlow_04gcty3</bpmn2:incoming>
                <bpmn2:outgoing>SequenceFlow_1ytdgjc</bpmn2:outgoing>
                </bpmn2:serviceTask>
            </bpmn2:process>
            <bpmndi:BPMNDiagram id="BPMNDiagram_1">
                <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process-simple">
                <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
                    <dc:Bounds x="233" y="202" width="36" height="36" />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNEdge id="SequenceFlow_1k98z8o_di" bpmnElement="SequenceFlow_1k98z8o">
                    <di:waypoint x="269" y="220" />
                    <di:waypoint x="319" y="220" />
                </bpmndi:BPMNEdge>
                <bpmndi:BPMNEdge id="SequenceFlow_1ltlcxk_di" bpmnElement="SequenceFlow_1ltlcxk">
                    <di:waypoint x="419" y="220" />
                    <di:waypoint x="469" y="220" />
                </bpmndi:BPMNEdge>
                <bpmndi:BPMNEdge id="SequenceFlow_04gcty3_di" bpmnElement="SequenceFlow_04gcty3">
                    <di:waypoint x="569" y="220" />
                    <di:waypoint x="619" y="220" />
                </bpmndi:BPMNEdge>
                <bpmndi:BPMNShape id="EndEvent_0gn4cv2_di" bpmnElement="EndEvent_0gn4cv2">
                    <dc:Bounds x="769" y="202" width="36" height="36" />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNEdge id="SequenceFlow_1ytdgjc_di" bpmnElement="SequenceFlow_1ytdgjc">
                    <di:waypoint x="719" y="220" />
                    <di:waypoint x="769" y="220" />
                </bpmndi:BPMNEdge>
                <bpmndi:BPMNShape id="ServiceTask_0ahiozx_di" bpmnElement="ServiceTask_0em0nmt">
                    <dc:Bounds x="319" y="180" width="100" height="80" />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNShape id="ServiceTask_0i3wp3i_di" bpmnElement="ServiceTask_0tt533q">
                    <dc:Bounds x="469" y="180" width="100" height="80" />
                </bpmndi:BPMNShape>
                <bpmndi:BPMNShape id="ServiceTask_0135jfz_di" bpmnElement="ServiceTask_1s6d5g9">
                    <dc:Bounds x="619" y="180" width="100" height="80" />
                </bpmndi:BPMNShape>
                </bpmndi:BPMNPlane>
            </bpmndi:BPMNDiagram>
            </bpmn2:definitions>
            `,
        'process-with-exgateway':
            `<?xml version="1.0" encoding="UTF-8"?>
            <bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
              <bpmn2:process id="process-with-exgateway" name="process-with-exgateway" isExecutable="true">
                <bpmn2:documentation />
                <bpmn2:startEvent id="StartEvent_1">
                  <bpmn2:outgoing>SequenceFlow_1k98z8o</bpmn2:outgoing>
                </bpmn2:startEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_1k98z8o" sourceRef="StartEvent_1" targetRef="ServiceTask_0em0nmt" />
                <bpmn2:sequenceFlow id="SequenceFlow_1ltlcxk" sourceRef="ServiceTask_0em0nmt" targetRef="ServiceTask_0tt533q" />
                <bpmn2:endEvent id="EndEvent_0gn4cv2">
                  <bpmn2:incoming>SequenceFlow_05ukdnz</bpmn2:incoming>
                </bpmn2:endEvent>
                <bpmn2:serviceTask id="ServiceTask_0em0nmt" name="a" implementation="a">
                  <bpmn2:incoming>SequenceFlow_1k98z8o</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1ltlcxk</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_0tt533q" name="b" implementation="b">
                  <bpmn2:incoming>SequenceFlow_1ltlcxk</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0s9rdg1</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_1s6d5g9" name="c1" implementation="c1">
                  <bpmn2:incoming>SequenceFlow_1nms7xk</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_05ukdnz</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:exclusiveGateway id="ExclusiveGateway_0e6mfrn">
                  <bpmn2:incoming>SequenceFlow_0s9rdg1</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1nms7xk</bpmn2:outgoing>
                  <bpmn2:outgoing>SequenceFlow_1snyf24</bpmn2:outgoing>
                </bpmn2:exclusiveGateway>
                <bpmn2:sequenceFlow id="SequenceFlow_0s9rdg1" sourceRef="ServiceTask_0tt533q" targetRef="ExclusiveGateway_0e6mfrn" />
                <bpmn2:sequenceFlow id="SequenceFlow_1nms7xk" sourceRef="ExclusiveGateway_0e6mfrn" targetRef="ServiceTask_1s6d5g9">
                  <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression">\${Math.random() &lt; 0.8 &amp;&amp; a == 1}</bpmn2:conditionExpression>
                </bpmn2:sequenceFlow>
                <bpmn2:sequenceFlow id="SequenceFlow_05ukdnz" sourceRef="ServiceTask_1s6d5g9" targetRef="EndEvent_0gn4cv2" />
                <bpmn2:sequenceFlow id="SequenceFlow_1snyf24" sourceRef="ExclusiveGateway_0e6mfrn" targetRef="ServiceTask_1vtal80">
                  <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression">\${Math.random() &lt;= 0.2}</bpmn2:conditionExpression>
                </bpmn2:sequenceFlow>
                <bpmn2:serviceTask id="ServiceTask_1vtal80" name="c2" implementation="c2">
                  <bpmn2:incoming>SequenceFlow_1snyf24</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_07iim8p</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:endEvent id="EndEvent_0i3gmlp">
                  <bpmn2:incoming>SequenceFlow_07iim8p</bpmn2:incoming>
                </bpmn2:endEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_07iim8p" sourceRef="ServiceTask_1vtal80" targetRef="EndEvent_0i3gmlp" />
              </bpmn2:process>
              <bpmndi:BPMNDiagram id="BPMNDiagram_1">
                <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process-with-exgateway">
                  <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
                    <dc:Bounds x="233" y="202" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_1k98z8o_di" bpmnElement="SequenceFlow_1k98z8o">
                    <di:waypoint x="269" y="220" />
                    <di:waypoint x="319" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1ltlcxk_di" bpmnElement="SequenceFlow_1ltlcxk">
                    <di:waypoint x="419" y="220" />
                    <di:waypoint x="469" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="EndEvent_0gn4cv2_di" bpmnElement="EndEvent_0gn4cv2">
                    <dc:Bounds x="893" y="127" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_0ahiozx_di" bpmnElement="ServiceTask_0em0nmt">
                    <dc:Bounds x="319" y="180" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_0i3wp3i_di" bpmnElement="ServiceTask_0tt533q">
                    <dc:Bounds x="469" y="180" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_0135jfz_di" bpmnElement="ServiceTask_1s6d5g9">
                    <dc:Bounds x="705" y="105" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ExclusiveGateway_0e6mfrn_di" bpmnElement="ExclusiveGateway_0e6mfrn" isMarkerVisible="true">
                    <dc:Bounds x="619" y="195" width="50" height="50" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_0s9rdg1_di" bpmnElement="SequenceFlow_0s9rdg1">
                    <di:waypoint x="569" y="220" />
                    <di:waypoint x="619" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1nms7xk_di" bpmnElement="SequenceFlow_1nms7xk">
                    <di:waypoint x="644" y="195" />
                    <di:waypoint x="644" y="145" />
                    <di:waypoint x="705" y="145" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_05ukdnz_di" bpmnElement="SequenceFlow_05ukdnz">
                    <di:waypoint x="805" y="145" />
                    <di:waypoint x="893" y="145" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1snyf24_di" bpmnElement="SequenceFlow_1snyf24">
                    <di:waypoint x="644" y="245" />
                    <di:waypoint x="644" y="330" />
                    <di:waypoint x="705" y="330" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ServiceTask_0vo36ki_di" bpmnElement="ServiceTask_1vtal80">
                    <dc:Bounds x="705" y="290" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="EndEvent_0i3gmlp_di" bpmnElement="EndEvent_0i3gmlp">
                    <dc:Bounds x="893" y="312" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_07iim8p_di" bpmnElement="SequenceFlow_07iim8p">
                    <di:waypoint x="805" y="330" />
                    <di:waypoint x="893" y="330" />
                  </bpmndi:BPMNEdge>
                </bpmndi:BPMNPlane>
              </bpmndi:BPMNDiagram>
            </bpmn2:definitions>
            `,
        'process-with-pargateway':
            `<?xml version="1.0" encoding="UTF-8"?>
            <bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
              <bpmn2:process id="process-with-pargateway" name="process-with-pargateway" isExecutable="true">
                <bpmn2:documentation />
                <bpmn2:startEvent id="StartEvent_1">
                  <bpmn2:outgoing>SequenceFlow_1k98z8o</bpmn2:outgoing>
                </bpmn2:startEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_1k98z8o" sourceRef="StartEvent_1" targetRef="ServiceTask_0em0nmt" />
                <bpmn2:sequenceFlow id="SequenceFlow_1ltlcxk" sourceRef="ServiceTask_0em0nmt" targetRef="ServiceTask_0tt533q" />
                <bpmn2:serviceTask id="ServiceTask_0em0nmt" name="a" implementation="a">
                  <bpmn2:incoming>SequenceFlow_1k98z8o</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1ltlcxk</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_0tt533q" name="b" implementation="b">
                  <bpmn2:incoming>SequenceFlow_1ltlcxk</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0s9rdg1</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_1s6d5g9" name="c1" implementation="c1">
                  <bpmn2:incoming>SequenceFlow_1nms7xk</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0f54nth</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:sequenceFlow id="SequenceFlow_0s9rdg1" sourceRef="ServiceTask_0tt533q" targetRef="ParallelGateway_0e6mfrn" />
                <bpmn2:sequenceFlow id="SequenceFlow_1nms7xk" sourceRef="ParallelGateway_0e6mfrn" targetRef="ServiceTask_1s6d5g9" />
                <bpmn2:sequenceFlow id="SequenceFlow_1snyf24" sourceRef="ParallelGateway_0e6mfrn" targetRef="ServiceTask_1vtal80" />
                <bpmn2:serviceTask id="ServiceTask_1vtal80" name="c2" implementation="c2">
                  <bpmn2:incoming>SequenceFlow_1snyf24</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1n6wkir</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:parallelGateway id="ParallelGateway_0e6mfrn">
                  <bpmn2:incoming>SequenceFlow_0s9rdg1</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1nms7xk</bpmn2:outgoing>
                  <bpmn2:outgoing>SequenceFlow_1snyf24</bpmn2:outgoing>
                </bpmn2:parallelGateway>
                <bpmn2:sequenceFlow id="SequenceFlow_0f54nth" sourceRef="ServiceTask_1s6d5g9" targetRef="ParallelGateway_1e21h7s" />
                <bpmn2:parallelGateway id="ParallelGateway_1e21h7s">
                  <bpmn2:incoming>SequenceFlow_0f54nth</bpmn2:incoming>
                  <bpmn2:incoming>SequenceFlow_1n6wkir</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1v2ju2e</bpmn2:outgoing>
                </bpmn2:parallelGateway>
                <bpmn2:sequenceFlow id="SequenceFlow_1n6wkir" sourceRef="ServiceTask_1vtal80" targetRef="ParallelGateway_1e21h7s" />
                <bpmn2:sequenceFlow id="SequenceFlow_1v2ju2e" sourceRef="ParallelGateway_1e21h7s" targetRef="ServiceTask_0xjfg6v" />
                <bpmn2:serviceTask id="ServiceTask_0xjfg6v" name="d" implementation="d">
                  <bpmn2:incoming>SequenceFlow_1v2ju2e</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1xec8b8</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:endEvent id="EndEvent_0yldn2n">
                  <bpmn2:incoming>SequenceFlow_1xec8b8</bpmn2:incoming>
                </bpmn2:endEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_1xec8b8" sourceRef="ServiceTask_0xjfg6v" targetRef="EndEvent_0yldn2n" />
              </bpmn2:process>
              <bpmndi:BPMNDiagram id="BPMNDiagram_1">
                <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process-with-pargateway">
                  <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
                    <dc:Bounds x="233" y="202" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_1k98z8o_di" bpmnElement="SequenceFlow_1k98z8o">
                    <di:waypoint x="269" y="220" />
                    <di:waypoint x="319" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1ltlcxk_di" bpmnElement="SequenceFlow_1ltlcxk">
                    <di:waypoint x="419" y="220" />
                    <di:waypoint x="469" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ServiceTask_0ahiozx_di" bpmnElement="ServiceTask_0em0nmt">
                    <dc:Bounds x="319" y="180" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_0i3wp3i_di" bpmnElement="ServiceTask_0tt533q">
                    <dc:Bounds x="469" y="180" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_0135jfz_di" bpmnElement="ServiceTask_1s6d5g9">
                    <dc:Bounds x="705" y="105" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_0s9rdg1_di" bpmnElement="SequenceFlow_0s9rdg1">
                    <di:waypoint x="569" y="220" />
                    <di:waypoint x="619" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1nms7xk_di" bpmnElement="SequenceFlow_1nms7xk">
                    <di:waypoint x="644" y="195" />
                    <di:waypoint x="644" y="145" />
                    <di:waypoint x="705" y="145" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1snyf24_di" bpmnElement="SequenceFlow_1snyf24">
                    <di:waypoint x="644" y="245" />
                    <di:waypoint x="644" y="330" />
                    <di:waypoint x="705" y="330" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ServiceTask_0vo36ki_di" bpmnElement="ServiceTask_1vtal80">
                    <dc:Bounds x="705" y="290" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ParallelGateway_03a8oqx_di" bpmnElement="ParallelGateway_0e6mfrn">
                    <dc:Bounds x="619" y="195" width="50" height="50" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_0f54nth_di" bpmnElement="SequenceFlow_0f54nth">
                    <di:waypoint x="805" y="145" />
                    <di:waypoint x="911" y="145" />
                    <di:waypoint x="911" y="195" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ParallelGateway_0inqdoe_di" bpmnElement="ParallelGateway_1e21h7s">
                    <dc:Bounds x="886" y="195" width="50" height="50" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_1n6wkir_di" bpmnElement="SequenceFlow_1n6wkir">
                    <di:waypoint x="805" y="330" />
                    <di:waypoint x="911" y="330" />
                    <di:waypoint x="911" y="245" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1v2ju2e_di" bpmnElement="SequenceFlow_1v2ju2e">
                    <di:waypoint x="936" y="220" />
                    <di:waypoint x="1017" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ServiceTask_1r3wr3g_di" bpmnElement="ServiceTask_0xjfg6v">
                    <dc:Bounds x="1017" y="180" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="EndEvent_0yldn2n_di" bpmnElement="EndEvent_0yldn2n">
                    <dc:Bounds x="1198" y="202" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_1xec8b8_di" bpmnElement="SequenceFlow_1xec8b8">
                    <di:waypoint x="1117" y="220" />
                    <di:waypoint x="1198" y="220" />
                  </bpmndi:BPMNEdge>
                </bpmndi:BPMNPlane>
              </bpmndi:BPMNDiagram>
            </bpmn2:definitions>
            `,
        'process-with-gateways':
            `<?xml version="1.0" encoding="UTF-8"?>
            <bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
              <bpmn2:process id="process-with-gateways" name="process-with-gateways" isExecutable="true">
                <bpmn2:documentation />
                <bpmn2:startEvent id="StartEvent_1">
                  <bpmn2:outgoing>SequenceFlow_1k98z8o</bpmn2:outgoing>
                </bpmn2:startEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_1k98z8o" sourceRef="StartEvent_1" targetRef="ServiceTask_0em0nmt" />
                <bpmn2:sequenceFlow id="SequenceFlow_1ltlcxk" sourceRef="ServiceTask_0em0nmt" targetRef="ServiceTask_0tt533q" />
                <bpmn2:serviceTask id="ServiceTask_0em0nmt" name="a" implementation="a">
                  <bpmn2:incoming>SequenceFlow_1k98z8o</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1ltlcxk</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_0tt533q" name="b" implementation="b">
                  <bpmn2:incoming>SequenceFlow_1ltlcxk</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0s9rdg1</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_1s6d5g9" name="c1" implementation="c1">
                  <bpmn2:incoming>SequenceFlow_1nms7xk</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0f54nth</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:sequenceFlow id="SequenceFlow_0s9rdg1" sourceRef="ServiceTask_0tt533q" targetRef="ParallelGateway_0e6mfrn" />
                <bpmn2:sequenceFlow id="SequenceFlow_1nms7xk" sourceRef="ParallelGateway_0e6mfrn" targetRef="ServiceTask_1s6d5g9" />
                <bpmn2:sequenceFlow id="SequenceFlow_1snyf24" sourceRef="ParallelGateway_0e6mfrn" targetRef="ServiceTask_1vtal80" />
                <bpmn2:serviceTask id="ServiceTask_1vtal80" name="c2" implementation="c2">
                  <bpmn2:incoming>SequenceFlow_1snyf24</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1n6wkir</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:parallelGateway id="ParallelGateway_0e6mfrn">
                  <bpmn2:incoming>SequenceFlow_0s9rdg1</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1nms7xk</bpmn2:outgoing>
                  <bpmn2:outgoing>SequenceFlow_1snyf24</bpmn2:outgoing>
                  <bpmn2:outgoing>SequenceFlow_1oru9bc</bpmn2:outgoing>
                  <bpmn2:outgoing>SequenceFlow_1pbz4gt</bpmn2:outgoing>
                </bpmn2:parallelGateway>
                <bpmn2:sequenceFlow id="SequenceFlow_0f54nth" sourceRef="ServiceTask_1s6d5g9" targetRef="ParallelGateway_1e21h7s" />
                <bpmn2:parallelGateway id="ParallelGateway_1e21h7s">
                  <bpmn2:incoming>SequenceFlow_0f54nth</bpmn2:incoming>
                  <bpmn2:incoming>SequenceFlow_1n6wkir</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1v2ju2e</bpmn2:outgoing>
                </bpmn2:parallelGateway>
                <bpmn2:sequenceFlow id="SequenceFlow_1n6wkir" sourceRef="ServiceTask_1vtal80" targetRef="ParallelGateway_1e21h7s" />
                <bpmn2:sequenceFlow id="SequenceFlow_1v2ju2e" sourceRef="ParallelGateway_1e21h7s" targetRef="ServiceTask_0xjfg6v" />
                <bpmn2:serviceTask id="ServiceTask_0xjfg6v" name="d" implementation="d">
                  <bpmn2:incoming>SequenceFlow_1v2ju2e</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0ohyqkc</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:sequenceFlow id="SequenceFlow_1oru9bc" sourceRef="ParallelGateway_0e6mfrn" targetRef="ServiceTask_0zg8uik" />
                <bpmn2:sequenceFlow id="SequenceFlow_0clgvcw" sourceRef="ServiceTask_0zg8uik" targetRef="ParallelGateway_1wickz2" />
                <bpmn2:parallelGateway id="ParallelGateway_1wickz2">
                  <bpmn2:incoming>SequenceFlow_0clgvcw</bpmn2:incoming>
                  <bpmn2:incoming>SequenceFlow_0ohyqkc</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1ymt8mi</bpmn2:outgoing>
                </bpmn2:parallelGateway>
                <bpmn2:sequenceFlow id="SequenceFlow_0ohyqkc" sourceRef="ServiceTask_0xjfg6v" targetRef="ParallelGateway_1wickz2" />
                <bpmn2:sequenceFlow id="SequenceFlow_1ymt8mi" sourceRef="ParallelGateway_1wickz2" targetRef="ServiceTask_11tdp0w" />
                <bpmn2:serviceTask id="ServiceTask_11tdp0w" name="e" implementation="e">
                  <bpmn2:incoming>SequenceFlow_1ymt8mi</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0tpphlm</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_0zg8uik" name="c3" implementation="c3">
                  <bpmn2:incoming>SequenceFlow_1oru9bc</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_0clgvcw</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:endEvent id="EndEvent_0lc1k0u">
                  <bpmn2:incoming>SequenceFlow_0tpphlm</bpmn2:incoming>
                </bpmn2:endEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_0tpphlm" sourceRef="ServiceTask_11tdp0w" targetRef="EndEvent_0lc1k0u" />
                <bpmn2:sequenceFlow id="SequenceFlow_1pbz4gt" sourceRef="ParallelGateway_0e6mfrn" targetRef="ServiceTask_0x25rub" />
                <bpmn2:serviceTask id="ServiceTask_0x25rub" name="c4" implementation="c4">
                  <bpmn2:incoming>SequenceFlow_1pbz4gt</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_1eu52fa</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_1p86a2s" name="c41" implementation="c41">
                  <bpmn2:incoming>SequenceFlow_10thj54</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_19h465p</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:serviceTask id="ServiceTask_0ueh6ud" name="c42" implementation="c42">
                  <bpmn2:incoming>SequenceFlow_15zijhp</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_19puzgo</bpmn2:outgoing>
                </bpmn2:serviceTask>
                <bpmn2:exclusiveGateway id="ExclusiveGateway_1t02161">
                  <bpmn2:incoming>SequenceFlow_1eu52fa</bpmn2:incoming>
                  <bpmn2:outgoing>SequenceFlow_15zijhp</bpmn2:outgoing>
                  <bpmn2:outgoing>SequenceFlow_10thj54</bpmn2:outgoing>
                </bpmn2:exclusiveGateway>
                <bpmn2:sequenceFlow id="SequenceFlow_15zijhp" sourceRef="ExclusiveGateway_1t02161" targetRef="ServiceTask_0ueh6ud">
                  <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression">\${Math.random() &lt; 0.3}</bpmn2:conditionExpression>
                </bpmn2:sequenceFlow>
                <bpmn2:sequenceFlow id="SequenceFlow_10thj54" sourceRef="ExclusiveGateway_1t02161" targetRef="ServiceTask_1p86a2s">
                  <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression">\${Math.random() &lt; 0.7}</bpmn2:conditionExpression>
                </bpmn2:sequenceFlow>
                <bpmn2:sequenceFlow id="SequenceFlow_1eu52fa" sourceRef="ServiceTask_0x25rub" targetRef="ExclusiveGateway_1t02161" />
                <bpmn2:endEvent id="EndEvent_01b7fnf">
                  <bpmn2:incoming>SequenceFlow_19h465p</bpmn2:incoming>
                </bpmn2:endEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_19h465p" sourceRef="ServiceTask_1p86a2s" targetRef="EndEvent_01b7fnf" />
                <bpmn2:endEvent id="EndEvent_14ymp1a">
                  <bpmn2:incoming>SequenceFlow_19puzgo</bpmn2:incoming>
                </bpmn2:endEvent>
                <bpmn2:sequenceFlow id="SequenceFlow_19puzgo" sourceRef="ServiceTask_0ueh6ud" targetRef="EndEvent_14ymp1a" />
              </bpmn2:process>
              <bpmndi:BPMNDiagram id="BPMNDiagram_1">
                <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process-with-gateways">
                  <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
                    <dc:Bounds x="233" y="202" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_1k98z8o_di" bpmnElement="SequenceFlow_1k98z8o">
                    <di:waypoint x="269" y="220" />
                    <di:waypoint x="319" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1ltlcxk_di" bpmnElement="SequenceFlow_1ltlcxk">
                    <di:waypoint x="419" y="220" />
                    <di:waypoint x="469" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ServiceTask_0ahiozx_di" bpmnElement="ServiceTask_0em0nmt">
                    <dc:Bounds x="319" y="180" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_0i3wp3i_di" bpmnElement="ServiceTask_0tt533q">
                    <dc:Bounds x="469" y="180" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_0135jfz_di" bpmnElement="ServiceTask_1s6d5g9">
                    <dc:Bounds x="705" y="105" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_0s9rdg1_di" bpmnElement="SequenceFlow_0s9rdg1">
                    <di:waypoint x="569" y="220" />
                    <di:waypoint x="619" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1nms7xk_di" bpmnElement="SequenceFlow_1nms7xk">
                    <di:waypoint x="644" y="195" />
                    <di:waypoint x="644" y="145" />
                    <di:waypoint x="705" y="145" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1snyf24_di" bpmnElement="SequenceFlow_1snyf24">
                    <di:waypoint x="644" y="245" />
                    <di:waypoint x="644" y="330" />
                    <di:waypoint x="705" y="330" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ServiceTask_0vo36ki_di" bpmnElement="ServiceTask_1vtal80">
                    <dc:Bounds x="705" y="290" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ParallelGateway_03a8oqx_di" bpmnElement="ParallelGateway_0e6mfrn">
                    <dc:Bounds x="619" y="195" width="50" height="50" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_0f54nth_di" bpmnElement="SequenceFlow_0f54nth">
                    <di:waypoint x="805" y="145" />
                    <di:waypoint x="911" y="145" />
                    <di:waypoint x="911" y="195" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ParallelGateway_0inqdoe_di" bpmnElement="ParallelGateway_1e21h7s">
                    <dc:Bounds x="886" y="195" width="50" height="50" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_1n6wkir_di" bpmnElement="SequenceFlow_1n6wkir">
                    <di:waypoint x="805" y="330" />
                    <di:waypoint x="911" y="330" />
                    <di:waypoint x="911" y="245" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1v2ju2e_di" bpmnElement="SequenceFlow_1v2ju2e">
                    <di:waypoint x="936" y="220" />
                    <di:waypoint x="1017" y="220" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ServiceTask_1r3wr3g_di" bpmnElement="ServiceTask_0xjfg6v">
                    <dc:Bounds x="1017" y="180" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_1oru9bc_di" bpmnElement="SequenceFlow_1oru9bc">
                    <di:waypoint x="644" y="245" />
                    <di:waypoint x="644" y="440" />
                    <di:waypoint x="705" y="440" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_0clgvcw_di" bpmnElement="SequenceFlow_0clgvcw">
                    <di:waypoint x="805" y="440" />
                    <di:waypoint x="1042" y="440" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ParallelGateway_1jdn07n_di" bpmnElement="ParallelGateway_1wickz2">
                    <dc:Bounds x="1042" y="415" width="50" height="50" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_0ohyqkc_di" bpmnElement="SequenceFlow_0ohyqkc">
                    <di:waypoint x="1067" y="260" />
                    <di:waypoint x="1067" y="415" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1ymt8mi_di" bpmnElement="SequenceFlow_1ymt8mi">
                    <di:waypoint x="1092" y="440" />
                    <di:waypoint x="1202" y="440" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ServiceTask_1ga238e_di" bpmnElement="ServiceTask_11tdp0w">
                    <dc:Bounds x="1202" y="400" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_03heizd_di" bpmnElement="ServiceTask_0zg8uik">
                    <dc:Bounds x="705" y="400" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="EndEvent_0lc1k0u_di" bpmnElement="EndEvent_0lc1k0u">
                    <dc:Bounds x="1412" y="422" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_0tpphlm_di" bpmnElement="SequenceFlow_0tpphlm">
                    <di:waypoint x="1302" y="440" />
                    <di:waypoint x="1412" y="440" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1pbz4gt_di" bpmnElement="SequenceFlow_1pbz4gt">
                    <di:waypoint x="644" y="245" />
                    <di:waypoint x="644" y="550" />
                    <di:waypoint x="705" y="550" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="ServiceTask_1am0avc_di" bpmnElement="ServiceTask_0x25rub">
                    <dc:Bounds x="705" y="510" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_0kmoxg5_di" bpmnElement="ServiceTask_1p86a2s">
                    <dc:Bounds x="927" y="510" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ServiceTask_0vehfu4_di" bpmnElement="ServiceTask_0ueh6ud">
                    <dc:Bounds x="927" y="620" width="100" height="80" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNShape id="ExclusiveGateway_1t02161_di" bpmnElement="ExclusiveGateway_1t02161" isMarkerVisible="true">
                    <dc:Bounds x="841" y="525" width="50" height="50" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_15zijhp_di" bpmnElement="SequenceFlow_15zijhp">
                    <di:waypoint x="866" y="575" />
                    <di:waypoint x="866" y="660" />
                    <di:waypoint x="927" y="660" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_10thj54_di" bpmnElement="SequenceFlow_10thj54">
                    <di:waypoint x="891" y="550" />
                    <di:waypoint x="927" y="550" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNEdge id="SequenceFlow_1eu52fa_di" bpmnElement="SequenceFlow_1eu52fa">
                    <di:waypoint x="805" y="550" />
                    <di:waypoint x="841" y="550" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="EndEvent_01b7fnf_di" bpmnElement="EndEvent_01b7fnf">
                    <dc:Bounds x="1063" y="532" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_19h465p_di" bpmnElement="SequenceFlow_19h465p">
                    <di:waypoint x="1027" y="550" />
                    <di:waypoint x="1063" y="550" />
                  </bpmndi:BPMNEdge>
                  <bpmndi:BPMNShape id="EndEvent_14ymp1a_di" bpmnElement="EndEvent_14ymp1a">
                    <dc:Bounds x="1063" y="642" width="36" height="36" />
                  </bpmndi:BPMNShape>
                  <bpmndi:BPMNEdge id="SequenceFlow_19puzgo_di" bpmnElement="SequenceFlow_19puzgo">
                    <di:waypoint x="1027" y="660" />
                    <di:waypoint x="1063" y="660" />
                  </bpmndi:BPMNEdge>
                </bpmndi:BPMNPlane>
              </bpmndi:BPMNDiagram>
            </bpmn2:definitions>
            `
    }

};

