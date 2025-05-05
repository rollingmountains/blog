# Programming Articles

{% for post in blog_posts if "programming/" in post.input_path %}
<p><a href="{{ post.url }}">{{ post.title }}</a></p> 
{% endfor %}