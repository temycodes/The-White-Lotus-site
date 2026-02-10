"use server";

import { getServerSession } from "next-auth";
// server actions
import { signIn } from "next-auth/react";
import authConfig from "./auth";
import supabase from "./supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

// SIGN IN ACTION
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

// UPDATE PROFILE ACTION
export async function updateProfile(formData) {
  const session = await getServerSession(authConfig);

  if (!session) throw new Error("you must be logged in");

  const nationalID = formData.get("nationalID");

  // they were joing together by % in the form
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  // using a regex to test if the nationalID format is correct
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Invalid National ID format. It should be 6-12 alphanumeric characters.");
  }

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase.from("guests").update(updateData).eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
  revalidatePath("/account/profile");
}

// DELETE RESERVATION ACTION
export async function deleteReservation(bookingId) {
  const session = await getServerSession(authConfig);
  if (!session) throw new Error("you must be logged in");

  console.log("bookingId", bookingId);

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId)) throw new Error("nice try buddy, you can't delete this reservation");

  const { error } = await supabase.from("bookings").delete().eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

// UPDATE RESERVATION ACTION

export async function updateReservation(formData) {
  const session = await getServerSession(authConfig);
  if (!session) throw new Error("you must be logged in");
  const bookingId = Number(formData.get("bookingId"));

  // check if user made the booking
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId)) throw new Error("nice try buddy, you can't update this reservation");

  //update fields
  const updatedFields = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")?.slice(0, 1000),
  };

  // mutation
  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .eq("guestId", session.user.guestId) //authorization here
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  // revalidate
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  // redirect
  redirect("/account/reservations");
}

//
export async function createReservation(bookingData, formData) {
  const session = await getServerSession(authConfig);
  if (!session) throw new Error("you must be logged in");

  const newReservation = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")?.toString().slice(0, 1000) ?? "",
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    hasBreakfast: false,
    isPaid: false,
    status: "unconfirmed",
  };

  if (newReservation.numGuest < 1) {
    throw new Error("You must select at least 1 guest");
  }

  console.log("new Res:", newReservation);

  const { error } = await supabase.from("bookings").insert([newReservation]).select().single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}
