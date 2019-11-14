using System.Collections.Generic;
using System.Linq;
using LandmarkRemark.Domain;

namespace LandmarkRemark.Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Markers.Any())
            {
                var markers = new List<Marker>
                {
                    new Marker
                    {
                        Latitude = -33.7961m,
                        Longitude = 151.1780m,
                        Name = "Chatswood",
                        Description = ""
                    },
                    new Marker
                    {
                        Latitude = -33.8688m,
                        Longitude = 151.2093m,
                        Name = "Lane Cove",
                        Description = ""
                    },
                    new Marker
                    {
                        Latitude = -33.7764m,
                        Longitude = 151.1200m,
                        Name = "Macquarie Centre",
                        Description = ""
                    },
                    new Marker
                    {
                        Latitude = -33.8157m,
                        Longitude = 151.1030m,
                        Name = "Ryde",
                        Description = ""
                    },
                    new Marker
                    {
                        Latitude = -33.8660m,
                        Longitude = 151.2056m,
                        Name = "Wynyard Station",
                        Description = ""
                    }

                };

                context.Markers.AddRange(markers);
                context.SaveChanges();
            }            
        }
    }
}
