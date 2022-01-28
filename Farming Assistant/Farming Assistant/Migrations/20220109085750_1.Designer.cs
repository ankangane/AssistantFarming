﻿// <auto-generated />
using Farming_Assistant.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Farming_Assistant.Migrations
{
    [DbContext(typeof(FarmingAssistantDbContext))]
    [Migration("20220109085750_1")]
    partial class _1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("Farming_Assistant.Entites.Admin", b =>
                {
                    b.Property<long>("adminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("adminAnswer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("adminContanctNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("adminEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("adminName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("adminQuestion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("adminId");

                    b.ToTable("admins");
                });

            modelBuilder.Entity("Farming_Assistant.Entites.Advertisement", b =>
                {
                    b.Property<long>("advertisementId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("advertisementMessage")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("advertisementStatus")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("advertisementId");

                    b.ToTable("advertisement");
                });

            modelBuilder.Entity("Farming_Assistant.Entites.Complaint", b =>
                {
                    b.Property<long>("complaintsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("complaintMessage")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("complaintStatus")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("complaintsId");

                    b.ToTable("complaints");
                });

            modelBuilder.Entity("Farming_Assistant.Entites.Crop", b =>
                {
                    b.Property<long>("cropId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("cropCategory")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("cropName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("cropPrice")
                        .IsRequired()
                        .HasColumnType("varchar(64)");

                    b.Property<string>("cropQuanity")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("cropStatus")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("cropId");

                    b.ToTable("crop");
                });

            modelBuilder.Entity("Farming_Assistant.Entites.Farmer", b =>
                {
                    b.Property<long>("farmerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("farmerAddress")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("farmerAnswer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("farmerContanctNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("farmerEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("farmerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("farmerQuestion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("farmerId");

                    b.ToTable("farmer");
                });

            modelBuilder.Entity("Farming_Assistant.Entites.FarmingTips", b =>
                {
                    b.Property<long>("farmingTipsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("farmingTipsMessage")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.HasKey("farmingTipsId");

                    b.ToTable("farmingTips");
                });

            modelBuilder.Entity("Farming_Assistant.Entites.Supplier", b =>
                {
                    b.Property<long>("supplierId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("supplierAddress")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("supplierAnswer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("supplierContanctNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("supplierEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("supplierName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("supplierQuestion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("supplierId");

                    b.ToTable("supplier");
                });
#pragma warning restore 612, 618
        }
    }
}
