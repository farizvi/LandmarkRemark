using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using LandmarkRemark.Persistence;
using System.Collections.Generic;

namespace LandmarkRemark.Application.Note
{
    public class List
    {
        public class Query : IRequest<List<LandmarkRemark.Domain.Note>> { }

        public class Handler : IRequestHandler<Query, List<LandmarkRemark.Domain.Note>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context) => _context = context;

            public async Task<List<LandmarkRemark.Domain.Note>> Handle(Query request, CancellationToken cancellationToken)
            {
                var notes = await _context.Notes.ToListAsync();

                return notes;
            }
        }
    }
}