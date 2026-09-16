#!/bin/bash

# Update logo in all main HTML files
for file in site/*.html site/blog/*.html; do
  if [ -f "$file" ]; then
    sed -i '/<div class="nav-logo">/,/<\/div>/{
      /<div class="nav-logo">/!{
        /<\/div>/!d
      }
      /<div class="nav-logo">/a\
                    <a href="/" class="logo-link">\
                        <img src="/assets/images/prodkick-logo.png" alt="Prodkick" class="logo-image">\
                    </a>
      /<\/div>/i\
\
    }' "$file"
  fi
done

echo "Logo updated in all HTML files"
