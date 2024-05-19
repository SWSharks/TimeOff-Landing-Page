import { Typography, Row, Col } from "antd";

function ReturnRefundPolicy() {
  return (
    <Typography component="div" style={{ height: "100vh", overflow: "auto" }}>
      <Row type="flex" justify="center" style={{ margin: "20px" }}>
        <Col span={20}>
          <Typography.Title level={2}>
            RETURN AND REFUND POLICY
          </Typography.Title>

          <Typography.Paragraph>Last updated: May 19, 2024</Typography.Paragraph>

          <Typography.Title level={3}>Payment at Time off</Typography.Title>

          <Typography.Paragraph>
          1. The Booking Price for the Activity is payable immediately upon booking confirmation. <br/>
          2. If the booking is confirmed, and the payment is not made, we will automatically cancel the Activity you booked. <br/>
          3. We are your contact in connection with a Service Agreement and payment therefore as the commercial agent of the Supplier. If you wish to request a refund of the Booking Price outside of our cancellation policy, you may contact us. We will then contact the Supplier, and the Supplier will determine in its discretion whether to honor the refund request. A refund granted by the Supplier can be processed by the Supplier through us. <br/>
          </Typography.Paragraph>

          <Typography.Title level={3}>Changes and Cancellations</Typography.Title>

          <Typography.Paragraph>
            <ol>
              <li>You may only cancel the Service Agreements in accordance with the cancellation conditions as stated in the Supplier T&Cs, the description of the Activity on Time off Platform.</li>
              <li>To avoid misunderstandings, you must make changes (e.g. rescheduling the Activity date or making changes to the participants) and cancellations via Time off Platform, unless otherwise agreed.</li>
              <li>The change or cancellation must be made in good time; what is "in good time" depends on each individual case (e.g. within the applicable cancellation period) and may be subject to the Activity’s availability. Therefore, it is very important that you carefully read all terms and conditions on the Activity page or the Supplier T&Cs. The decisive factor for a timely cancellation is the timely receipt of the notification by Time off. If these conditions are met, we will issue a cancellation/change confirmation on behalf of the Supplier. This will serve as proof of the cancellation/change and therefore must be kept.</li>
              <li>We can notify you of changes or cancellations on behalf of the Supplier, especially if at short notice, by your provided telephone number and by sending changes to your email address.</li>
              <li>Unless there are different cancellation conditions specified in the description of the Activity on Time off Platform, in the Supplier  T&Cs, the following cancellation conditions shall apply:
                <ul style={{ listStyle: "none" }}>
                  <li> a) For cancellations more than 24 hours before the start of the Activity: full refund of the Booking Price.</li>
                  <li> b) For cancellations 24 hours or less before the start of the Activity or in case of no-show: no refund.</li>
                </ul>
                If you have questions relating to payment, you can contact us.
              </li>
              <li>
                By authorizing payment, you consent to your payment information being used to collect payment for the Supplier. We reserve the right to make the use of the payment function or individual payment methods on Time off Platform dependent on a check of the required creditworthiness.
              </li>
            </ol>
          </Typography.Paragraph>

          <Typography.Title level={3}>Contact Us</Typography.Title>

          <Typography.Paragraph>
             If you have any questions on how to
            return your item to us, contact us at <strong>info@time-off.org</strong>
          </Typography.Paragraph>

        </Col>
      </Row>
    </Typography>
  );
}

export default ReturnRefundPolicy;
