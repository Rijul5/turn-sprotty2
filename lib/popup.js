"use strict";
/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.popupModelFactory = void 0;
// TODO delete?
function popupModelFactory(request, element) {
    if (element !== undefined && (element.type === 'node:class' || element.type === 'node:note')) {
        return {
            type: 'html',
            id: 'popup',
            children: [
                {
                    type: 'pre-rendered',
                    id: 'popup-title',
                    code: "<div class=\"sprotty-popup-title\">Class " + (element.id === 'node0' ? 'Foo' : 'Bar') + "</div>"
                },
                {
                    type: 'pre-rendered',
                    id: 'popup-body',
                    code: '<div class="sprotty-popup-body">' +
                        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain ' +
                        'was ' +
                        'born and I will give you a complete account of the system, and expound the actual teachings of ' +
                        'the great explorer of the truth, the master-builder of human happiness.</div>'
                }
            ]
        };
    }
    return undefined;
}
exports.popupModelFactory = popupModelFactory;
//# sourceMappingURL=popup.js.map