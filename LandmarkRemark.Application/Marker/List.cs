using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using LandmarkRemark.Persistence;
using System.Collections.Generic;

namespace LandmarkRemark.Application.Marker
{
    public class List
    {
        public class Query : IRequest<List<LandmarkRemark.Domain.Marker>> { }

        public class Handler : IRequestHandler<Query, List<LandmarkRemark.Domain.Marker>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context) => _context = context;

            public async Task<List<LandmarkRemark.Domain.Marker>> Handle(Query request, CancellationToken cancellationToken)
            {
                var markers = await _context.Markers.ToListAsync();

                return markers;
            }
        }
    }
}