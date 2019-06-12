<div class="layer">
    <img src="${ require('../../assets/7.png') }" />
    <div>this is A <%= name %> layer</div>

    <% for (var i=0; i< arr.length; i++) { %>
        <%= arr[i] %>
    <% } %>

    <div><%= age %></div>
</div>