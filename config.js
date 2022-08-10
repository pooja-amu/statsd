{
 port: 8125,
 mgmt_port: 8126,
 backends: [ "./backends/repeater" ],
 repeater: [ { host: '127.0.0.1', port: '9999'},{ host: '127.0.0.1', port: '9998'}]
}
