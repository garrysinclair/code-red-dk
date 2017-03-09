using System.ComponentModel.DataAnnotations;

namespace code_red_dk.Models
{
    public class Review
    {
        public int ReviewID { get; set; }
        public int AlbumID { get; set; }
        public virtual Album Album{ get; set; }
        public string Contents { get; set; }
        [Required()]
        [Display(Name ="Email address")]
        [DataType(DataType.EmailAddress)]
        public string  ReviewerEmail { get; set; }
    }
}