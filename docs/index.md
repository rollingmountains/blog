# Welcome to My Blog

This is my personal blog where I share thoughts on programming and books.
Programming.

## Programming

{% if config.plugins.blogging is defined %}
  {% for post in config.plugins.blogging.blog_posts %}
    {% if 'programming' in post.categories %}
- [{{ post.title }}]({{ post.url }}){% if post.date %} - {{ post.date }}{% endif %}
    {% endif %}
  {% endfor %}
{% else %}
- No programming posts found
{% endif %}

## Books

{% if config.plugins.blogging is defined %}
  {% for post in config.plugins.blogging.blog_posts %}
    {% if 'books' in post.categories %}
- [{{ post.title }}]({{ post.url }}){% if post.date %} - {{ post.date }}{% endif %}
    {% endif %}
  {% endfor %}
{% else %}
- No book posts found
{% endif %}


