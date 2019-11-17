using System;

namespace LandmarkRemark.Domain
{
    public class Note
    {
        public Guid Id { get; set; }

        public Guid MarkerId { get; set; }

        public string Username { get; set; }

        public string NoteText { get; set; }
    }
}