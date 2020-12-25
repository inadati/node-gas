import greetMsgClerk from './clerks/msg/greeting/clerk'


function main() {
    greetMsgClerk.Order.name = "John"
    greetMsgClerk.Service(greetMsgClerk.Client, greetMsgClerk.Order)

    Logger.log(greetMsgClerk.Client.receipt)
}

function handleEdit(){
    Logger.log("You Edit")
}

$gas = main()
$gas = handleEdit()