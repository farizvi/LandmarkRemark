using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LandmarkRemark.Domain;
using LandmarkRemark.Application.Note;
using System.Collections.Generic;
using MediatR;

namespace LandmarkRemark.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public NotesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Note>>> List()
        {
            return await _mediator.Send(new List.Query());
        }
    }
}