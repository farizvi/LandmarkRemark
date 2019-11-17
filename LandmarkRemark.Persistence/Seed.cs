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

            if (!context.Notes.Any())
            {
                var notes = new List<Note>
                {
                    new Note
                    {
                        MarkerId = new System.Guid("72fdc091-2b82-47f2-b693-552fb6227bb3"),
                        Username = "John",
                        NoteText = "Lorem ipsum..."
                    },
                    new Note
                    {
                        MarkerId = new System.Guid("0d321eb6-6889-44b3-9288-89a18bc7104c"),
                        Username = "Kate",
                        NoteText = "Lorem ipsum..."
                    },
                    new Note
                    {
                        MarkerId = new System.Guid("b7873568-1b01-4e4a-be1d-112d7b46be86"),
                        Username = "Dpnald",
                        NoteText = "Lorem ipsum..."
                    },
                    new Note
                    {
                        MarkerId = new System.Guid("091bbac0-1a0f-4991-a24e-da55e7af6111"),
                        Username = "Sam",
                        NoteText = "Lorem ipsum..."
                    }
                };

                context.Notes.AddRange(notes);
                context.SaveChanges();
            }           
        }
    }
}
