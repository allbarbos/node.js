'use strict';
const applyTemplate = require('./apply-template');

const dashboard = [
    {
        "_id": "Custom",
        "_type": "dashboard",
        "_source": {
            "title": "Custom",
            "hits": 0,
            "description": "",
            "panelsJSON": "[{\"col\":1,\"id\":\"Total-Calls\",\"panelIndex\":1,\"row\":1,\"size_x\":12,\"size_y\":2,\"type\":\"visualization\"},{\"col\":1,\"id\":\"Status-Code\",\"panelIndex\":2,\"row\":3,\"size_x\":3,\"size_y\":4,\"type\":\"visualization\"},{\"col\":4,\"id\":\"Call-vs.-Status-Code\",\"panelIndex\":3,\"row\":3,\"size_x\":9,\"size_y\":4,\"type\":\"visualization\"},{\"col\":1,\"id\":\"Total-by-Operation\",\"panelIndex\":4,\"row\":7,\"size_x\":3,\"size_y\":4,\"type\":\"visualization\"},{\"col\":4,\"id\":\"Call-by-operations\",\"panelIndex\":5,\"row\":7,\"size_x\":9,\"size_y\":4,\"type\":\"visualization\"},{\"col\":1,\"id\":\"App-Name\",\"panelIndex\":6,\"row\":11,\"size_x\":3,\"size_y\":4,\"type\":\"visualization\"},{\"col\":4,\"id\":\"App-Name-Histogram\",\"panelIndex\":7,\"row\":11,\"size_x\":9,\"size_y\":4,\"type\":\"visualization\"},{\"id\":\"Latência-Média-e-Máxima\",\"type\":\"visualization\",\"panelIndex\":8,\"size_x\":3,\"size_y\":6,\"col\":1,\"row\":15},{\"id\":\"Latência-Média-Histogram\",\"type\":\"visualization\",\"panelIndex\":9,\"size_x\":9,\"size_y\":3,\"col\":4,\"row\":15},{\"id\":\"Latência-Máxima-Histogram\",\"type\":\"visualization\",\"panelIndex\":10,\"size_x\":9,\"size_y\":3,\"col\":4,\"row\":18}]",
            "optionsJSON": "{\"darkTheme\":false}",
            "uiStateJSON": "{\"P-2\":{\"vis\":{\"colors\":{\"200\":\"#3F6833\",\"201\":\"#7EB26D\",\"400\":\"#967302\",\"401\":\"#F2C96D\",\"404\":\"#E5AC0E\",\"429\":\"#CCA300\",\"502\":\"#890F02\"}}},\"P-3\":{\"vis\":{\"colors\":{\"200\":\"#3F6833\",\"201\":\"#7EB26D\",\"400\":\"#CCA300\",\"401\":\"#F2C96D\",\"404\":\"#E5AC0E\",\"429\":\"#F2C96D\",\"500\":\"#BF1B00\",\"502\":\"#890F02\"}}},\"P-4\":{\"vis\":{\"colors\":{\"Credita API GET /faturamentos\":\"#962D82\",\"Credita API GET /protocolos/{numeroProtocolo}\":\"#447EBC\",\"Credita API POST /protocolos/{numeroProtocolo}/processamento\":\"#7EB26D\"}}},\"P-5\":{\"vis\":{\"colors\":{\"Credita API GET /faturamentos\":\"#962D82\",\"Credita API GET /protocolos/{numeroProtocolo}\":\"#447EBC\",\"Credita API POST /protocolos/{numeroProtocolo}/processamento\":\"#7EB26D\"}}},\"P-6\":{\"vis\":{\"colors\":{\"Mobile\":\"#962D82\",\"Web\":\"#EF843C\"}}},\"P-7\":{\"vis\":{\"colors\":{\"Mobile\":\"#962D82\",\"Web\":\"#EF843C\"}}}}",
            "version": 1,
            "timeRestore": false,
            "kibanaSavedObjectMeta": {
                "searchSourceJSON": "{\"filter\":[{\"query\":{\"query_string\":{\"analyze_wildcard\":true,\"query\":\"apiName: \\\"${nomeApi}\\\"\"}}}]}"
            }
        }
    }
];

module.exports = applyTemplate(dashboard, '${nomeApi}');
