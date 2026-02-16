import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey, x-client-info",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }

  // Simple in-memory rate limiting: 5 submissions per IP per hour
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (entry && now < entry.resetAt) {
    if (entry.count >= 5) {
      return new Response(JSON.stringify({ error: "Too many submissions. Please try again later." }), {
        status: 429,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
    entry.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600000 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }

  // Server-side validation
  const { first_name, last_name, email, phone, age, gender, branch, address } = body;

  if (!first_name || !last_name || !email || !phone || !age || !gender || !branch) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }

  if (typeof first_name !== "string" || first_name.length > 100) {
    return new Response(JSON.stringify({ error: "Invalid first name" }), { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  }
  if (typeof last_name !== "string" || last_name.length > 100) {
    return new Response(JSON.stringify({ error: "Invalid last name" }), { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  }
  if (typeof email !== "string" || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email address" }), { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  }
  if (typeof phone !== "string" || phone.length > 20 || !/^[0-9+\-\s()]+$/.test(phone)) {
    return new Response(JSON.stringify({ error: "Invalid phone number" }), { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  }
  const parsedAge = Number(age);
  if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 120) {
    return new Response(JSON.stringify({ error: "Age must be between 18 and 120" }), { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  }
  if (!["Male", "Female"].includes(gender)) {
    return new Response(JSON.stringify({ error: "Invalid gender" }), { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  }
  if (address && (typeof address !== "string" || address.length > 500)) {
    return new Response(JSON.stringify({ error: "Address too long" }), { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const { error } = await supabase.from("members").insert({
    first_name: first_name.trim(),
    last_name: last_name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    age: parsedAge,
    gender,
    branch,
    address: address?.trim() || null,
  });

  if (error) {
    console.error("Insert error:", error);
    return new Response(JSON.stringify({ error: "Failed to submit application. Please try again." }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
});
