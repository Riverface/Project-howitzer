using System;
using System.ComponentModel.DataAnnotations;

namespace HowitzerServer.Models
{
  public class Card
  {
    public int CardId { get; set; }
    [Required]
    [StringLength(32)]
    public string Name { get; set; }
  }
}
