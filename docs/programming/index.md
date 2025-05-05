# Programming Articles

{% for post in blog_posts if "programming/" in post.input_path %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}