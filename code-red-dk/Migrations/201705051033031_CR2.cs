namespace code_red_dk.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CR2 : DbMigration
    {
        public override void Up()
        {
            //CreateTable(
            //    "dbo.People",
            //    c => new
            //        {
            //            PersonID = c.Int(nullable: false, identity: true),
            //            Name = c.String(),
            //            DateOfBirth = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.PersonID);
            
            AlterColumn("dbo.Reviews", "ReviewerEmail", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Reviews", "ReviewerEmail", c => c.String());
            //DropTable("dbo.People");
        }
    }
}
