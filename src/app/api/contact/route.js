import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const { name, email, message, phone } = await req.json();

    if (!name || !email || !message || !phone ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY // service role for insert
    );

    const { data, error } = await supabase
      .from("Digiexperts-contact-form")
      .insert([{ name, email, message, phone }]);

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Error saving data" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
