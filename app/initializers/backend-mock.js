import Requests from 'loadimpact-assignment/fixtures/requests';
//import Pretender from 'pretender';

// Formatting data into JSONAPI format
let requests = Requests.map((request) => {
  let id = request.id;
  delete request.id;
  return {
    id: id,
    type: 'requests',
    attributes: request
  } ;
});

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');

  let server = new Pretender(function(){
    this.get('/requests', function(request){

      // Special case: reporting count only
      if (request.queryParams && request.queryParams.count)
        return [200, {}, {meta: {totalCount: requests.count}}];

      let suggestedLimit = request.queryParams && request.queryParams.limit;
      let limit = parseInt(suggestedLimit, 10);

      if (
        isNaN(limit)
        || !isFinite(limit)
        || limit < 1
        || limit > 250
      )
        return [500, {}, {error: 'incorrect limit'}];

      let suggestedPage = request.queryParams && request.queryParams.page;
      let page = parseInt(suggestedPage, 10);

      if (
        isNaN(page)
        || !isFinite(page)
        || page < 1
      )
        return [500, {}, {error: 'incorrect limit'}];

      let columns = ['id'].concat(Object.keys(requests[0].attributes));
      let suggestedSortBy = request.queryParams && request.queryParams.sortBy;
      let sortBy;
      if (columns.indexOf(suggestedSortBy) > -1)
        sortBy = suggestedSortBy;
      else
        return [500, {}, {error: 'incorrect sortBy'}];

      let suggestedSortOrder = request.queryParams && request.queryParams.sortOrder;
      let reverseOrder;
      if (!suggestedSortOrder || suggestedSortOrder === 'asc')
        reverseOrder = false;
      else if (suggestedSortOrder === 'desc')
        reverseOrder = true;
      else
        return [500, {}, {error: 'incorrect sortOrder'}];

      let sortedRequests = requests;

      if (sortBy !== 'id')
        sortedRequests = requests.slice().sort((a, b) => {
          if (a.attributes[sortBy] > b.attributes[sortBy]) return 1;
          if (a.attributes[sortBy] < b.attributes[sortBy]) return -1;
          return 0;
        });

      if (reverseOrder) sortedRequests.reverse();

      let firstItemIndex = limit * (page - 1); // zero-indexed array vs one-indexed query param
      let lastItemIndex  = limit * page;

      let filteredRequests = sortedRequests.slice(firstItemIndex, lastItemIndex);

      let all =  {
        data: filteredRequests,
        meta: {
          totalCount: requests.length
        }
      };

      return [200, {}, all];
    }, 1500);


    this.get('/requests/totalCount', function() {
      return [200, {}, {totalCount: requests.length}];
    });
  });

  server.handledRequest = function (verb, path, request) {
    Ember.Logger.info("AJAX request", verb, path, request, JSON.parse(request.responseText));
  };

  server.prepareBody = function (body) {
    return body ? JSON.stringify(body) : '{"error": "not found"}';
  };

  server.prepareHeaders = function(headers){
    headers['content-type'] = 'application/json';
    return headers;
  };
}

export default {
  name: 'backend-mock',
  initialize: initialize
};

