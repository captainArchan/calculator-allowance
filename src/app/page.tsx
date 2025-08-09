"use client";
import { useState } from "react";

export default function Home() {
  const [meals, setMeals] = useState("");
  const [people, setPeople] = useState("");
  const [nights, setNights] = useState("");
  const [distance, setDistance] = useState("");
  const [room, setRoom] = useState("");
  const [car, setCar] = useState("");

  const allowance = (Number(meals) || 0) * (Number(people) || 0) * 80;
  const hotel = 800 * (Number(room) || 0) * (Number(nights) || 0);
  const fuel = 4 * (Number(distance) || 0) * 2 * (Number(car) || 0);
  const total = allowance + hotel + fuel;

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6 text-center">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">คำนวณค่าใช้จ่ายราชการ</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนมื้ออาหาร</label>
          <input
            type="number"
            value={meals}
            onChange={(e) => setMeals(e.target.value)}
            className="w-full border border-slate-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            placeholder="เช่น 3"
          />
        </div>

        {/* จำนวนคน */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนคน</label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full border border-slate-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            placeholder="เช่น 5"
          />
        </div>

        {/* จำนวนคืน */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนคืน</label>
          <input
            type="number"
            value={nights}
            onChange={(e) => setNights(e.target.value)}
            className="w-full border border-slate-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            placeholder="เช่น 1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนห้อง</label>
          <input
            type="number"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full border border-slate-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            placeholder="เช่น 4"
          />
        </div>

        {/* ระยะทาง */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">ระยะทาง (กิโลเมตร)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full border border-slate-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            placeholder="เช่น 120"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนรถ</label>
          <input
            type="number"
            value={car}
            onChange={(e) => setCar(e.target.value)}
            className="w-full border border-slate-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            placeholder="เช่น 1"
          />
        </div>
      </div>

      {/* ผลลัพธ์ */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm space-y-2">
        <p>💰 เบี้ยเลี้ยง: {allowance.toLocaleString()} บาท</p>
        <p>🏨 ค่าที่พัก: {hotel.toLocaleString()} บาท</p>
        <p>⛽ ค่าน้ำมัน: {fuel.toLocaleString()} บาท</p>
        <hr />
        <p className="font-bold text-lg">รวมทั้งหมด: {total.toLocaleString()} บาท</p>
      </div>
      <div>
        <p className="text-lg text-center">เลขผู้เสียภาษีโรงเรียนราชประชานุเคราะห์ 35</p>
        <p className="text-lg text-center">0-9940-00812-23-0</p>
      </div>

    </main>
  );
}
