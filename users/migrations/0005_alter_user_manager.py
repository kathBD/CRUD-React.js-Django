# Generated by Django 3.2.8 on 2021-10-12 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20211012_1712'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='manager',
            field=models.PositiveIntegerField(),
        ),
    ]