/*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoreModule, TranslationService, TranslationMock } from '@alfresco/adf-core';
import { MappingDialogComponent } from './mapping-dialog.component';
import { MappingDialogModule } from './mapping-dialog.module';
import { MappingDialogData, VariableMappingType } from '../../services/mapping-dialog.service';
import { of } from 'rxjs';
import { MappingType } from '../../api/types';
import { UuidService } from '../../services/public-api';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { InputMappingDialogService } from '../../services/input-mapping-dialog.service';
import { OutputMappingDialogService } from '../../services/output-mapping-dialog.service';
import {
    PropertiesViewerStringInputComponent,
    PropertiesViewerDateInputComponent,
    PropertiesViewerDateTimeInputComponent,
    PropertiesViewerIntegerInputComponent,
    PropertiesViewerBooleanInputComponent,
    InputTypeItem,
    INPUT_TYPE_ITEM_HANDLER
} from '../../variables/public-api';
import { By } from '@angular/platform-browser';
import { variable } from '@angular/compiler/src/output/output_ast';

describe('MappingDialogComponent', () => {
    let fixture: ComponentFixture<MappingDialogComponent>;
    let component: MappingDialogComponent;
    let element: DebugElement;

    const inputTypes: InputTypeItem[] = [
        { type: 'string', implementationClass: PropertiesViewerStringInputComponent, primitiveType: 'string' },
        { type: 'date', implementationClass: PropertiesViewerDateInputComponent, primitiveType: 'date' },
        { type: 'datetime', implementationClass: PropertiesViewerDateTimeInputComponent, primitiveType: 'datetime' },
        { type: 'integer', implementationClass: PropertiesViewerIntegerInputComponent, primitiveType: 'integer' },
        { type: 'boolean', implementationClass: PropertiesViewerBooleanInputComponent, primitiveType: 'boolean' }
    ];

    const inputMappingDialogService: InputMappingDialogService = new InputMappingDialogService(inputTypes);
    inputMappingDialogService.initExpressionEditor = function (language: string, parameters: any[]) { };
    inputMappingDialogService.updateEditorLanguageSettings = function (
        language: string,
        languagesDef?: monaco.languages.IMonarchLanguage,
        themeNames?: string[],
        themes?: monaco.editor.IStandaloneThemeData[],
        suggestions?: monaco.languages.CompletionItem[]) { };
    inputMappingDialogService.removeEditorLanguageSettings = function (language: string) { };
    const outputMappingDialogService: OutputMappingDialogService = new OutputMappingDialogService(inputTypes);
    outputMappingDialogService.initExpressionEditor = function (language: string, parameters: any[]) { };
    outputMappingDialogService.updateEditorLanguageSettings = function (
        language: string,
        languagesDef?: monaco.languages.IMonarchLanguage,
        themeNames?: string[],
        themes?: monaco.editor.IStandaloneThemeData[],
        suggestions?: monaco.languages.CompletionItem[]) { };
    inputMappingDialogService.removeEditorLanguageSettings = function (language: string) { };

    const mockDialogDataInputMapping: MappingDialogData = {
        theme$: of(''),
        mappingType: VariableMappingType.input,
        inputMapping: {
            checkid: { type: MappingType.variable, value: 'booleanVar' },
            dateid: { type: MappingType.variable, value: 'dateVar' },
            datetimeid: { type: MappingType.variable, value: 'datetimeVar' },
            numberid: { type: MappingType.variable, value: 'integerVar' },
            textexp: { type: MappingType.value, value: '${textExpression}' },
            textid: { type: MappingType.variable, value: 'stringVar' },
            textval: { type: MappingType.value, value: 'textValue' }
        },
        inputParameters: [
            { id: 'checkid', label: 'Label Checkbox', name: 'checkid', type: 'boolean', description: 'Label Checkbox' },
            { id: 'dateid', label: 'Label Date', name: 'dateid', type: 'date', description: 'Label Date' },
            { id: 'datetimeid', label: '', name: 'datetimeid', type: 'datetime', description: 'Label DateTime' },
            { id: 'numberid', label: 'Label Number', name: 'numberid', type: 'integer', description: 'Label Number' },
            { id: 'textval', label: '', name: 'textval', type: 'string', description: '' },
            { id: 'textid', label: 'Label Text', name: 'textid', type: 'string', description: 'Label Text' },
            { id: 'textexp', label: '', name: 'textexp', type: 'string', description: '' }
        ],
        processProperties: [
            { id: '1e6da084-63bf-4f2a-8003-bd0969f461e9', name: 'datetimeVar', type: 'datetime', required: false, value: undefined },
            { id: 'a9af83ae-5fd2-4547-8d9a-122d9edf96a2', name: 'stringVar', type: 'string', required: false, value: undefined },
            { id: '8046efe8-c58d-42af-8958-dd9a9048c72b', name: 'integerVar', type: 'integer', required: false, value: undefined },
            { id: '7d073289-abd9-40d8-9124-e7b10cdd218f', name: 'dateVar', type: 'date', required: false, value: undefined },
            { id: 'a3ec58eb-d30b-4764-8034-92f422e1de6c', name: 'booleanVar', type: 'boolean', required: false, value: undefined },
            { id: '97cba7e6-53af-409e-821b-5fe9697f77a9', name: 'stringValue', type: 'string', required: false, value: undefined },
            { id: '52e54d3e-1fbd-4440-b023-aff935a18aab', name: 'stringExpression', type: 'string', required: false, value: undefined }
        ],
        selectedRow: 0
    };

    const mockDialogDataOutputMapping: MappingDialogData = {
        theme$: of(''),
        mappingType: VariableMappingType.output,
        outputMapping: {
            stringVar: { type: MappingType.variable, value: 'textid' },
            booleanVar: { type: MappingType.variable, value: 'checkid' },
            datetimeVar: { type: MappingType.variable, value: 'datetimeid' },
            integerVar: { type: MappingType.variable, value: 'numberid' },
            dateVar: { type: MappingType.variable, value: 'dateid' }
        },
        outputParameters: [
            { id: 'checkid', label: 'Label Checkbox', name: 'checkid', type: 'boolean', description: 'Label Checkbox' },
            { id: 'dateid', label: 'Label Date', name: 'dateid', type: 'date', description: 'Label Date' },
            { id: 'datetimeid', label: '', name: 'datetimeid', type: 'datetime', description: 'Label DateTime' },
            { id: 'numberid', label: 'Label Number', name: 'numberid', type: 'integer', description: 'Label Number' },
            { id: 'textval', label: '', name: 'textval', type: 'string', description: '' },
            { id: 'textid', label: 'Label Text', name: 'textid', type: 'string', description: 'Label Text' },
            { id: 'textexp', label: '', name: 'textexp', type: 'string', description: '' }
        ],
        processProperties: [
            { id: '1e6da084-63bf-4f2a-8003-bd0969f461e9', name: 'datetimeVar', type: 'datetime', required: false, value: undefined },
            { id: 'a9af83ae-5fd2-4547-8d9a-122d9edf96a2', name: 'stringVar', type: 'string', required: false, value: undefined },
            { id: '8046efe8-c58d-42af-8958-dd9a9048c72b', name: 'integerVar', type: 'integer', required: false, value: undefined },
            { id: '7d073289-abd9-40d8-9124-e7b10cdd218f', name: 'dateVar', type: 'date', required: false, value: undefined },
            { id: 'a3ec58eb-d30b-4764-8034-92f422e1de6c', name: 'booleanVar', type: 'boolean', required: false, value: undefined },
            { id: '97cba7e6-53af-409e-821b-5fe9697f77a9', name: 'stringValue', type: 'string', required: false, value: undefined },
            { id: '52e54d3e-1fbd-4440-b023-aff935a18aab', name: 'stringExpression', type: 'string', required: false, value: undefined }
        ],
        selectedRow: 1,
        selectedProcessVariable: 'booleanVar'
    };

    const mockDialog = {
        close: jest.fn()
    };

    function setUpTestBed(customMockDialogData) {
        TestBed.configureTestingModule({
            imports: [
                CoreModule.forRoot(),
                MonacoEditorModule.forRoot(),
                MappingDialogModule,
                NoopAnimationsModule,
                FormsModule
            ],
            providers: [
                { provide: MatDialogRef, useValue: mockDialog },
                { provide: MAT_DIALOG_DATA, useValue: customMockDialogData },
                { provide: TranslationService, useClass: TranslationMock },
                { provide: UuidService, useValue: { generate() { return 'generated-uuid'; } } },
                { provide: InputMappingDialogService, useValue: inputMappingDialogService },
                { provide: OutputMappingDialogService, useValue: outputMappingDialogService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(MappingDialogComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        fixture.detectChanges();
    }

    describe('Display existing input mapping', () => {
        beforeEach(async(() => {
            setUpTestBed(mockDialogDataInputMapping);
        }));

        it('should render mapping table correctly', () => {
            const parameters = Object.values(mockDialogDataInputMapping.inputParameters);

            const rows = element.queryAll(By.css('div.mapping-table-viewer mat-row'));
            expect(rows.length).toBe(parameters.length);

            for (let index = 0; index < rows.length; index++) {
                const parameter = parameters[index];
                const mapping = mockDialogDataInputMapping.inputMapping[parameter.id];

                const parameterContainer = element.query(By.css(`[data-automation-id=variable-name-cell-${index}]`));
                const rowContainer = element.query(By.css(`[data-automation-id=mapping-row-${index}]`));
                const iconContainer = element.query(By.css(`[data-automation-id=variable-icon-cell-${index}] mat-icon`));
                const variableValueContainer = element.query(By.css(`[data-automation-id=variable-value-cell-${index}] span`));
                const deleteButtonContainer = element.query(By.css(`[data-automation-id=delete-row-button-${index}]`));

                expect(parameterContainer.nativeElement.textContent.trim()).toBe(parameter.label && parameter.label !== '' ? parameter.label : parameter.name);
                expect(variableValueContainer.nativeElement.textContent.trim()).toBe(mapping.value);
                if (mapping.type === MappingType.variable) {
                    expect(variableValueContainer.nativeElement.className).toBe('variable-mapping');
                } else {
                    expect(variableValueContainer.nativeElement.className).toBe('non-variable-mapping');
                }
                expect(rowContainer.classes['active']).toBe(mockDialogDataInputMapping.selectedRow === index);
                expect(iconContainer.nativeElement.textContent.trim()).toBe('arrow_backward');
                expect(deleteButtonContainer).toBeNull();
            }
        });
    });

    describe('Display existing output mapping', () => {
        beforeEach(async(() => {
            setUpTestBed(mockDialogDataOutputMapping);
        }));

        it('should render mapping table correctly', () => {
            const outputMapping = Object.keys(mockDialogDataOutputMapping.outputMapping);

            const rows = element.queryAll(By.css('div.mapping-table-viewer mat-row'));
            expect(rows.length).toBe(outputMapping.length);

            for (let index = 0; index < rows.length; index++) {
                const mappingKey = outputMapping[index];
                const mapping = mockDialogDataOutputMapping.outputMapping[mappingKey];

                const parameterContainer = element.query(By.css(`[data-automation-id=variable-name-cell-${index}]`));
                const rowContainer = element.query(By.css(`[data-automation-id=mapping-row-${index}]`));
                const iconContainer = element.query(By.css(`[data-automation-id=variable-icon-cell-${index}] mat-icon`));
                const variableValueContainer = element.query(By.css(`[data-automation-id=variable-value-cell-${index}] span`));
                const deleteButtonContainer = element.query(By.css(`[data-automation-id=delete-row-button-${index}]`));

                let parameter = '';
                if (mapping.type === MappingType.variable) {
                    const parameterFound = mockDialogDataOutputMapping.outputParameters.find(param => param.id === mapping.value);
                    parameter = parameterFound.label && parameterFound.label !== '' ? parameterFound.label : parameterFound.name;
                    expect(parameterContainer.classes['variable-mapping']).toBe(true);
                } else {
                    parameter = mapping.value;
                    expect(parameterContainer.classes['non-variable-mapping']).toBe(true);
                }

                expect(parameterContainer.nativeElement.textContent.trim()).toBe(parameter);
                expect(variableValueContainer.nativeElement.textContent.trim()).toBe(mappingKey);
                expect(variableValueContainer.nativeElement.className).toBe('variable-mapping');
                expect(rowContainer.classes['active']).toBe(mockDialogDataOutputMapping.selectedRow === index);
                expect(iconContainer.nativeElement.textContent.trim()).toBe('arrow_forward');
                expect(deleteButtonContainer).toBeDefined();
            }
        });
    });

});
