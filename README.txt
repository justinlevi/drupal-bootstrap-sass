1. rename the "bootstrap-sass-subtheme" folder
2. git clone https://github.com/twbs/bootstrap-sass.git into the subtheme directory
3. copy/paste the content in assets/stylesheets/bootstrap/_variables.scss to the sass/variables.scss file. This will ensure you have the latest variable set from whichever branch/tag/commit you cloned.
4. Rename all functions in template.php to your subtheme name

ADDITIONAL NOTES:
- remove any unnecessary componenents in the bootstrap.scss

To help consolidate and remove possible future inconsistencies, the
documentation for this sub-theme starter kit has been moved to:
http://drupal.org/node/1978010.