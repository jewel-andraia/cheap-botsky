import { BskyAgent, AtpSessionEvent, AtpSessionData } from '@atproto/api'
const { CheapBotskyPoster } from '../../models';

function ATProtoPoster() {
  // Statics
  socialBackend = 'atproto';
}
Object.setPrototypeOf(ATProtoPoster.prototype, CheapBotskyPoster.prototype);


const defaultAuthenticateDetails = {
  service: 'bsky.app',
  identifier: process.env.ATPROTO_TESTUSER_IDENTIFIER,
  password: process.env.ATPROTO_TESTUSER_PASSWORD,
};

ATProtoPoster.prototype.authenticate = async function(details) {
  details = Object.extend(details, defaultAuthenticateDetails);
  
  if (!this.agent) {
    this.agent = new BskyAgent({
      service: details.service;
      persistSession: (evt: AtpSessionEvent, sess?: AtpSessionData) => {
        // store the session-data for reuse 
        this.session = session;
      }
    });
  }

  if (details.session) {
    await this.agent.resumeSession(details.session);
  } else {
    await this.agent.login({
      identifier: details.identifier,
      password: details.password,
    });
  }
}


ATProtoPoster.prototype.post = async function(message, context) {
  if (!this.session) {
    throw "NotAuthenticated";
  }
  
  await this.agent.post(message);
}