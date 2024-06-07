"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      mfaCode: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      mfaCode: Yup.string()
        .length(6, "Must be exactly 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setSubmitting(true);
      try {
        const response = await axios.post("/api/login", values);
        if (response.status === 200) {
          toast.success("Login successful!");
          localStorage.setItem("token", response.data.token);
          router.push("/");
        } else {
          setErrors({ api: "Unexpected response status: " + response.status });
        }
      } catch (error) {
        const errorMessage = error.response.data.message || "An error occurred";
        setErrors({ api: errorMessage });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <CardTitle className="text-xl text-zinc-100">Login</CardTitle>
              <CardDescription className="text-zinc-200">
                See Your Growth and get consulting growth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-100">
                    Email
                  </Label>
                  <Input
                    className="bg-zinc-800 text-zinc-100"
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm mt-2">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-zinc-100">
                    Password
                  </Label>
                  <Input
                    className="bg-zinc-800 text-zinc-100"
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 text-sm mt-2">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mfaCode" className="text-zinc-100">
                    MFA Code
                  </Label>
                  <Input
                    id="mfaCode"
                    name="mfaCode"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mfaCode}
                    className="bg-zinc-800 text-zinc-100"
                  />
                  {formik.touched.mfaCode && formik.errors.mfaCode ? (
                    <div className="text-red-500 text-sm mt-2">
                      {formik.errors.mfaCode}
                    </div>
                  ) : null}
                </div>
                {formik.errors.api && (
                  <div className="text-red-500 text-sm mb-4">
                    {formik.errors.api}
                  </div>
                )}
                <Button
                  type="submit"
                  onClick={formik.handleSubmit}
                  className="w-full bg-zinc-500 text-zinc-900 m-auto"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Submitting..." : "Login"}
                </Button>
                <div className="mt-4 text-center text-sm text-zinc-200">
                  Do not have an account?{" "}
                  <Link
                    href="/pages/signup"
                    className="underline text-zinc-300"
                    prefetch={false}
                  >
                    Sign up
                  </Link>
                </div>
                <p className="mt-4 text-center text-xs text-slate-200">
                  @2023 All rights reserved
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="relative hidden md:block">
          <Link href="/">
            <Image
              className="object-cover"
              fill={true}
              src="/Gamesphere.png"
              alt="bg-image"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
