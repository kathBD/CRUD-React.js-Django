# Generated by Django 3.2.8 on 2021-10-12 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_user_is_manager'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_manager',
        ),
        migrations.AddField(
            model_name='user',
            name='manager',
            field=models.BooleanField(default=False),
        ),
    ]
