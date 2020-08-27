"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatComponent = void 0;
var core_1 = require("@angular/core");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketService) {
        this.socketService = socketService;
        this.messageContent = "";
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage().subscribe(function (message) {
            _this.messages.push(message);
        });
    };
    ChatComponent.prototype.send = function () {
        if (this.messageContent) {
            this.socketService.send(this.messageContent);
            this.messageContent = null;
        }
        else {
            console.log("no message");
        }
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.less']
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
