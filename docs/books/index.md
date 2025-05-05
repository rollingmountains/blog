# Books Home Page

{% for post in blog_posts if "books/" in post.input_path %}
<a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}