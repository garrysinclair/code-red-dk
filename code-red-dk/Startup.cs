using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(code_red_dk.Startup))]
namespace code_red_dk
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
