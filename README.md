
Test for DYODE

Public preview url https://unruffled-hopper-948894.netlify.app/

Liquid questions: 
1. Describe how you would make a line of text in a homepage section editable from theme customization and how you would access this in liquid.

	Use content type text in settings schema, access in liquid through {{ section.settings.id }}


2. How would you add the collection featured image as a banner on the collection liquid template?

	{{ collection.image | img_url: '' }}


3. Using liquid code and HTML, create a simple pagination container, "< 1 2 ... 5 >".

	{% paginate collection.products by 5 %}
		{%- if paginate.pages > 1 -%}
			<ul class="">
				{% unless paginate.previous.is_link %}
					<li aria-hidden="true">
						<button class="" disabled>
							{% include 'icon-arrow-left' %}
							<span class="">{{ 'general.pagination.previous' | t }}</span>
						</button>
					</li>
					{% else %}
					<li>
						<a href="{{ paginate.previous.url }}" class="">
							{% include 'icon-arrow-left' %}
							<span class="t">{{ 'general.pagination.previous' | t }}</span>
						</a>
					</li>
				{% endunless %}
				<li class="">
					{{ 'general.pagination.current_page' | t: current: paginate.current_page, total: paginate.pages }}
				</li>
				{% unless paginate.next.is_link %}
					<li aria-hidden="true">
					<button class="" disabled>
						{% include 'icon-arrow-right' %}
						<span class="">{{ 'general.pagination.next' | t }}</span>
					</button>
					</li>
				{% else %}
					<li>
					<a href="{{ paginate.next.url }}" class="">
						{% include 'icon-arrow-right' %}
						<span class="">{{ 'general.pagination.next' | t }}</span>
					</a>
					</li>
				{% endunless %}
			</ul>
		{%- endif -%}
	{% endpaginate %}


4. Using liquid code, access the product named "Blue T-Shirt". Store the id, title, handle, price, url, and image in variables.

	We can access the exact product through product handle
	{% assign current_product = all_products['blue-t-shirt'] %} // can check handle on product page
	{% assign current_id = current_product.id %}
	{% assign current_title = current_product.title %}
	{% assign current_handle = current_product.handle %}
	{% assign current_url = current_product.url %}
	{% assign current_image = current_product.featured_image %}
	{% assign current_price = current_product.price %}


5. Using liquid code, create a key:value array using the list below. Loop through the array. Upon key type, store the value in a variable to be used later:
    fruit:apple
    vegetable:carrot
    cloth:t-shirt
    denim:jeans

 	{% assing key_value_array = "fruit:apple, vegetable:carrot, cloth:t-shirt, denim:jeans" | split: ", " %}
	{% for sub_array in key_value_array %}
		{% assign key_value = sub_array | split: ":" %}
		// do something 
	{% endfor %}
