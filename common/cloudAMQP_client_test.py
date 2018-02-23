from cloudAMQP_client import CloudAMQPClient

CLOUDAMQP_URL = "amqp://olrhiyry:oZGYgWdEoC23Hbzo6aU3jG6SjwmYZosP@donkey.rmq.cloudamqp.com/olrhiyry"

TEST_QUEUE_NAME = 'test'

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)
    
    sentMsg = {'test':'demo'}
    client.sendMessage(sentMsg)
    client.sleep(10)
    receiveMsg = client.getMessage()
    assert sentMsg == receiveMsg
    print 'test_basic passed!'

if __name__ == "__main__":
    test_basic()
