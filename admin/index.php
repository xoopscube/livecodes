<?php
/**
 * LiveCodes module for XCL
 * @package    LiveCodes
 * @version    1.0.0
 * @author     Nuno Luciano (aka gigamaster), 2024
 * @copyright  (c) 2024 The XOOPSCube Project
 * @license    GPL 2.0
 */

require_once '../../../mainfile.php';
require_once XOOPS_ROOT_PATH . '/header.php';

$mid = isset($_GET['mid']) ? (int)$_GET['mid'] : 0;
if (!$mid) {
    $module_handler = xoops_gethandler('module');
    $module = $module_handler->getByDirname('livecodes');
    $mid = $module->getVar('mid');
}

// Set navigation paths
if (defined('LEGACY_BASE_VERSION')) {
    $dash = XOOPS_URL . '/admin.php';
    $pref = XOOPS_MODULE_URL . '/legacy/admin/index.php?action=PreferenceEdit&amp;confmod_id=';
    $help = XOOPS_MODULE_URL . '/legacy/admin/index.php?action=Help&amp;dirname=livecodes';
}
?>

<nav class="ui-breadcrumbs" aria-label="breadcrumb">
    <a href="<?php echo $dash ?>"><?php echo _CPHOME ?></a>
    »» <span class="page-title" aria-current="page"><a href="./index.php">LiveCodes</a></span>
</nav>

<nav class="adminavi">
    <a href="<?php echo $pref . $mid ?>" class="adminavi-item"><?php echo _PREFERENCES ?></a>
    <a href="<?php echo $help ?>" class="adminavi-item"><?php echo _HELP ?></a>
</nav>

<h3>Livecodes Editor</h3>
<p>Code Playground That Just Works!</p>
<div class="ui-card-full">

    <section id="help-features">

        <h3>Features Overview</h3>
        <p>Livecodes playground for React, Vue, Svelte, Solid, Typescript, Python, Go, Ruby, PHP<br>
        90+ programming languages, CSS processors, JavaScript libraries and frameworks</p>
        
    <ul>
        <li>Online Code Playground
        <li>Free and open-source
        <li>Embedded Playground
        <li>No account required
        <li>AI Code Assistant
        <li>No limits for usage
        <li>No servers to configure
        <li>No databases to maintain
        <li>No subscription fees
        <li>Starter Templates
        <li>Import and Export
        <li>Deploy and Synchronize
        <li>External resources
        <li>Assets Manager
        <li>Snippets manager
    </ul>

        <p>Select a Starter Template and enjoy all the features!</p>

        <h3>Embedded Playground</h3>
        <P>Add the code bellow in a document of module page, pico or a custom template:</p>

<pre><code class="lang-js">
&lt;div id=&quot;container&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;module&quot;&gt;
    import { createPlayground } from 'livecodes'

    createPlayground('#container', {
    appUrl: 'https://gigamaster.github.io/livecodes/',
    params: {
      markdown: '# Hello LiveCodes!',
      css: 'body{background:#111;font-family:system-ui} h1 {color:dodgerblue;}',
      js: 'console.log(&quot;Hello, from JS!&quot;);',
      console: 'open',
    },
  })
  &lt;/script&gt;</code></pre>
    </section>

    <p>Documentation <a class="button" href="https://livecodes.io/docs/" target="_blank">https://livecodes.io/docs/ ⭧</a></p>

</div>
<?php
require_once XOOPS_ROOT_PATH . "/footer.php";