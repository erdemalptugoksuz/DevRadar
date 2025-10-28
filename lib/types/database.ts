import mongoose, { Types } from "mongoose";

// lib/mongodb.ts
export type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};
declare global {
  var mongooseCache: MongooseCache | undefined;
}

// database/booking.model.ts
export interface IBooking extends mongoose.Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// database/event.model.ts
export interface IEvent extends mongoose.Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
