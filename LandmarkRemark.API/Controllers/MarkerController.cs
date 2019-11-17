using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LandmarkRemark.Domain;
using LandmarkRemark.Application.Marker;
using System.Collections.Generic;
using MediatR;

namespace LandmarkRemark.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarkerController : ControllerBase
    {
        private readonly IMediator _mediator;

        public MarkerController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Marker>>> List()
        {
            return await _mediator.Send(new List.Query());
        }
    }
}