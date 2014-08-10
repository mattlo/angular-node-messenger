# Angular Node Messenger

An angular module that allows the ability for one node to add a classname to another through Angular's event system.

## Install

Clone the repository and include directly into your project. You can also use bower and install as a dependency:

```
bower install angular-node-messenger
```

Add the dependency in your Angular's project dependency arguments:

```
var app = angular.module('MyApp', [
	'angular-node-messenger'
]);
```

## Usage

```
<div ng-app="test">
    <a data-node-sender="uniqueId">Open Modal</a>

    <div class="modal" data-node-receiver="uniqueId">
		<a ng-click="$emit('node-close-all')">Close Modal</a>
	</div>
</div>
```

### Example

Demo: http://fiddle.jshell.net/MattLo/uaowhaww/show/

## License
View the [LICENSE](https://github.com/mattlo/angular-node-messenger/blob/master/LICENSE) file.