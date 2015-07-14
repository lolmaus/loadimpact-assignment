import ApplicationAdapter from './application';
import icajax from 'ic-ajax';

export default ApplicationAdapter.extend({

  // CUSTOM METHODS
  requestTotalCount () {
    let url = this.buildURL('request') + '/totalCount';

    return icajax({url: url})
      .then((metadata) => {
        this.store.setMetadataFor('request', metadata);
        return metadata;
      });
  }
});
