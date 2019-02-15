'use strict';

exports.templateKibana = (req, response) => {
  const obj = {
    "dashboard" : getDashboard(req.query.nomeApi),
    "visualize" : getVisualizes(req.query.idIndex)
  }
  
  response.status(200).json(obj);
};


const getDashboard = function(nomeApi) {
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
  const text = JSON.stringify(dashboard).replace(/\${nomeApi}/gm, nomeApi);
  return JSON.parse(text);
}

const getVisualizes = function(idIndex) {
  const visualization = [
    {
      "_id": "Total-Calls",
      "_type": "visualization",
      "_source": {
        "title": "Total Calls",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"metric\",\"params\":{\"fontSize\":60},\"aggs\":[{\"id\":\"1\",\"type\":\"count\",\"schema\":\"metric\",\"params\":{}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    },
    {
      "_id": "Total-by-Operation",
      "_type": "visualization",
      "_source": {
        "title": "Total by Operation",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"pie\",\"params\":{\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"isDonut\":false},\"aggs\":[{\"id\":\"1\",\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"operationName\",\"size\":0,\"order\":\"desc\",\"orderBy\":\"1\"}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    },
    {
      "_id": "Call-vs.-Status-Code",
      "_type": "visualization",
      "_source": {
        "title": "Call vs. Status Code",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"histogram\",\"params\":{\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"scale\":\"linear\",\"mode\":\"stacked\",\"times\":[],\"addTimeMarker\":false,\"defaultYExtents\":false,\"setYExtents\":false,\"yAxis\":{}},\"aggs\":[{\"id\":\"1\",\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"receivedOnDate\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}},{\"id\":\"3\",\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"resultStatus\",\"size\":0,\"order\":\"desc\",\"orderBy\":\"1\"}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    },
    {
      "_id": "Status-Code",
      "_type": "visualization",
      "_source": {
        "title": "Status Code",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"pie\",\"params\":{\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"isDonut\":false},\"aggs\":[{\"id\":\"1\",\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"resultStatus\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    },
    {
      "_id": "Call-by-operations",
      "_type": "visualization",
      "_source": {
        "title": "Call by operations",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"histogram\",\"params\":{\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"scale\":\"linear\",\"mode\":\"stacked\",\"times\":[],\"addTimeMarker\":false,\"defaultYExtents\":false,\"setYExtents\":false,\"yAxis\":{}},\"aggs\":[{\"id\":\"1\",\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"receivedOnDate\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}},{\"id\":\"3\",\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"operationName\",\"size\":0,\"order\":\"desc\",\"orderBy\":\"1\"}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    },
    {
      "_id": "App-Name",
      "_type": "visualization",
      "_source": {
        "title": "App Name",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"pie\",\"params\":{\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"isDonut\":false},\"aggs\":[{\"id\":\"1\",\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"appName\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    },
    {
      "_id": "App-Name-Histogram",
      "_type": "visualization",
      "_source": {
        "title": "App Name Histogram",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"histogram\",\"params\":{\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"scale\":\"linear\",\"mode\":\"stacked\",\"times\":[],\"addTimeMarker\":false,\"defaultYExtents\":false,\"setYExtents\":false,\"yAxis\":{}},\"aggs\":[{\"id\":\"1\",\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"receivedOnDate\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}},{\"id\":\"3\",\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"appName\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    },
    {
      "_id": "Latência-Média-e-Máxima",
      "_type": "visualization",
      "_source": {
        "title": "Latência Média e Máxima",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"metric\",\"params\":{\"fontSize\":60},\"aggs\":[{\"id\":\"1\",\"type\":\"avg\",\"schema\":\"metric\",\"params\":{\"field\":\"durationMillis\"}},{\"id\":\"2\",\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"durationMillis\"}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    },
    {
      "_id": "Latência-Máxima-Histogram",
      "_type": "visualization",
      "_source": {
        "title": "Latência Máxima Histogram",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"histogram\",\"params\":{\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"scale\":\"linear\",\"mode\":\"stacked\",\"times\":[],\"addTimeMarker\":false,\"defaultYExtents\":false,\"setYExtents\":false,\"yAxis\":{}},\"aggs\":[{\"id\":\"1\",\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"durationMillis\"}},{\"id\":\"2\",\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"receivedOnDate\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    },
    {
      "_id": "Latência-Média-Histogram",
      "_type": "visualization",
      "_source": {
        "title": "Latência Média Histogram",
        "visState": "{\"title\":\"New Visualization\",\"type\":\"histogram\",\"params\":{\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"scale\":\"linear\",\"mode\":\"stacked\",\"times\":[],\"addTimeMarker\":false,\"defaultYExtents\":false,\"setYExtents\":false,\"yAxis\":{}},\"aggs\":[{\"id\":\"1\",\"type\":\"avg\",\"schema\":\"metric\",\"params\":{\"field\":\"durationMillis\"}},{\"id\":\"2\",\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"receivedOnDate\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}],\"listeners\":{}}",
        "uiStateJSON": "{}",
        "description": "",
        "version": 1,
        "kibanaSavedObjectMeta": {
          "searchSourceJSON": "{\"index\":\"${idIndex}\",\"query\":{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},\"filter\":[]}"
        }
      }
    }
  ];
  const text = JSON.stringify(visualization).replace(/\${idIndex}/gm, idIndex);
  return JSON.parse(text);
}
