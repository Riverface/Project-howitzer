using HowitzerServer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace HowitzerServer.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CardsController : ControllerBase
  {
    private HowitzerServerContext _db;

    public CardsController(HowitzerServerContext db)
    {
      _db = db;
    }

    // GET api/cards
    [HttpGet]
    public ActionResult<IEnumerable<Card>> Get()
    {
      var query = _db.Cards.AsQueryable();
      return query.ToList();
    }

    // POST api/cards
    [HttpPost]
    public void Post([FromBody] Card card)
    {
      _db.Cards.Add(card);
      _db.SaveChanges();
    }
  }
}
