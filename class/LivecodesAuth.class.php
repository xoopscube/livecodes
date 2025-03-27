<?php
/**
 * LiveCodes module for XCL
 * @package    LiveCodes
 * @version    1.0.0
 * @author     Nuno Luciano (aka gigamaster), 2024
 * @copyright  (c) 2024 The XOOPSCube Project
 * @license    GPL 2.0
 */

class LivecodesAuth
{
    public function getAuthData()
    {
        global $xoopsUser;
        
        if (!is_object($xoopsUser)) {
            return null;
        }

        return [
            'username' => $xoopsUser->getVar('uname'),
            'userid' => $xoopsUser->getVar('uid'),
            'email' => $xoopsUser->getVar('email'),
            'avatar' => XOOPS_URL . '/uploads/' . $xoopsUser->getVar('user_avatar'),
            'token' => $this->generateToken($xoopsUser)
        ];
    }

    private function generateToken($user)
    {
        return md5($user->getVar('uid') . $user->getVar('pass') . XOOPS_DB_PREFIX);
    }
}