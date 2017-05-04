namespace code_red_dk.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DOB : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "DateOfBirth", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "DateOfBirth");
        }
    }
}
