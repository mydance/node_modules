var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { resolveForwardRef, Injectable } from 'angular2/src/core/di';
import { isPresent, stringify } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import { ListWrapper, StringMapWrapper } from 'angular2/src/facade/collection';
import { DirectiveMetadata, ComponentMetadata, InputMetadata, OutputMetadata, HostBindingMetadata, HostListenerMetadata, ContentChildrenMetadata, ViewChildrenMetadata, ContentChildMetadata, ViewChildMetadata } from 'angular2/src/core/metadata';
import { reflector } from 'angular2/src/core/reflection/reflection';
function _isDirectiveMetadata(type) {
    return type instanceof DirectiveMetadata;
}
/*
 * Resolve a `Type` for {@link DirectiveMetadata}.
 *
 * This interface can be overridden by the application developer to create custom behavior.
 *
 * See {@link Compiler}
 */
export let DirectiveResolver = class {
    /**
     * Return {@link DirectiveMetadata} for a given `Type`.
     */
    resolve(type) {
        var typeMetadata = reflector.annotations(resolveForwardRef(type));
        if (isPresent(typeMetadata)) {
            var metadata = typeMetadata.find(_isDirectiveMetadata);
            if (isPresent(metadata)) {
                var propertyMetadata = reflector.propMetadata(type);
                return this._mergeWithPropertyMetadata(metadata, propertyMetadata, type);
            }
        }
        throw new BaseException(`No Directive annotation found on ${stringify(type)}`);
    }
    _mergeWithPropertyMetadata(dm, propertyMetadata, directiveType) {
        var inputs = [];
        var outputs = [];
        var host = {};
        var queries = {};
        StringMapWrapper.forEach(propertyMetadata, (metadata, propName) => {
            metadata.forEach(a => {
                if (a instanceof InputMetadata) {
                    if (isPresent(a.bindingPropertyName)) {
                        inputs.push(`${propName}: ${a.bindingPropertyName}`);
                    }
                    else {
                        inputs.push(propName);
                    }
                }
                if (a instanceof OutputMetadata) {
                    if (isPresent(a.bindingPropertyName)) {
                        outputs.push(`${propName}: ${a.bindingPropertyName}`);
                    }
                    else {
                        outputs.push(propName);
                    }
                }
                if (a instanceof HostBindingMetadata) {
                    if (isPresent(a.hostPropertyName)) {
                        host[`[${a.hostPropertyName}]`] = propName;
                    }
                    else {
                        host[`[${propName}]`] = propName;
                    }
                }
                if (a instanceof HostListenerMetadata) {
                    var args = isPresent(a.args) ? a.args.join(', ') : '';
                    host[`(${a.eventName})`] = `${propName}(${args})`;
                }
                if (a instanceof ContentChildrenMetadata) {
                    queries[propName] = a;
                }
                if (a instanceof ViewChildrenMetadata) {
                    queries[propName] = a;
                }
                if (a instanceof ContentChildMetadata) {
                    queries[propName] = a;
                }
                if (a instanceof ViewChildMetadata) {
                    queries[propName] = a;
                }
            });
        });
        return this._merge(dm, inputs, outputs, host, queries, directiveType);
    }
    _merge(dm, inputs, outputs, host, queries, directiveType) {
        var mergedInputs = isPresent(dm.inputs) ? ListWrapper.concat(dm.inputs, inputs) : inputs;
        var mergedOutputs;
        if (isPresent(dm.outputs)) {
            dm.outputs.forEach((propName) => {
                if (ListWrapper.contains(outputs, propName)) {
                    throw new BaseException(`Output event '${propName}' defined multiple times in '${stringify(directiveType)}'`);
                }
            });
            mergedOutputs = ListWrapper.concat(dm.outputs, outputs);
        }
        else {
            mergedOutputs = outputs;
        }
        var mergedHost = isPresent(dm.host) ? StringMapWrapper.merge(dm.host, host) : host;
        var mergedQueries = isPresent(dm.queries) ? StringMapWrapper.merge(dm.queries, queries) : queries;
        if (dm instanceof ComponentMetadata) {
            return new ComponentMetadata({
                selector: dm.selector,
                inputs: mergedInputs,
                outputs: mergedOutputs,
                host: mergedHost,
                exportAs: dm.exportAs,
                moduleId: dm.moduleId,
                queries: mergedQueries,
                changeDetection: dm.changeDetection,
                providers: dm.providers,
                viewProviders: dm.viewProviders
            });
        }
        else {
            return new DirectiveMetadata({
                selector: dm.selector,
                inputs: mergedInputs,
                outputs: mergedOutputs,
                host: mergedHost,
                exportAs: dm.exportAs,
                queries: mergedQueries,
                providers: dm.providers
            });
        }
    }
};
DirectiveResolver = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], DirectiveResolver);
export var CODEGEN_DIRECTIVE_RESOLVER = new DirectiveResolver();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2RpcmVjdGl2ZV9yZXNvbHZlci50cyJdLCJuYW1lcyI6WyJfaXNEaXJlY3RpdmVNZXRhZGF0YSIsIkRpcmVjdGl2ZVJlc29sdmVyIiwiRGlyZWN0aXZlUmVzb2x2ZXIucmVzb2x2ZSIsIkRpcmVjdGl2ZVJlc29sdmVyLl9tZXJnZVdpdGhQcm9wZXJ0eU1ldGFkYXRhIiwiRGlyZWN0aXZlUmVzb2x2ZXIuX21lcmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFDLGlCQUFpQixFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQjtPQUMzRCxFQUFPLFNBQVMsRUFBVyxTQUFTLEVBQUMsTUFBTSwwQkFBMEI7T0FDckUsRUFBQyxhQUFhLEVBQUMsTUFBTSxnQ0FBZ0M7T0FDckQsRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0M7T0FFckUsRUFDTCxpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDbEIsTUFBTSw0QkFBNEI7T0FDNUIsRUFBQyxTQUFTLEVBQUMsTUFBTSx5Q0FBeUM7QUFFakUsOEJBQThCLElBQVM7SUFDckNBLE1BQU1BLENBQUNBLElBQUlBLFlBQVlBLGlCQUFpQkEsQ0FBQ0E7QUFDM0NBLENBQUNBO0FBRUQ7Ozs7OztHQU1HO0FBQ0g7SUFFRUM7O09BRUdBO0lBQ0hBLE9BQU9BLENBQUNBLElBQVVBO1FBQ2hCQyxJQUFJQSxZQUFZQSxHQUFHQSxTQUFTQSxDQUFDQSxXQUFXQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xFQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsSUFBSUEsUUFBUUEsR0FBR0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtZQUN2REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hCQSxJQUFJQSxnQkFBZ0JBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNwREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMEJBQTBCQSxDQUFDQSxRQUFRQSxFQUFFQSxnQkFBZ0JBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQzNFQSxDQUFDQTtRQUNIQSxDQUFDQTtRQUVEQSxNQUFNQSxJQUFJQSxhQUFhQSxDQUFDQSxvQ0FBb0NBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO0lBQ2pGQSxDQUFDQTtJQUVPRCwwQkFBMEJBLENBQUNBLEVBQXFCQSxFQUNyQkEsZ0JBQXdDQSxFQUN4Q0EsYUFBbUJBO1FBQ3BERSxJQUFJQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNoQkEsSUFBSUEsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDakJBLElBQUlBLElBQUlBLEdBQTRCQSxFQUFFQSxDQUFDQTtRQUN2Q0EsSUFBSUEsT0FBT0EsR0FBeUJBLEVBQUVBLENBQUNBO1FBRXZDQSxnQkFBZ0JBLENBQUNBLE9BQU9BLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0EsUUFBZUEsRUFBRUEsUUFBZ0JBO1lBQzNFQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDaEJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFlBQVlBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBO29CQUMvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDckNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLFFBQVFBLEtBQUtBLENBQUNBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZEQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ05BLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO29CQUN4QkEsQ0FBQ0E7Z0JBQ0hBLENBQUNBO2dCQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxZQUFZQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDaENBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxRQUFRQSxLQUFLQSxDQUFDQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBLENBQUNBO29CQUN4REEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNOQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtvQkFDekJBLENBQUNBO2dCQUNIQSxDQUFDQTtnQkFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsWUFBWUEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDckNBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2xDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLENBQUNBLEdBQUdBLFFBQVFBLENBQUNBO29CQUM3Q0EsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNOQSxJQUFJQSxDQUFDQSxJQUFJQSxRQUFRQSxHQUFHQSxDQUFDQSxHQUFHQSxRQUFRQSxDQUFDQTtvQkFDbkNBLENBQUNBO2dCQUNIQSxDQUFDQTtnQkFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsWUFBWUEsb0JBQW9CQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDdENBLElBQUlBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQVdBLENBQUNBLENBQUNBLElBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO29CQUMvREEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsR0FBR0EsR0FBR0EsUUFBUUEsSUFBSUEsSUFBSUEsR0FBR0EsQ0FBQ0E7Z0JBQ3BEQSxDQUFDQTtnQkFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsWUFBWUEsdUJBQXVCQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDekNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUN4QkEsQ0FBQ0E7Z0JBRURBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFlBQVlBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3RDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDeEJBLENBQUNBO2dCQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxZQUFZQSxvQkFBb0JBLENBQUNBLENBQUNBLENBQUNBO29CQUN0Q0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsWUFBWUEsaUJBQWlCQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDbkNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUN4QkEsQ0FBQ0E7WUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSEEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsT0FBT0EsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7SUFDeEVBLENBQUNBO0lBRU9GLE1BQU1BLENBQUNBLEVBQXFCQSxFQUFFQSxNQUFnQkEsRUFBRUEsT0FBaUJBLEVBQzFEQSxJQUE2QkEsRUFBRUEsT0FBNkJBLEVBQzVEQSxhQUFtQkE7UUFDaENHLElBQUlBLFlBQVlBLEdBQUdBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBO1FBRXpGQSxJQUFJQSxhQUFhQSxDQUFDQTtRQUNsQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUJBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQWdCQTtnQkFDbENBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUM1Q0EsTUFBTUEsSUFBSUEsYUFBYUEsQ0FDbkJBLGlCQUFpQkEsUUFBUUEsZ0NBQWdDQSxTQUFTQSxDQUFDQSxhQUFhQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDNUZBLENBQUNBO1lBQ0hBLENBQUNBLENBQUNBLENBQUNBO1lBQ0hBLGFBQWFBLEdBQUdBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBLE9BQU9BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1FBQzFEQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxhQUFhQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUMxQkEsQ0FBQ0E7UUFFREEsSUFBSUEsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsZ0JBQWdCQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNuRkEsSUFBSUEsYUFBYUEsR0FDYkEsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsZ0JBQWdCQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUVsRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsWUFBWUEsaUJBQWlCQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsaUJBQWlCQSxDQUFDQTtnQkFDM0JBLFFBQVFBLEVBQUVBLEVBQUVBLENBQUNBLFFBQVFBO2dCQUNyQkEsTUFBTUEsRUFBRUEsWUFBWUE7Z0JBQ3BCQSxPQUFPQSxFQUFFQSxhQUFhQTtnQkFDdEJBLElBQUlBLEVBQUVBLFVBQVVBO2dCQUNoQkEsUUFBUUEsRUFBRUEsRUFBRUEsQ0FBQ0EsUUFBUUE7Z0JBQ3JCQSxRQUFRQSxFQUFFQSxFQUFFQSxDQUFDQSxRQUFRQTtnQkFDckJBLE9BQU9BLEVBQUVBLGFBQWFBO2dCQUN0QkEsZUFBZUEsRUFBRUEsRUFBRUEsQ0FBQ0EsZUFBZUE7Z0JBQ25DQSxTQUFTQSxFQUFFQSxFQUFFQSxDQUFDQSxTQUFTQTtnQkFDdkJBLGFBQWFBLEVBQUVBLEVBQUVBLENBQUNBLGFBQWFBO2FBQ2hDQSxDQUFDQSxDQUFDQTtRQUVMQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxNQUFNQSxDQUFDQSxJQUFJQSxpQkFBaUJBLENBQUNBO2dCQUMzQkEsUUFBUUEsRUFBRUEsRUFBRUEsQ0FBQ0EsUUFBUUE7Z0JBQ3JCQSxNQUFNQSxFQUFFQSxZQUFZQTtnQkFDcEJBLE9BQU9BLEVBQUVBLGFBQWFBO2dCQUN0QkEsSUFBSUEsRUFBRUEsVUFBVUE7Z0JBQ2hCQSxRQUFRQSxFQUFFQSxFQUFFQSxDQUFDQSxRQUFRQTtnQkFDckJBLE9BQU9BLEVBQUVBLGFBQWFBO2dCQUN0QkEsU0FBU0EsRUFBRUEsRUFBRUEsQ0FBQ0EsU0FBU0E7YUFDeEJBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBO0lBQ0hBLENBQUNBO0FBQ0hILENBQUNBO0FBN0hEO0lBQUMsVUFBVSxFQUFFOztzQkE2SFo7QUFFRCxXQUFXLDBCQUEwQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVzb2x2ZUZvcndhcmRSZWYsIEluamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7VHlwZSwgaXNQcmVzZW50LCBpc0JsYW5rLCBzdHJpbmdpZnl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge0xpc3RXcmFwcGVyLCBTdHJpbmdNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmVNZXRhZGF0YSxcbiAgQ29tcG9uZW50TWV0YWRhdGEsXG4gIElucHV0TWV0YWRhdGEsXG4gIE91dHB1dE1ldGFkYXRhLFxuICBIb3N0QmluZGluZ01ldGFkYXRhLFxuICBIb3N0TGlzdGVuZXJNZXRhZGF0YSxcbiAgQ29udGVudENoaWxkcmVuTWV0YWRhdGEsXG4gIFZpZXdDaGlsZHJlbk1ldGFkYXRhLFxuICBDb250ZW50Q2hpbGRNZXRhZGF0YSxcbiAgVmlld0NoaWxkTWV0YWRhdGFcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEnO1xuaW1wb3J0IHtyZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbic7XG5cbmZ1bmN0aW9uIF9pc0RpcmVjdGl2ZU1ldGFkYXRhKHR5cGU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZSBpbnN0YW5jZW9mIERpcmVjdGl2ZU1ldGFkYXRhO1xufVxuXG4vKlxuICogUmVzb2x2ZSBhIGBUeXBlYCBmb3Ige0BsaW5rIERpcmVjdGl2ZU1ldGFkYXRhfS5cbiAqXG4gKiBUaGlzIGludGVyZmFjZSBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgYXBwbGljYXRpb24gZGV2ZWxvcGVyIHRvIGNyZWF0ZSBjdXN0b20gYmVoYXZpb3IuXG4gKlxuICogU2VlIHtAbGluayBDb21waWxlcn1cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZVJlc29sdmVyIHtcbiAgLyoqXG4gICAqIFJldHVybiB7QGxpbmsgRGlyZWN0aXZlTWV0YWRhdGF9IGZvciBhIGdpdmVuIGBUeXBlYC5cbiAgICovXG4gIHJlc29sdmUodHlwZTogVHlwZSk6IERpcmVjdGl2ZU1ldGFkYXRhIHtcbiAgICB2YXIgdHlwZU1ldGFkYXRhID0gcmVmbGVjdG9yLmFubm90YXRpb25zKHJlc29sdmVGb3J3YXJkUmVmKHR5cGUpKTtcbiAgICBpZiAoaXNQcmVzZW50KHR5cGVNZXRhZGF0YSkpIHtcbiAgICAgIHZhciBtZXRhZGF0YSA9IHR5cGVNZXRhZGF0YS5maW5kKF9pc0RpcmVjdGl2ZU1ldGFkYXRhKTtcbiAgICAgIGlmIChpc1ByZXNlbnQobWV0YWRhdGEpKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eU1ldGFkYXRhID0gcmVmbGVjdG9yLnByb3BNZXRhZGF0YSh0eXBlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lcmdlV2l0aFByb3BlcnR5TWV0YWRhdGEobWV0YWRhdGEsIHByb3BlcnR5TWV0YWRhdGEsIHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGBObyBEaXJlY3RpdmUgYW5ub3RhdGlvbiBmb3VuZCBvbiAke3N0cmluZ2lmeSh0eXBlKX1gKTtcbiAgfVxuXG4gIHByaXZhdGUgX21lcmdlV2l0aFByb3BlcnR5TWV0YWRhdGEoZG06IERpcmVjdGl2ZU1ldGFkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TWV0YWRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnlbXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlVHlwZTogVHlwZSk6IERpcmVjdGl2ZU1ldGFkYXRhIHtcbiAgICB2YXIgaW5wdXRzID0gW107XG4gICAgdmFyIG91dHB1dHMgPSBbXTtcbiAgICB2YXIgaG9zdDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICB2YXIgcXVlcmllczoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcblxuICAgIFN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaChwcm9wZXJ0eU1ldGFkYXRhLCAobWV0YWRhdGE6IGFueVtdLCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBtZXRhZGF0YS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIElucHV0TWV0YWRhdGEpIHtcbiAgICAgICAgICBpZiAoaXNQcmVzZW50KGEuYmluZGluZ1Byb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKGAke3Byb3BOYW1lfTogJHthLmJpbmRpbmdQcm9wZXJ0eU5hbWV9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0cy5wdXNoKHByb3BOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIE91dHB1dE1ldGFkYXRhKSB7XG4gICAgICAgICAgaWYgKGlzUHJlc2VudChhLmJpbmRpbmdQcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBvdXRwdXRzLnB1c2goYCR7cHJvcE5hbWV9OiAke2EuYmluZGluZ1Byb3BlcnR5TmFtZX1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHByb3BOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIEhvc3RCaW5kaW5nTWV0YWRhdGEpIHtcbiAgICAgICAgICBpZiAoaXNQcmVzZW50KGEuaG9zdFByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGhvc3RbYFske2EuaG9zdFByb3BlcnR5TmFtZX1dYF0gPSBwcm9wTmFtZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9zdFtgWyR7cHJvcE5hbWV9XWBdID0gcHJvcE5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBIb3N0TGlzdGVuZXJNZXRhZGF0YSkge1xuICAgICAgICAgIHZhciBhcmdzID0gaXNQcmVzZW50KGEuYXJncykgPyAoPGFueVtdPmEuYXJncykuam9pbignLCAnKSA6ICcnO1xuICAgICAgICAgIGhvc3RbYCgke2EuZXZlbnROYW1lfSlgXSA9IGAke3Byb3BOYW1lfSgke2FyZ3N9KWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIENvbnRlbnRDaGlsZHJlbk1ldGFkYXRhKSB7XG4gICAgICAgICAgcXVlcmllc1twcm9wTmFtZV0gPSBhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBWaWV3Q2hpbGRyZW5NZXRhZGF0YSkge1xuICAgICAgICAgIHF1ZXJpZXNbcHJvcE5hbWVdID0gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhIGluc3RhbmNlb2YgQ29udGVudENoaWxkTWV0YWRhdGEpIHtcbiAgICAgICAgICBxdWVyaWVzW3Byb3BOYW1lXSA9IGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIFZpZXdDaGlsZE1ldGFkYXRhKSB7XG4gICAgICAgICAgcXVlcmllc1twcm9wTmFtZV0gPSBhO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fbWVyZ2UoZG0sIGlucHV0cywgb3V0cHV0cywgaG9zdCwgcXVlcmllcywgZGlyZWN0aXZlVHlwZSk7XG4gIH1cblxuICBwcml2YXRlIF9tZXJnZShkbTogRGlyZWN0aXZlTWV0YWRhdGEsIGlucHV0czogc3RyaW5nW10sIG91dHB1dHM6IHN0cmluZ1tdLFxuICAgICAgICAgICAgICAgICBob3N0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSwgcXVlcmllczoge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgICAgICAgICAgICAgIGRpcmVjdGl2ZVR5cGU6IFR5cGUpOiBEaXJlY3RpdmVNZXRhZGF0YSB7XG4gICAgdmFyIG1lcmdlZElucHV0cyA9IGlzUHJlc2VudChkbS5pbnB1dHMpID8gTGlzdFdyYXBwZXIuY29uY2F0KGRtLmlucHV0cywgaW5wdXRzKSA6IGlucHV0cztcblxuICAgIHZhciBtZXJnZWRPdXRwdXRzO1xuICAgIGlmIChpc1ByZXNlbnQoZG0ub3V0cHV0cykpIHtcbiAgICAgIGRtLm91dHB1dHMuZm9yRWFjaCgocHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoTGlzdFdyYXBwZXIuY29udGFpbnMob3V0cHV0cywgcHJvcE5hbWUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXG4gICAgICAgICAgICAgIGBPdXRwdXQgZXZlbnQgJyR7cHJvcE5hbWV9JyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzIGluICcke3N0cmluZ2lmeShkaXJlY3RpdmVUeXBlKX0nYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbWVyZ2VkT3V0cHV0cyA9IExpc3RXcmFwcGVyLmNvbmNhdChkbS5vdXRwdXRzLCBvdXRwdXRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVyZ2VkT3V0cHV0cyA9IG91dHB1dHM7XG4gICAgfVxuXG4gICAgdmFyIG1lcmdlZEhvc3QgPSBpc1ByZXNlbnQoZG0uaG9zdCkgPyBTdHJpbmdNYXBXcmFwcGVyLm1lcmdlKGRtLmhvc3QsIGhvc3QpIDogaG9zdDtcbiAgICB2YXIgbWVyZ2VkUXVlcmllcyA9XG4gICAgICAgIGlzUHJlc2VudChkbS5xdWVyaWVzKSA/IFN0cmluZ01hcFdyYXBwZXIubWVyZ2UoZG0ucXVlcmllcywgcXVlcmllcykgOiBxdWVyaWVzO1xuXG4gICAgaWYgKGRtIGluc3RhbmNlb2YgQ29tcG9uZW50TWV0YWRhdGEpIHtcbiAgICAgIHJldHVybiBuZXcgQ29tcG9uZW50TWV0YWRhdGEoe1xuICAgICAgICBzZWxlY3RvcjogZG0uc2VsZWN0b3IsXG4gICAgICAgIGlucHV0czogbWVyZ2VkSW5wdXRzLFxuICAgICAgICBvdXRwdXRzOiBtZXJnZWRPdXRwdXRzLFxuICAgICAgICBob3N0OiBtZXJnZWRIb3N0LFxuICAgICAgICBleHBvcnRBczogZG0uZXhwb3J0QXMsXG4gICAgICAgIG1vZHVsZUlkOiBkbS5tb2R1bGVJZCxcbiAgICAgICAgcXVlcmllczogbWVyZ2VkUXVlcmllcyxcbiAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBkbS5jaGFuZ2VEZXRlY3Rpb24sXG4gICAgICAgIHByb3ZpZGVyczogZG0ucHJvdmlkZXJzLFxuICAgICAgICB2aWV3UHJvdmlkZXJzOiBkbS52aWV3UHJvdmlkZXJzXG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERpcmVjdGl2ZU1ldGFkYXRhKHtcbiAgICAgICAgc2VsZWN0b3I6IGRtLnNlbGVjdG9yLFxuICAgICAgICBpbnB1dHM6IG1lcmdlZElucHV0cyxcbiAgICAgICAgb3V0cHV0czogbWVyZ2VkT3V0cHV0cyxcbiAgICAgICAgaG9zdDogbWVyZ2VkSG9zdCxcbiAgICAgICAgZXhwb3J0QXM6IGRtLmV4cG9ydEFzLFxuICAgICAgICBxdWVyaWVzOiBtZXJnZWRRdWVyaWVzLFxuICAgICAgICBwcm92aWRlcnM6IGRtLnByb3ZpZGVyc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB2YXIgQ09ERUdFTl9ESVJFQ1RJVkVfUkVTT0xWRVIgPSBuZXcgRGlyZWN0aXZlUmVzb2x2ZXIoKTtcbiJdfQ==