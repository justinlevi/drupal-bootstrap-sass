<?php

/**
 * @file template.php
 */

function bootstrap_sass_subtheme_preprocess_html(&$vars) {
    $path = drupal_get_path_alias($_GET['q']);
    $aliases = explode('/', $path);

    foreach($aliases as $alias) {
        $vars['classes_array'][] = drupal_clean_css_identifier($alias);
    }
}



/**
 * Implements hook_preprocess_block()
 */

function bootstrap_sass_subtheme_preprocess_block(&$vars) {
    /* Set shortcut variables. Hooray for less typing! */
    $block_id = $vars['block']->module . '-' . $vars['block']->delta;
    $classes = &$vars['classes_array'];
    $title_classes = &$vars['title_attributes_array']['class'];
    $content_classes = &$vars['content_attributes_array']['class'];

    /* Add global classes to all blocks */
    $title_classes[] = 'block-title';
    $content_classes[] = 'block-content';

    /* Uncomment the line below to see variables you can use to target a field */
    #print $block_id . '<br/>';

    /* Add classes based on the block delta. */
    switch ($block_id) {
        /* System Navigation block */
        case 'system-navigation':
            $classes[] = 'block-rounded';
            $title_classes[] = 'block-fancy-title';
            $content_classes[] = 'block-fancy-content';
            break;
        /* Main Menu block */
        case 'system-main-menu':
            /* User Login block */
        case 'user-login':
            $title_classes[] = 'element-invisible';
            break;
        case 'search-form':
            $classes[] = 'span4';
    }
}



