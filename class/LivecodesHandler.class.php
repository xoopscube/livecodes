<?php
/**
 * LiveCodes module for XCL
 * @package    LiveCodes
 * @version    1.0.0
 * @author     Nuno Luciano (aka gigamaster), 2024
 * @copyright  (c) 2024 The XOOPSCube Project
 * @license    GPL 2.0
 */

class LivecodesHandler extends XoopsObjectHandler
{
    public function __construct($db)
    {
        parent::__construct($db);
    }

    public function getAuthConfig()
    {
        global $xoopsUser;
        
        if (!$xoopsUser) {
            return null;
        }

        return [
            'username' => $xoopsUser->getVar('uname'),
            'userid' => $xoopsUser->getVar('uid'),
            'token' => $this->generateToken($xoopsUser)
        ];
    }
}