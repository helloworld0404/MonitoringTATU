# Generated by Django 4.1.5 on 2023-05-19 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deviceinformation',
            name='time',
        ),
        migrations.AlterField(
            model_name='deviceinformation',
            name='broken',
            field=models.PositiveIntegerField(default=100),
        ),
    ]
