#import <Cordova/CDV.h>

@interface DropBoxChooser : CDVPlugin

- (void) greet:(CDVInvokedUrlCommand*)command;


- (void) SelectFile:(CDVInvokedUrlCommand*)command;

@end