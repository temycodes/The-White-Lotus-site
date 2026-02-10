import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

//handles GET requests to /api/cabins/[cabinid]
export async function GET(request, { params }) {
  const { cabinid } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([getCabin(cabinid), getBookedDatesByCabinId(cabinid)]);

    return Response.json({ cabin, bookedDates });
  } catch (error) {
    return Response.json({ error: "Failed to fetch cabin data" }, { status: 500 });
  }
}
