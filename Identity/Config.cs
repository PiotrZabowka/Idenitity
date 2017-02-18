using System.Collections.Generic;
using IdentityServer4.Models;
using IdentityModel;

namespace WebApplication1
{
    public class Config
    {
        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "service.client",
                    ClientSecrets = { new Secret("secret".Sha256()) },

                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    AllowedScopes = { "api1", "api2.read_only" }
                }
            };
        }
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Email(),
                new IdentityResources.Profile(),
                new IdentityResources.Address()
            };
        }
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new[]
            {
                // simple API with a single scope (in this case the scope name is the same as the api name)
                new ApiResource("api1", "Some API 1"),

                // expanded version if more control is needed
                new ApiResource
                {
                    Name = "api2",

                    // secret for using introspection endpoint
                    ApiSecrets =
                    {
                        new Secret("secret".Sha256())
                    },

                    // include the following using claims in access token (in addition to subject id)
                    UserClaims = { JwtClaimTypes.Name, JwtClaimTypes.Email },
                    // this API defines two scopes
                    Scopes =
                    {
                        new Scope("api2.full_access", "Full access to API 2"),
                        new Scope("api2.read_only", "Read only access to API 2")
                    }
                }
            };
        }
    }
}
