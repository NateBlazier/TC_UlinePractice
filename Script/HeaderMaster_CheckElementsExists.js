//////Checking that all elements in the MasterHeader Display

////Check the master header without user signed in. 

//Check the Logo
//Check the PhoneNumber


const headerStatusContainerWithoutUserSignIn = {
  myAccount: {
    id: 'lnkMyAccount',
    text: 'My Account',
    href: '/MyAccount/MyUline',
    class: 'whitelinkbold'
  },
  contactUs: {
    id: 'lnkContactUs',
    text: 'Contact Us',
    href: '/CustomerService/ContactUs_Menu',
    class: 'whitelinkbold'
  },
  signIn: {
    containerId: 'lblSignInLink',
    linkId: 'SignInHref',
    text: 'Sign In',
    href: '/SignIn/SignIn',
    class: 'whitelinkbold'
  },
  cart: {
    wrapperId: 'divCartLinkWrapper2',
    linkId: 'lnkCartLink2',
    href: '/Product/ViewCart',
    text: 'Cart',
    subtotal: {
      id: 'lblCartStatus2',
      value: '$0.00'
    }
  },
  separators: {
    contactUsPipe: {
      id: 'lblContactUsPipe',
      text: '\u00a0\u00a0|\u00a0\u00a0'
    },
    signInPipe: {
      id: 'lblSignInPipe',
      text: '\u00a0\u00a0|\u00a0\u00a0'
    },
    cartPipe: {
      id: 'lblCartPipe2',
      text: '\u00a0\u00a0|\u00a0\u00a0'
    }
  },
  hiddenInput: {
    id: 'DesktopSigninFlyoutMode',
    name: 'DesktopSigninFlyoutMode',
    value: 'RemainOnPage'
  }
};





//confirm exists