import ApplicationAdapter from './application';
import icajax from 'ic-ajax';

export default ApplicationAdapter.extend({

  // METHODS
  requestTotalCount: function() {
    var url = this.buildURL('request') + '/totalCount';

    return icajax({url: url})
      .then((metadata) => {
        this.store.setMetadataFor('request', metadata);
        return metadata;
      });
  }
});
