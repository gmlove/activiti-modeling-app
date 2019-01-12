 /*!
 * @license
 * Copyright 2018 Alfresco, Inc. and/or its affiliates.
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

import { Store } from '@ngrx/store';
import { ProcessesFilterDataAdapter } from './processes-filter.data-adapter';
import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { cold } from 'jasmine-marbles';
import { PROCESS } from 'ama-sdk';
import { AmaState } from 'ama-sdk';
import { selectProcessesLoading } from '../store/process-editor.selectors';

describe('ProcessesFilterDataAdapter ', () => {
    let store: Store<AmaState>;
    let processFilterDataAdapter: ProcessesFilterDataAdapter;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                ProcessesFilterDataAdapter,
                {
                    provide: Store,
                    useValue: {
                        select: jest.fn().mockImplementation((selector) => {
                            if (selector === selectProcessesLoading) {
                                return of(true);
                            }

                            return of({});
                        }),
                        dispatch: jest.fn()
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        processFilterDataAdapter = TestBed.get(ProcessesFilterDataAdapter);
    });

    it('should test expanded getter', () => {
        const expanded = processFilterDataAdapter.expandedPredicate([PROCESS]);
        expect(expanded).toBe(true);
    });

    it('should test loading getter', () => {
        const expected = cold('(x|)', { x: true });
        expect(processFilterDataAdapter.loading).toBeObservable(expected);
    });

    it('should test contents getter', () => {
        const expected = cold('(x|)', { x: {} });
        expect(processFilterDataAdapter.contents).toBeObservable(expected);
    });

    it('should test load function', () => {
        spyOn(store, 'dispatch');
        processFilterDataAdapter.load('id');

        expect(store.dispatch).toHaveBeenCalled();
    });
});