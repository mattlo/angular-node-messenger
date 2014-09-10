(function () {
	angular.module('angular-node-messenger', ['ng']).
		directive('nodeReceiver', ['$log', '$rootScope', function ($log, $rootScope) {
			var activeClsName = 'active',
				registry = [];

			$rootScope.$on('node-close-all', function () {
				$log.info('closing all nodes');

				registry.forEach(function (node) {
					setToInactive(node);
				});
			});

			function setToActive(element) {
				element.addClass(activeClsName);
			}

			function setToInactive(element) {
				element.removeClass(activeClsName);
			}

			return {
				scope: true,
				restrict: 'A',
				link: function (scope, element, attr) {
					if (attr.nodeReceiver === undefined || attr.nodeReceiver === '') {
						throw new Error('ID not defined for attribute `node-receiver`');
					}

					$rootScope.$on('node-open', function (e, id) {
						if (id === attr.nodeReceiver) {
							$log.info('opening node ' + id);
							setToActive(element);
						}
					});

					$rootScope.$on('node-close', function (e, id) {
						if (id === attr.nodeReceiver) {
							$log.info('closing node', id);
							setToInactive(element);
						}
					});

					registry.push(element);
				}
			};
		}]).
		directive('nodeSender', ['$log', '$rootScope', function ($log, $rootScope) {
			return {
				scope: true,
				restrict: 'A',
				link: function (scope, element, attr) {
					if (attr.nodeSender === undefined || attr.nodeSender === '') {
						throw new Error('ID not defined for attribute `node-sender`');
					}

					element.on('click', function () {
						$rootScope.$emit('node-open', attr.nodeSender);
					});
				}
			};
		}]);
}());