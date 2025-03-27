<?php
/**
 * LiveCodes module for XCL
 * @package    LiveCodes
 * @version    1.0.0
 * @author     Nuno Luciano (aka gigamaster), 2024
 * @copyright  (c) 2024 The XOOPSCube Project
 * @license    GPL 2.0
 */

if (!defined('XOOPS_ROOT_PATH')) {
    exit();
}

// Manifesto
$modversion['dirname']      = basename(__DIR__);
$modversion['name']         = _MI_LIVECODES_NAME;
$modversion['version']      = '1.0.0';
$modversion['description']  = _MI_LIVECODES_DESC;
$modversion['author']       = 'Your Name';
$modversion['license']      = "GPL";
$modversion['image']        = "images/module_livecodes.svg";
$modversion['icon']         = 'images/module_icon.svg';
$modversion['help']         = "help.html";
$modversion['official']     = 0;
$modversion['hasMain']      = 1;
$modversion['cube_style']   = true;
// Admin panel settings
$modversion['hasAdmin'] = 1;
$modversion['adminindex'] = "admin/index.php";

// User group permissions
$modversion['config'][] = array(
    'name' => 'special_groups',
    'title' => '_MI_LIVECODES_SPECIAL_GROUPS',
    'description' => '_MI_LIVECODES_SPECIAL_GROUPS_DESC',
    'formtype' => 'group_multi',
    'valuetype' => 'array',
    'default' => array()
);

// Editor configuration
$modversion['config'][] = array(
    'name' => 'editor_config',
    'title' => '_MI_LIVECODES_EDITOR_CONFIG',
    'description' => '_MI_LIVECODES_EDITOR_CONFIG_DESC',
    'formtype' => 'textarea',
    'valuetype' => 'string',
    'default' => '{
        "autosave": true,
        "delay": 1000,
        "emmet": true,
        "mode": "full"
    }'
);

// UI customization
$modversion['config'][] = array(
    'name' => 'uiColor',
    'title' => '_MI_LIVECODES_UI_COLOR',
    'description' => '_MI_LIVECODES_UI_COLOR_DESC',
    'formtype' => 'color',
    'valuetype' => 'string',
    'default' => '#bbbbbb'
);

// Templates
$modversion['templates'][] = array(
    'file' => 'livecodes_main.html',
    'description' => 'LiveCodes Main Template'
);