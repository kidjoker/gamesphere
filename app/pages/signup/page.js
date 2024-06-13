"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Signup() {
  const [mfaSecret, setMfaSecret] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchMfaSecret = async () => {
      try {
        const response = await axios.get("/api/mfasecret");
        setMfaSecret(response.data.secret);
        setQrCodeUrl(response.data.qrCodeUrl);
      } catch (error) {
        console.error("Error generating MFA secret:", error);
      }
    };

    fetchMfaSecret();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      mfaCode: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(12, "Must be at least 12 characters")
        .max(20, "Must be 20 characters or less")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Must contain at least one special character"
        )
        .required("Required"),
      mfaCode: Yup.string()
        .length(6, "Must be exactly 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      setSubmitting(true);
      try {
        const response = await axios.post("/api/signup", {
          ...values,
          mfaSecret,
        });
        if (response.status === 200) {
          toast.success("User created successfully!");
          resetForm();
          router.push("/pages/login");
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
              <CardTitle className="text-xl text-zinc-100">
                Sign Up for Gamesphere
              </CardTitle>
              <CardDescription className="text-zinc-200">
                Create your account to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-zinc-100">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Jerry"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    className="bg-zinc-800 text-zinc-100"
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-red-500 text-sm mt-2">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-100">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="bg-zinc-800 text-zinc-100"
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
                    id="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="bg-zinc-800 text-zinc-100"
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
                {qrCodeUrl && (
                  <div className="space-y-2">
                    <Image
                      className="m-auto"
                      src={qrCodeUrl}
                      alt="MFA QR Code"
                      height={100}
                      width={100}
                    />
                  </div>
                )}
                {formik.errors.api && (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.api}
                  </div>
                )}
                <Button
                  type="submit"
                  onClick={formik.handleSubmit}
                  className="w-full bg-zinc-500 text-zinc-900"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm text-zinc-200">
                Already have an account?{" "}
                <Link
                  href="/pages/login"
                  className="underline text-zinc-300"
                  prefetch={false}
                >
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="relative hidden md:block">
          <Link href="/">
            <Image
              className="object-cover "
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
