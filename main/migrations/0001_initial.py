# Generated by Django 4.1.5 on 2023-05-18 09:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('slug', models.SlugField(max_length=150, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='DeviceInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_number', models.PositiveIntegerField(default=0)),
                ('in_work', models.PositiveIntegerField(default=0)),
                ('broken', models.PositiveIntegerField(default=0)),
                ('time', models.DateField(auto_now_add=True)),
                ('persentage', models.PositiveIntegerField(default=0)),
                ('device', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='device', to='main.device')),
            ],
        ),
    ]
