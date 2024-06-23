import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import User from "@/models/User";

// Need to run this command in the terminal for this to work "ngrok http --domain=polite-airedale-dominant.ngrok-free.app 3000" in development
// This allows the clerk webhook to send to a url that re-routes to the localhost
export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  let payload;
  try {
    payload = await req.json();
  } catch (error) {
    console.error("Error parsing JSON payload:", error);
    return new Response("Error parsing JSON payload", {
      status: 400,
    });
  }
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const webhook = new Webhook(WEBHOOK_SECRET);

  let event: WebhookEvent;

  // Verify the payload with the headers
  try {
    event = webhook.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = event.type;

  switch (eventType) {
    case "user.created":
      try {
        const user = new User({
          id: event.data.id,
          firstName: event.data.first_name,
          lastName: event.data.last_name,
          email: event.data.email_addresses.find(
            (email) => email.id === event.data.primary_email_address_id
          )?.email_address,
        });
        await user.save();
        return new Response("Success creating user", { status: 200 });
      } catch (error) {
        console.error("Error creating new user:", error);
        return new Response("Error creating new user", {
          status: 500,
        });
      }
    // Add cases here for other events. e.g. 'user.updated'
    default:
      console.warn(`Unhandled event type: ${eventType}`);
      return new Response("Unhandled event type", {
        status: 400,
      });
  }
}
