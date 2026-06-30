import { JwtPayload } from "jsonwebtoken";

export interface Ijwt extends JwtPayload {
  id: string;
}
