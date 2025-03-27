<?php
/**
 * LiveCodes module for XCL
 * @package    LiveCodes
 * @version    1.0.0
 * @author     Nuno Luciano (aka gigamaster), 2024
 * @copyright  (c) 2024 The XOOPSCube Project
 * @license    GPL 2.0
 */

require '../../mainfile.php';
require_once __DIR__ . '/class/LivecodesAuth.class.php';

// Check user permissions
$moduleDirname = basename(dirname(__FILE__));
$module_handler = xoops_gethandler('module');
$module = $module_handler->getByDirname($moduleDirname);
$moduleperm_handler = xoops_gethandler('groupperm');

// Redirect anonymous users to login
if (!is_object($xoopsUser) || $xoopsUser->isGuest()) {
    $redirectUrl = XOOPS_URL . '/modules/' . $moduleDirname;
    redirect_header(XOOPS_URL . '/user.php?from=' . urlencode($redirectUrl), 2, _MD_USER_LANG_NOPERM);
    exit();
}

if (!$moduleperm_handler->checkRight('module_read', $module->getVar('mid'), $xoopsUser->getGroups())) {
    redirect_header(XOOPS_URL . '/', 3, _NOPERM);
}

// Initialize auth after permission check
$auth = new LivecodesAuth();
$auth_data = $auth->getAuthData();

// Add custom styles
$xoopsTpl->assign('xoops_module_header', '
    <style>
        .livecodes-wrapper {height: calc(100vh - 60px); position: relative;}
        #livecodes{background-color:#fff;color:#111;height:100%;overflow:hidden;opacity:0;transition:opacity .4s ease-in-out}
        #loading{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;opacity:1;overflow:hidden;position:absolute;top:0;transition:opacity .4s ease-in-out;width:100%}
        #loading img{height:100px}
        #loading-text{animation:pulsate 3s infinite;font-family:monospace;font-size:1.3em;margin:15px auto;position:relative;text-align:center}
        @keyframes pulsate{0%{opacity:.2}50%{opacity:1}100%{opacity:.2}}
    </style>
    <script src="' . XOOPS_URL . '/modules/livecodes/livecodes/index.8da4c2c15c39e561644ee927d735e32a.js"></script>
');

$xoopsTpl->assign('auth_data', $auth_data);

include XOOPS_ROOT_PATH . '/header.php';
$xoopsTpl->display('db:livecodes_main.html');
include XOOPS_ROOT_PATH . '/footer.php';