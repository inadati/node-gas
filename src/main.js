import greetMsgClerk from '/clerks/msg/greeting/clerk'
import env from '/env'


function main() {
    // greetMsgClerk.Order.name = "John"
    // greetMsgClerk.Service(greetMsgClerk.Client, greetMsgClerk.Order)

    Logger.log(env.TEST)
}

function handleEdit(){
    Logger.log("You Edit")
}

$gas = main()
$gas = handleEdit()