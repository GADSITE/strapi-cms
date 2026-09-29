/**
 * contact-form-origins-insight controller
 */

import { factories } from '@strapi/strapi';

async function syncToMailchimp(data: {
  email: string;
  name: string;
  company?: string;
  position?: string;
  phone?: string;
}): Promise<void> {
  const mailchimpApiUrl = process.env.MAILCHIMP_API_URL;
  const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
  const mailchimpListId = process.env.MAILCHIMP_LIST_ID;

  if (!mailchimpApiUrl || !mailchimpApiKey || !mailchimpListId) {
    console.warn(
      '[Mailchimp] MAILCHIMP_API_URL or MAILCHIMP_API_KEY or MAILCHIMP_LIST_ID is not set — skipping sync.',
    );
    return;
  }

  // Split name into first/last (best-effort)
  const [firstName = '', ...rest] = (data.name || '').trim().split(' ');
  const lastName = rest.join(' ');

  const url = `${mailchimpApiUrl}/lists/${mailchimpListId}/members`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${mailchimpApiKey}`
      },
      body: JSON.stringify({
        email_address: data.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          MMERGE4: data.company,
          MMERGE5: data.position,
          MMERGE7: data.phone,
        },
      }),
    });

    if (!response.ok) {
      const body = await response.text();

      // 400 with title "Member Exists" is not a real error — member already subscribed
      if (response.status === 400) {
        const parsed = JSON.parse(body) as { title?: string };
        if (parsed?.title === 'Member Exists') {
          console.log(`[Mailchimp] ${data.email} is already subscribed.`);
          return;
        }
      }

      console.error(
        `[Mailchimp] Sync failed for ${data.email}: ${response.status} ${response.statusText} — ${body}`,
      );
    } else {
      console.log(`[Mailchimp] Sync successful for ${data.email}. Status: ${response.status}`);
    }
  } catch (error: unknown) {
    console.error('[Mailchimp] Unexpected error during sync:', error);
  }
}

export default factories.createCoreController(
  'api::contact-form-origins-insight.contact-form-origins-insight',
  ({ strapi }) => ({
    async create(ctx) {
      // Let Strapi handle the actual record creation first
      const response = await super.create(ctx);

      // Fire-and-forget Mailchimp sync — never block or fail the form submission
      const { email, name, company, position, phone } =
        (ctx.request.body as any)?.data ?? {};

      if (email) {
        syncToMailchimp({ email, name, company, position, phone }).catch(
          (err) => console.error('[Mailchimp] Background sync error:', err),
        );
      }

      return response;
    },
  }),
);
