'use client';
import Layout from "@/layout/Layout";
import { Input, Radio, Button, RadioGroup, Checkbox } from "@nextui-org/react";
import Image from "next/image";

export default function PaymentPage() {
  return (
    <Layout withNavbar={false} withFooter={false}>
    <div className="flex h-screen">
      {/* Payment Section */}
      <div className="w-1/2 p-10 bg-[#FFFF]">
        <div className="absolute z-0 right-0 bottom-0">
            <Image src="/image/landing-page/bglanding3.png" width={250} height={250} alt="background"/>
        </div>
        <h2 className="text-xl font-semibold mb-6 text-fourth border-b">Payment</h2>

        <div className="mb-12">
          <h3 className="font-semibold text-fourth">Pay With:</h3>
          <RadioGroup defaultValue="card" className="flex space-x-4" orientation="horizontal">
            <Radio value="card">Card</Radio>
            <Radio value="transfer">Transfer</Radio>
          </RadioGroup>
        </div>

        <div className="mb-4">
          <Input
            fullWidth
            label="Card Number"
            placeholder="1234 5678 9101 1121"
            labelPlacement="outside"
          />
        </div>

        <div className="flex space-x-4 mb-4">
          <Input fullWidth label="Expiration Date" placeholder="MM/YY"  labelPlacement="outside"/>
          <Input fullWidth label="CVV" placeholder="123" labelPlacement="outside"/>
        </div>

        <div className="flex items-center mb-6">
          <Checkbox>Save card details</Checkbox>
        </div>

        <Button color="success" fullWidth className="font-bold">
          Pay Rp 30.000
        </Button>

        <p className="text-xs mt-4 text-fourth">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>

      {/* Order Summary Section */}
      <div className="w-1/2 p-10 bg-first">
        <h2 className="text-xl font-semibold mb-6 border-b border-gray-300 text-fourth">Order Summary</h2>

        <div className="mb-4 flex justify-between text-fourth">
          <span>SavorIt Premium</span>
          <span>Rp 30.000</span>
        </div>
        <div className="mb-6 flex justify-between text-fourth">
          <span>Qty: 1</span>
        </div>

        <div className="flex items-center mb-6">
          <Input placeholder="Gift or discount code" />
          <Button className="ml-4">
            Apply
          </Button>
        </div>

        <div className="mb-4 flex justify-between text-fourth">
          <span>Subtotal</span>
          <span>Rp 30.000</span>
        </div>
        <div className="mb-4 flex justify-between text-fourth">
          <span>Admin</span>
          <span>Rp 2.500</span>
        </div>

        <div className="border-t border-gray-300 pt-4 flex justify-between text-xl font-bold text-fourth">
          <span>Total</span>
          <span>Rp 33.000</span>
        </div>
        <div className="text-sm mt-2 text-fourth">
          Including Rp500 in taxes
        </div>
      </div>
    </div>
    </Layout>
  );
}