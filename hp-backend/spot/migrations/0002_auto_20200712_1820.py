# Generated by Django 3.0.8 on 2020-07-12 18:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('spot', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spot',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='spot.Type'),
        ),
    ]
