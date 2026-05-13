// import { NextRequest, NextResponse } from "next/server";
// import { loginUser } from "@/app/Lab23/service/user.service";

// export async function POST(req: NextRequest) {
//   try {
//     const { email, password } = await req.json();

//     const result = await loginUser(req.body);

//     const response = NextResponse.json({
//       message: "Login successful",
//       // user: result.user
//     });
//     response.cookies.set("token",result.token, {
//       httpOnly: true,
//       secure: false,
//       path: "/",
//     });

//     return response;

//   } catch (error: any) {
//     return NextResponse.json(
//       { message: error.message },
//       { status: 401 }
//     );
//   }
// }