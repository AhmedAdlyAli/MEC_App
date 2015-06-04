#import "DropBoxChooser.h"


#import <DBChooser/DBChooser.h>
#import <DBChooser/DBChooserResult.h>


enum {
    DBCSectionIndexLinkType = 0,      // section for choosing link type
    DBCSectionIndexOpener,            // section for opening the Chooser
    DBCSectionIndexResult,            // section for displaying information returned
    DBCSectionCount,
} DBSectionIndex;

enum {
    DBCLinkTypeRowIndexPreview = 0,
    DBCLinkTypeRowIndexDirect,
    DBCLinkTypeRowCount,
} DBCLinkTypeRowIndex;

enum {
    DBCResultRowIndexLink = 0,
    DBCResultRowIndexName,
    DBCResultRowIndexSize,
    DBCResultRowIndexIconURL,
    DBCResultRowIndexThumbnail64,
    DBCResultRowIndexThumbnail200,
    DBCResultRowIndexThumbnail640,
    DBCResultRowCount,
} DBCResultRowIndex;



@implementation DropBoxChooser

- (void)greet:(CDVInvokedUrlCommand*)command
{

    NSString* callbackId = [command callbackId];
    NSString* name = [[command arguments] objectAtIndex:0];
    NSString* msg = [NSString stringWithFormat: @"Hello, %@", name];

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self success:result callbackId:callbackId];
}



- (void)SelectFile:(CDVInvokedUrlCommand*)command
{
////////////////////
    
    

    
    [[DBChooser defaultChooser] openChooserForLinkType:DBChooserLinkTypeDirect fromViewController:self.viewController
                                            completion:^(NSArray *results)
     {
         if ([results count]) {
           
             
             
             
             DBChooserResult *_result = results[0];
             
             NSString* callbackId = [command callbackId];
             NSString* name = [[command arguments] objectAtIndex:0];
             NSString* msg = [NSString stringWithFormat: @"الملف المختار: %@", _result.link];
             
             CDVPluginResult* result = [CDVPluginResult
                                        resultWithStatus:CDVCommandStatus_OK
                                        messageAsString:msg];
             
             [self success:result callbackId:callbackId];
             
             
             
             
             
         } else {
            // _result = nil;
             [[[UIAlertView alloc] initWithTitle:@"CANCELLED" message:@"user cancelled!"
                                        delegate:nil cancelButtonTitle:@"Okay" otherButtonTitles:nil]
              show];
         }
         
     }];

    



}

@end