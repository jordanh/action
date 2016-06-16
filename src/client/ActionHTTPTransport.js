import {HTTPTransport} from 'cashay';
import {getGraphQLUri} from 'universal/utils/graphQLConfig';

export default class ActionHTTPTransport extends HTTPTransport {
  constructor(authToken) {
    super();
    this.uri = getGraphQLUri();
    this.init = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    };
  }
}
