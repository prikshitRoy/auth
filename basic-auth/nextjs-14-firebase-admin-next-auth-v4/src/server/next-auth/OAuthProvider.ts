type Provider = "GOOGLE" | "GITHUB";

export function getCredentials(provider: Provider) {
  const clientId = process.env[`${provider}_CLIENT_ID`];
  const clientSecret = process.env[`${provider}_CLIENT_SECRET`];

  if (!clientId || clientId.length === 0) {
    throw new Error(`No clientID for ${provider} provider set`);
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error(`No clientSecret for ${provider} provider set`);
  }

  return { clientId, clientSecret };
}
