import { Typography, Row, Col } from "antd";

function Terms() {
  return (
    <Typography component="div" style={{ height: "100vh", overflow: "auto" }}>
      <Row type="flex" justify="center" style={{ margin: "20px" }}>
        <Col span={20}>
          <Typography component="div" style={{ marginLeft: "40px" }}>
            <Typography.Title level={1}>Privacy Policy</Typography.Title>
            <Typography.Paragraph>
              Effective Date: 2023-05-09
            </Typography.Paragraph>

            <Typography.Paragraph>
              This Privacy Policy describes how TimeOff ("we," "us," or "our")
              collects, uses, and shares your personal information when you use
              our mobile application ("App") to book vacations and activities.
              This policy applies to users located in Egypt.
            </Typography.Paragraph>

            <Typography.Title level={2}>
              Information We Collect
            </Typography.Title>

            <Typography.Paragraph>
              We may collect various types of personal information from you when
              you use our App, including but not limited to:
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Contact Information:** Your name, email address, phone number,
              and other contact details provided when you create an account or
              communicate with us.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Booking Information:** Details about your vacation or activity
              bookings, such as travel dates, destination preferences, special
              requests, and payment information.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Location Information:** With your consent, we may collect
              information about your device's location to provide location-based
              services and improve your experience.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Usage Information:** Information about how you interact with
              our App, including the features you use, pages visited, actions
              taken, and browsing habits.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Device Information:** Details about your device, including
              device type, operating system, unique device identifiers, and
              mobile network information.
            </Typography.Paragraph>

            <Typography.Title level={2}>
              How We Use Your Information
            </Typography.Title>

            <Typography.Paragraph>
              We may use your personal information for the following purposes:
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Providing Services:** To provide and maintain our App, process
              bookings, manage accounts, and deliver customer support.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Personalization:** To personalize your experience, tailor
              content and recommendations, and improve our App's features and
              functionality.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Communication:** To communicate with you, including sending
              transactional emails, notifications, updates about your bookings,
              and account-related information.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Analytics:** To analyze usage trends and patterns, monitor the
              effectiveness of marketing campaigns, and perform data analytics
              to improve our services.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Security:** To detect, prevent, and address technical issues,
              fraud, illegal activities, and to comply with legal requirements.
            </Typography.Paragraph>

            <Typography.Title level={2}>
              Data Sharing and Disclosure
            </Typography.Title>

            <Typography.Paragraph>
              We may share your personal information with third parties in the
              following circumstances:
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Service Providers:** With service providers, contractors, and
              other third parties who assist us in operating our App, processing
              payments, performing analytics, and providing other services on
              our behalf.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Business Partners:** With our business partners and affiliates
              for marketing and promotional purposes, subject to your consent.
            </Typography.Paragraph>

            <Typography.Paragraph>
              - **Legal Compliance:** With law enforcement agencies, government
              authorities, or other third parties when required by law or to
              protect our legal rights or the rights of others.
            </Typography.Paragraph>

            <Typography.Title level={2}>Contact Us</Typography.Title>

            <Typography.Paragraph>
              If you have any questions or concerns about our Privacy Policy or
              data practices, please contact us at [insert contact email or
              address].
            </Typography.Paragraph>

            <Typography.Title level={2}>
              Changes to This Policy
            </Typography.Title>

            <Typography.Paragraph>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page. You are advised to review this Privacy Policy
              periodically for any changes.
            </Typography.Paragraph>

            <Typography.Title level={2}>Acceptance of Terms</Typography.Title>

            <Typography.Paragraph>
              By using our App, you consent to the collection, use, and
              disclosure of your personal information as described in this
              Privacy Policy.
            </Typography.Paragraph>

            <Typography.Paragraph>
              This Privacy Policy was last updated on [Insert Date].
            </Typography.Paragraph>
          </Typography>
        </Col>
      </Row>
    </Typography>
  );
}

export default Terms;
