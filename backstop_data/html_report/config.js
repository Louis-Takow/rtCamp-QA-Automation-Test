report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\saucedemo_Login_Page_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20240922-125027\\saucedemo_Login_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "saucedemo_Login_Page_0_document_0_desktop.png",
        "label": "Login Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.saucedemo.com/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\saucedemo_Inventory_Page_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20240922-125027\\saucedemo_Inventory_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "saucedemo_Inventory_Page_0_document_0_desktop.png",
        "label": "Inventory Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.saucedemo.com/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0,
          "misMatchPercentage": "0.00",
          "analysisTime": 80
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\saucedemo_Cart_Page_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20240922-125027\\saucedemo_Cart_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "saucedemo_Cart_Page_0_document_0_desktop.png",
        "label": "Cart Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.saucedemo.com/cart.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\saucedemo_Checkout_Step-0ne_Page_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20240922-125027\\saucedemo_Checkout_Step-0ne_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "saucedemo_Checkout_Step-0ne_Page_0_document_0_desktop.png",
        "label": "Checkout Step-0ne Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.saucedemo.com/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -224
          },
          "rawMisMatchPercentage": 15.728801937441645,
          "misMatchPercentage": "15.73",
          "analysisTime": 102
        },
        "diffImage": "..\\bitmaps_test\\20240922-125027\\failed_diff_saucedemo_Checkout_Step-0ne_Page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\saucedemo_Checkout_Overview_Page_0__0_desktop.png",
        "test": "..\\bitmaps_test\\20240922-125027\\saucedemo_Checkout_Overview_Page_0__0_desktop.png",
        "selector": "",
        "fileName": "saucedemo_Checkout_Overview_Page_0__0_desktop.png",
        "label": "Checkout Overview Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.saucedemo.com/checkout-step-two.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "engineErrorMsg": "Waiting for selector `#first-name` failed: Waiting failed: 30000ms exceeded",
        "error": "Reference file not found C:\\Users\\joelt\\Desktop\\Saucedemo Test\\backstop_data\\bitmaps_reference\\saucedemo_Checkout_Overview_Page_0__0_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "saucedemo"
});