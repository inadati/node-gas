export default {
    Client: {
        receipt: ""
    },
    Order: {
        name: ""
    },
    Service(client, order){
        client.receipt = `Hello ${order.name}!`
    }
}