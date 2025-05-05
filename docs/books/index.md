# Books Home Page

{% for post in blog_posts if "books/" in post.input_path %}
- [{{ post.title }}]({{ post.url}})
{% endfor %}