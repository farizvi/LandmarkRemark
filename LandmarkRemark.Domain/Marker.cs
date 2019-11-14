using System;

namespace LandmarkRemark.Domain
{
    public class Marker
    {
        public Guid Id { get; set; }

        public decimal Latitude { get; set; }

        public decimal Longitude { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }       
    }
}