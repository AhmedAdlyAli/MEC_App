﻿<%@ Page Language="C#" DEBUG=false %>

<!DOCTYPE HTML PUBLIC '-'W3C'DTD HTML 4.01 Transitional'EN'>
<html lang="en">
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
<script language="C#" runat="server">

/*
Version 3.1

---------------- Disclaimer --------------------------------------------------

Copyright 2004 Dialect Solutions Holdings.  All rights reserved.

This document is provided by Dialect Holdings on the basis that you will treat
it as confidential.

No part of this document may be reproduced or copied in any form by any means
without the written permission of Dialect Holdings.  Unless otherwise
expressly agreed in writing, the information contained in this document is
subject to change without notice and Dialect Holdings assumes no
responsibility for any alteration to, or any error or other deficiency, in
this document.

All intellectual property rights in the Document and in all extracts and
things derived from any part of the Document are owned by Dialect and will be
assigned to Dialect on their creation. You will protect all the intellectual
property rights relating to the Document in a manner that is equal to the
protection you provide your own intellectual property.  You will notify
Dialect immediately, and in writing where you become aware of a breach of
Dialect's intellectual property rights in relation to the Document.

The names "Dialect", "QSI Payments" and all similar words are trademarks of
Dialect Holdings and you must not use that name or any similar name.

Dialect may at its sole discretion terminate the rights granted in this
document with immediate effect by notifying you in writing and you will
thereupon return (or destroy and certify that destruction to Dialect) all
copies and extracts of the Document in its possession or control.

Dialect does not warrant the accuracy or completeness of the Document or its
content or its usefulness to you or your merchant customers.   To the extent
permitted by law, all conditions and warranties implied by law (whether as to
fitness for any particular purpose or otherwise) are excluded.  Where the
exclusion is not effective, Dialect limits its liability to $100 or the
resupply of the Document (at Dialect's option).

Data used in examples and sample data files are intended to be fictional and
any resemblance to real persons or companies is entirely coincidental.

Dialect does not indemnify you or any third party in relation to the content
or any use of the content as contemplated in these terms and conditions.

Mention of any product not owned by Dialect does not constitute an endorsement
of that product.

This document is governed by the laws of New South Wales, Australia and is
intended to be legally binding.

Author: Dialect Solutions Group Pty Ltd

------------------------------------------------------------------------------*/

/*
<summary>ASP.NET C# 3-Party example for the Virtual Payment Client</summary>
<remarks>

<para>
This example assumes that a transaction GET response has been sent to this 
example from the Payment Server with the required fields via a cardholder's 
browser redirect. The example then checks the value of an MD5 signature to 
ensure the data has not been changed during transmission.
</para>

<para>
The to instantiate the MD5 signature check, the MD5 seed must be saved in the 
SECURE_SECRET value which is first parameter in the PageLoad() class. The 
SECURE_SECRET value can be found in Merchant Administration/Setup page on the 
Payment Server.
</para>

</remarks>
*/

// _____________________________________________________________________________

// Declare the global variables
private string debugData = "";

// _____________________________________________________________________________

private string getResponseDescription(string vResponseCode)
{
   /* 
    <summary>Maps the vpc_TxnResponseCode to a relevant description</summary>
    <param name="vResponseCode">The vpc_TxnResponseCode returned by the transaction.</param>
    <returns>The corresponding description for the vpc_TxnResponseCode.</returns>
    */
    string result = "Unknown";

    if (vResponseCode.Length > 0)
    {
        switch (vResponseCode)
        {
            case "0" : result = "Transaction Successful"; break;
            case "1" : result = "Transaction Declined"; break;
            case "2" : result = "Bank Declined Transaction"; break;
            case "3" : result = "No Reply from Bank"; break;
            case "4" : result = "Expired Card"; break;
            case "5" : result = "Insufficient Funds"; break;
            case "6" : result = "Error Communicating with Bank"; break;
            case "7" : result = "Payment Server detected an error"; break;
            case "8" : result = "Transaction Type Not Supported"; break;
            case "9" : result = "Bank declined transaction (Do not contact Bank)"; break;
            case "A" : result = "Transaction Aborted"; break;
            case "B" : result = "Transaction Declined - Contact the Bank"; break;
            case "C" : result = "Transaction Cancelled"; break;
            case "D" : result = "Deferred transaction has been received and is awaiting processing"; break;
            case "F" : result = "3-D Secure Authentication failed"; break;
            case "I" : result = "Card Security Code verification failed"; break;
            case "L" : result = "Shopping Transaction Locked (Please try the transaction again later)"; break;
            case "N" : result = "Cardholder is not enrolled in Authentication scheme"; break;
            case "P" : result = "Transaction has been received by the Payment Adaptor and is being processed"; break;
            case "R" : result = "Transaction was not processed - Reached limit of retry attempts allowed"; break;
            case "S" : result = "Duplicate SessionID"; break;
            case "T" : result = "Address Verification Failed"; break;
            case "U" : result = "Card Security Code Failed"; break;
            case "V" : result = "Address Verification and Card Security Code Failed"; break;
            default  : result = "Unable to be determined"; break;
        }
    }
    return result;
}

// _________________________________________________________________________

private string displayAVSResponse(string vAVSResultCode)
{
   /*
    <summary>Maps the vpc_AVSResultCode to a relevant description</summary>
    <param name="vAVSResultCode">The vpc_AVSResultCode returned by the transaction.</param>
    <returns>The corresponding description for the vpc_AVSResultCode.</returns>
    */
    string result = "Unknown";

    if (vAVSResultCode.Length > 0)
    {
        if (vAVSResultCode.Equals("Unsupported"))
        {
            result = "AVS not supported or there was no AVS data provided";
        }
        else
        {
            switch (vAVSResultCode)
            {
                case "X" : result = "Exact match - address and 9 digit ZIP/postal code"; break;
                case "Y" : result = "Exact match - address and 5 digit ZIP/postal code"; break;
                case "S" : result = "Service not supported or address not verified (international transaction)"; break;
                case "G" : result = "Issuer does not participate in AVS (international transaction)"; break;
                case "A" : result = "Address match only"; break;
                case "W" : result = "9 digit ZIP/postal code matched, Address not Matched"; break;
                case "Z" : result = "5 digit ZIP/postal code matched, Address not Matched"; break;
                case "R" : result = "Issuer system is unavailable"; break;
                case "U" : result = "Address unavailable or not verified"; break;
                case "E" : result = "Address and ZIP/postal code not provided"; break;
                case "N" : result = "Address and ZIP/postal code not matched"; break;
                case "0" : result = "AVS not requested"; break;
                default  : result = "Unable to be determined"; break;
            }
        }
    }
    return result;
}

//______________________________________________________________________________

private string displayCSCResponse(string vCSCResultCode)
{
   /*
    <summary>Maps the vpc_CSCResultCode to a relevant description</summary>
    <param name="vCSCResultCode">The vpc_CSCResultCode returned by the transaction.</param>
    <returns>The corresponding description for the vpc_CSCResultCode.</returns>
    */
    string result = "Unknown";
    if (vCSCResultCode.Length > 0) 
    {
        if (vCSCResultCode.Equals("Unsupported"))
        {
            result = "CSC not supported or there was no CSC data provided";
        }
        else
        {

            switch (vCSCResultCode)
            {
                case "M" : result = "Exact code match"; break;
                case "S" : result = "Merchant has indicated that CSC is not present on the card (MOTO situation)"; break;
                case "P" : result = "Code not processed"; break;
                case "U" : result = "Card issuer is not registered and/or certified"; break;
                case "N" : result = "Code invalid or not matched"; break;
                default: result = "Unable to be determined"; break;
            }
        }
    }
    return result;
}

//______________________________________________________________________________

private System.Collections.Hashtable splitResponse(string rawData)
{
   /*
    * <summary>This function parses the content of the VPC response
    * <para>This function parses the content of the VPC response to extract the
    * individual parameter names and values. These names and values are then
    * returned as a Hashtable.</para>
    *
    * <para>The content returned by the VPC is a HTTP POST, so the content will
    * be in the format "parameter1=value&parameter2=value&parameter3=value".
    * i.e. key/value pairs separated by ampersands "&".</para>
    *
    * <param name="RawData"> data string containing the raw VPC response content
    * <returns> responseData - Hashtable containing the response data
    */
    System.Collections.Hashtable responseData = new System.Collections.Hashtable();
    try 
    {
        // Check if there was a response containing parameters
        if (rawData.IndexOf("=") > 0) 
        {
            // Extract the key/value pairs for each parameter
            foreach (string pair in rawData.Split('&'))
            {
                int equalsIndex = pair.IndexOf("=");
                if (equalsIndex > 1 && pair.Length > equalsIndex)
                {
                    string paramKey   = System.Web.HttpUtility.UrlDecode(pair.Substring(0, equalsIndex));
                    string paramValue = System.Web.HttpUtility.UrlDecode(pair.Substring(equalsIndex+1));
                    responseData.Add (paramKey, paramValue);
                }
            }
        } 
        else 
        {
                // There were no parameters so create an error
                responseData.Add ("vpc_Message", "The data contained in the response was not a valid receipt.<br/>\nThe data was: <pre>"+rawData+"</pre><br/>\n");
        }
        return responseData;
    } 
    catch (Exception ex) 
    {
        // There was an exception so create an error
        responseData.Add ("vpc_Message", "\nThe was an exception parsing the response data.<br/>\nThe data was: <pre>"+rawData+"</pre><br/>\n<br/>\nException: "+ex.ToString()+"<br/>\n");
        return responseData;
    }
}

// _________________________________________________________________________

private string CreateMD5Signature (string RawData)
{
   /*
    <summary>Creates a MD5 Signature</summary>
    <param name="RawData">The string used to create the MD5 signautre.</param>
    <returns>A string containing the MD5 signature.</returns>
    */
    
    System.Security.Cryptography.MD5 hasher = System.Security.Cryptography.MD5CryptoServiceProvider.Create();
    byte[] HashValue = hasher.ComputeHash(Encoding.ASCII.GetBytes(RawData));

    string strHex = "";
    foreach(byte b in HashValue) 
    {
        strHex += b.ToString("x2");
    }
    return strHex.ToUpper();
}

// _________________________________________________________________________

private void Page_Load(object sender, System.EventArgs e)
{
   /*
    <summary>Checks a VPC 3-Party transaction response from an incoming HTTP GET</summary>
    <remarks>
    <para>
    This program loops through the QueryString data and calcultaes an MD5 hash 
    signature can be calculated to check if the data has changed in
    transmission. Remember the data is returned back to the merchant via a 
    cardholder's browser redirect so the data has the potential to be changed. 
    </para>

    <para>
    If the MD5 hash signature is not the same value as the incoming signature
    that was calculated by the Payment Server then the receipt data has changed 
    in transit and should be checked.
    </para>

    <para>
    To find out what is included in your queryString data you can enable DEBUG 
    and run a test transaction. The postData string will then be output to the 
    screen. This debug code allows the user to see all the data associated with 
    the transaction. DEBUG should be disabled or removed entirely in production 
    code.
    </para>

    <para>
    To enable DEBUG, change the ASP directive at the top of this file.
    <para>

    <code>   <%@ Page Language="C#" DEBUG=false %>   </code>
    <para>                    to                     </para>
    <code>   <%@ Page Language="C#" DEBUG=true %>    </code>

    </remarks>
    */

   /*********************************************
    * Define Variables
    *********************************************/


    // This is secret for encoding the MD5 hash
    // This secret will vary from merchant to merchant
    // To not create a secure hash, let SECURE_SECRET be an empty string - ""
    // SECURE_SECRET can be found in Merchant Administration/Setup page
    string SECURE_SECRET = "078EE2EA2C31A4A2D4D7211EDCC697DC";

    Panel_Debug.Visible = false;
    Panel_Receipt.Visible = false;
    Panel_StackTrace.Visible = false;

    // define message string for errors
    string message = "";
    
    // error exists flag
    bool errorExists = false;

    // transaction response code
    string txnResponseCode = "";

    string rawHashData = SECURE_SECRET;
    
    // Initialise the Local Variables
    //Label_HashValidation.Text = "<font color='orange'><b>NOT CALCULATED</b></font>";
    bool hashValidated = true;

    try
    {
       /*
        *************************
        * START OF MAIN PROGRAM *
        *************************
        */

        // collect debug information
        # if DEBUG
            debugData += "<br/><u>Start of Debug Data</u><br/><br/>";
        # endif

        // If we have a SECURE_SECRET then validate the incoming data using the MD5 hash
        //included in the incoming data
        if (Page.Request.QueryString["vpc_SecureHash"].Length > 0) 
        {

            // collect debug information
            # if DEBUG
                debugData += "<u>Data from Payment Server</u><br/>";
            # endif

            // loop through all the data in the Page.Request.Form
            foreach (string item in Page.Request.QueryString) {
                
                // collect debug information
                # if DEBUG
                    debugData += item +"="+ Page.Request.QueryString[item] +"<br/>";
                # endif
                
                // Collect the data required for the MD5 sugnature if required
                if (SECURE_SECRET.Length > 0 && !item.Equals("vpc_SecureHash"))
                {
                    rawHashData += Page.Request.QueryString[item];
                }
            }
        }

        // Create the MD5 signature if required
        string signature = "";
        if (SECURE_SECRET.Length > 0)
        {
            // create the signature and add it to the query string
            signature = CreateMD5Signature(rawHashData);
            
            // Collect debug information
            # if DEBUG 
                debugData += "<br/><u>Hash Data Input</u>: " + rawHashData + "<br/><br/><u>Signature Created</u>: "+signature+"<br/>";
            # endif

            // Validate the Secure Hash (remember MD5 hashes are not case sensitive)
            if (Page.Request.QueryString["vpc_SecureHash"].Equals(signature)) 
            {
                // Secure Hash validation succeeded,
                // add a data field to be displayed later.
                //Label_HashValidation.Text = "<font color='#00AA00'><b>CORRECT</b></font>";
            }
            else
            {
                // Secure Hash validation failed, add a data field to be displayed
                // later.
                //Label_HashValidation.Text = "<font color='#FF0066'><b>INVALID HASH</b></font>";
                hashValidated = false;
            }
        }

        
        // Get the standard receipt data from the parsed response
        txnResponseCode            = Page.Request.QueryString["vpc_TxnResponseCode"].Length > 0?Page.Request.QueryString["vpc_TxnResponseCode"] : "Unknown";
        Label_TxnResponseCode.Text = txnResponseCode;
        Label_TxnResponseCodeDesc.Text = getResponseDescription(txnResponseCode);

        Label_Amount.Text          = Page.Request.QueryString["vpc_Amount"].Length  > 0 ? (float.Parse (Page.Request.QueryString["vpc_Amount"])/100).ToString() : "Unknown";
        Label_Command.Text         = Page.Request.QueryString["vpc_Command"].Length > 0 ? Page.Request.QueryString["vpc_Command"] : "Unknown";
        Label_Version.Text         = Page.Request.QueryString["vpc_Version"].Length > 0 ? Page.Request.QueryString["vpc_Version"] : "Unknown";
        Label_OrderInfo.Text       = Page.Request.QueryString["vpc_OrderInfo"].Length > 0 ? Page.Request.QueryString["vpc_OrderInfo"] : "Unknown";
        Label_MerchantID.Text      = Page.Request.QueryString["vpc_Merchant"].Length  > 0 ? Page.Request.QueryString["vpc_Merchant"] : "Unknown";
        
        // only display this data if not an error condition
        if (!errorExists && !txnResponseCode.Equals("7"))
        {
            Label_BatchNo.Text         = Page.Request.QueryString["vpc_BatchNo"].Length > 0 ? Page.Request.QueryString["vpc_BatchNo"] : "Unknown";
            Label_CardType.Text        = Page.Request.QueryString["vpc_Card"].Length    > 0 ? Page.Request.QueryString["vpc_Card"] : "Unknown";
            Label_ReceiptNo.Text       = Page.Request.QueryString["vpc_ReceiptNo"].Length > 0 ? Page.Request.QueryString["vpc_ReceiptNo"] : "Unknown";
            Label_AuthorizeID.Text     = Page.Request.QueryString["vpc_AuthorizeId"].Length > 0 ? Page.Request.QueryString["vpc_AuthorizeId"] : "Unknown";
            Label_MerchTxnRef.Text     = Page.Request.QueryString["vpc_MerchTxnRef"].Length > 0 ? Page.Request.QueryString["vpc_MerchTxnRef"] : "Unknown";
            Label_AcqResponseCode.Text = Page.Request.QueryString["vpc_AcqResponseCode"].Length > 0 ? Page.Request.QueryString["vpc_AcqResponseCode"] : "Unknown";
            Label_TransactionNo.Text   = Page.Request.QueryString["vpc_TransactionNo"].Length > 0 ? Page.Request.QueryString["vpc_TransactionNo"] : "Unknown";
            //Panel_Receipt.Visible = true;
       }
        
        // if message was not provided locally then obtain value from server
        if (message.Length == 0) 
        {
            message = Page.Request.QueryString["vpc_Message"].Length > 0 ? Page.Request.QueryString["vpc_Message"] : "Unknown";
        }
    }
    catch (Exception ex)
    {
       message = "(51) Exception encountered. " + ex.Message;
       if (ex.StackTrace.Length > 0)
       {
           Label_StackTrace.Text = ex.ToString();
           //Panel_StackTrace.Visible = true;
       }
       errorExists = true;
    }
    
    // output the message field
    Label_Message.Text = message;

   /* The URL AgainLink and Title are only used for display purposes.
    * Note: This is ONLY used for this example and is not required for 
    * production code.  */
    
    // Create a link to the example's HTML order page
   // Label_AgainLink.Text = "<a href=\"" + Page.Request.QueryString["AgainLink"] + "\">Another Transaction</a>";
    
    // Determine the appropriate title for the receipt page
    //Label_Title.Text    = (errorExists || txnResponseCode.Equals("7") || txnResponseCode.Equals("Unknown") || hashValidated == false)?Page.Request.QueryString["Title"]+" Error Page" : Page.Request.QueryString["Title"]+" Receipt Page";

    // output debug data to the screen
    # if DEBUG
        debugData += "<br/><u>End of debug information</u><br/>";
        Label_Debug.Text    = debugData;
        Panel_Debug.Visible = true;
    # endif

   /*
    **********************
    * END OF MAIN PROGRAM
    **********************
    *
    * FINISH TRANSACTION - Output the VPC Response Data
    * =====================================================
    * For the purposes of demonstration, we simply display the Result fields
    * on a web page.
    */

    Mec_Payment.MEC_spcCase_spcPayment_spcUpdate_spcWS_spcWFClient MEC_Client = new Mec_Payment.MEC_spcCase_spcPayment_spcUpdate_spcWS_spcWFClient();
    Mec_Payment.MEC_spcCase_spcPayment_spcUpdate_spcWS_spcWF_Input In = new Mec_Payment.MEC_spcCase_spcPayment_spcUpdate_spcWS_spcWF_Input();
      
    
    In.Object_spcId = Page.Request.QueryString["vpc_MerchTxnRef"];
    In.RequestResult = Page.Request.QueryString["vpc_TxnResponseCode"];
    In.Authorization_spcID = Page.Request.QueryString["vpc_AuthorizeId"];
    In.Card_spcType = Page.Request.QueryString["vpc_Card"];
    In.Receipt_spcNumber = Page.Request.QueryString["vpc_ReceiptNo"];
    In.Transaction_spcBatch_spcNumber = Page.Request.QueryString["vpc_BatchNo"];
    In.Transaction_spcResponse_spcCode = Page.Request.QueryString["vpc_TxnResponseCode"]; 
    In.Shopping_spcTransaction_spcNumber = Page.Request.QueryString["vpc_TransactionNo"];
    In.Card_spcNumber = Page.Request.QueryString["vpc_CardNum"];  
    
          
    if (Page.Request.QueryString["vpc_TxnResponseCode"] == "0")
    {
        //MEC_Client.MEC_spcCase_spcPayment_spcUpdate_spcWS_spcWF(In); 
    }
    
}

</script>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<meta name="description" content="">
		<meta name="author" content="">
		<title>BSS Payment Gateway</title>
		
		<!-- Bootstrap core CSS -->
		<link href="bootstrap-dist/css/bootstrap.min.css" rel="stylesheet">

		<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
		<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
		<script src="ie-emulation-modes-warning.js"></script>

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

		<style type='text/css'>
			@font-face {
			  font-family: "Droid Arabic Kufi";
			  src: url(fonts/font/DroidKufi-Regular.ttf) format("truetype");
			}
			@font-face {
			  font-family:"Droid Arabic Kufi";src:url(fonts/font/DroidKufi-Regular.eot);
			}
			@font-face {
			  font-family:Muli;font-style:normal;font-weight:400;src:local('Muli'),url(fonts/Muli-LightItalic.woff) format('woff'),local('Muli'),url(fonts/Muli-LightItalic.ttf) format('truetype');
			}
			.navbar{
				background: url(header_bg.png) 0 -25px #7A0046;
				width: 100%!important;
				direction: rtl;
				vertical-align: bottom;
				height: 120px;
				-webkit-box-shadow: inset 0 -2px 5px rgba(0,0,0,.1);
				box-shadow: inset 0 -2px 5px rgba(0,0,0,.1); 
			}
			.navbar-brand{
				float:right;
			}
			.table{
				border: 1px dashed #eee;
				direction:rtl;
			}
			*{
				font-family: 'Droid Arabic Kufi'!important;
			}
			.jumbotron{
				direction:rtl;
				padding:15px;
				margin:0px
			}
		</style>
	</head>
	<body>
		<nav class="navbar navbar-inverse navbar-fixed-top">
		  <div class="container">       
			</div><!--/.nav-collapse -->
			<a class="navbar-brand" href="/"><img src="mec_logo.png" width="250px"/></a>
		  </div>
		</nav>
		<div style="clear:both"></div>
		<br/><br/><br/><br/><br/>
		<div class="jumbotron">
		  <div class="container">
			<h1 style="font-size: 25px;">شكرا لك، لقد تمت عملية الدفع بنجاح.</h1>
		  </div>
		</div>
		<div class="container">
			<div style="clear:both"></div><br/>
			<form runat="server">
				<table align="center" class='table' border="0" width="70%">
					<tr>
						<td align="right"><strong>رقم المعاملة: </strong></td>
						<td><asp:Label id=Label_MerchTxnRef runat="server"/></td>
					</tr>
					<tr>
						<td colspan="2" class="auto-style1"><hr/></td>
					</tr>
					<tr>
						<td colspan="2" align="center">
							<input id="Button1" type="button" value="اغلاق" onclick="window.close();"/>
						</td>
					</tr>
				</table>
				<asp:Label id=Label_TxnResponseCode runat="server" visible="false"/>
				<asp:Label id=Label_TxnResponseCodeDesc runat="server" visible="false"/>
				<asp:Label id=Label_Amount runat="server" visible="false"/>
				<asp:Label id=Label_Command runat="server" visible="false"/>
				<asp:Label id=Label_Version runat="server" visible="false"/>
				<asp:Label id=Label_OrderInfo runat="server" visible="false"/>
				<asp:Label id=Label_MerchantID runat="server" visible="false"/>
				<asp:Label id=Label_BatchNo runat="server" visible="false"/>
				<asp:Label id=Label_CardType runat="server" visible="false"/>
				<asp:Label id=Label_ReceiptNo runat="server" visible="false"/>
				<asp:Label id=Label_AuthorizeID runat="server" visible="false"/>
				<asp:Label id=Label_AcqResponseCode runat="server" visible="false"/>
				<asp:Label id=Label_TransactionNo runat="server" visible="false"/>
				<asp:Label id=Label_Message runat="server" visible="false"/>
				<asp:Label id=Label_StackTrace runat="server" visible="false"/>
				<asp:Panel id="Panel_Receipt" runat=server visible="false"/>
				<asp:Panel id="Panel_StackTrace" runat=server visible="false"/>
				<asp:Panel id="Panel_Debug" runat=server visible="false"/>
			</form>
		</div><!-- /.container -->

		<!-- Bootstrap core JavaScript
		================================================== -->
		<!-- Placed at the end of the document so the pages load faster -->
		<script src="jquery.min.js"></script>
		<script src="bootstrap-dist/js/bootstrap.min.js"></script>
		<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
		<script src="ie10-viewport-bug-workaround.js"></script>    
	</body>
</html>
