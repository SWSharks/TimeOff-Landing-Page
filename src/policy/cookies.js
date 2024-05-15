import { Typography, Row, Col } from "antd";

function Cookies() {
  return (
    <Typography component="div" style={{ height: "100vh", overflow: "auto" }}>
      <Row type="flex" justify="center" style={{ margin: "20px" }}>
        <Col span={20}>
          <Typography.Title level={2}>
            RETURN AND REFUND POLICY
          </Typography.Title>

          <Typography.Paragraph>Last updated: May 9, 2023</Typography.Paragraph>

          <Typography.Paragraph>
            We strive to ensure that you are satisfied with your purchase from
            TimeOff. However, if you are not entirely satisfied with your
            purchase, we're here to help.
          </Typography.Paragraph>

          <Typography.Paragraph>
            <strong>Returns:</strong> You have [number of days] calendar days to
            return an item from the date you received it. To be eligible for a
            return, your item must be unused and in the same condition that you
            received it. Your item must be in the original packaging.
          </Typography.Paragraph>

          <Typography.Paragraph>
            <strong>Refunds:</strong> Once we receive your item, we will inspect
            it and notify you that we have received your returned item. We will
            immediately notify you on the status of your refund after inspecting
            the item. If your return is approved, we will initiate a refund to
            your credit card (or original method of payment). You will receive
            the credit within a certain amount of days, depending on your card
            issuer's policies.
          </Typography.Paragraph>

          <Typography.Paragraph>
            <strong>Shipping:</strong> You will be responsible for paying for
            your own shipping costs for returning your item. Shipping costs are
            nonrefundable. If you receive a refund, the cost of return shipping
            will be deducted from your refund.
          </Typography.Paragraph>

          <Typography.Paragraph>
            <strong>Contact Us:</strong> If you have any questions on how to
            return your item to us, contact us at info@time-off.org
          </Typography.Paragraph>

          {/* Include other sections and terms similarly */}
        </Col>
      </Row>
    </Typography>
  );
}

export default Cookies;
