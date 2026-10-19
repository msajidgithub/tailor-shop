"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  fulfillmentTypes,
  serviceTypes,
  type BookingPayload,
  type FulfillmentType,
  type ServiceType,
} from "@/lib/content";
import { openWhatsAppBooking } from "@/lib/whatsapp";
import { useLanguage } from "./LanguageProvider";

const initial: BookingPayload = {
  name: "",
  phone: "",
  serviceType: "stitching",
  fulfillment: "both",
  address: "",
  preferredDate: "",
  preferredTime: "",
  fabricNotes: "",
  message: "",
};

function needsAddress(fulfillment: FulfillmentType) {
  return fulfillment === "pickup" || fulfillment === "delivery" || fulfillment === "both";
}

export function BookingForm() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState<BookingPayload>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingPayload, string>>>({});

  const addressRequired = useMemo(
    () => needsAddress(form.fulfillment),
    [form.fulfillment],
  );

  function update<K extends keyof BookingPayload>(key: K, value: BookingPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = t.booking.errors.name;
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
      next.phone = t.booking.errors.phone;
    }
    if (addressRequired && !form.address.trim()) {
      next.address = t.booking.errors.address;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // Future 1B: POST /api/bookings with this same payload, then optional WhatsApp notify.
    openWhatsAppBooking(form, lang);
  }

  return (
    <section id="book" className="section booking">
      <div className="section-inner booking-inner">
        <header className="section-head">
          <h2>{t.booking.title}</h2>
          <p>{t.booking.sub}</p>
        </header>

        <form className="booking-form" onSubmit={onSubmit} noValidate>
          <div className="field-row">
            <label className="field">
              <span>{t.booking.name}</span>
              <input
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <em className="field-error">{errors.name}</em> : null}
            </label>
            <label className="field">
              <span>{t.booking.phone}</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone ? <em className="field-error">{errors.phone}</em> : null}
            </label>
          </div>

          <div className="field-row">
            <label className="field">
              <span>{t.booking.serviceType}</span>
              <select
                name="serviceType"
                value={form.serviceType}
                onChange={(e) => update("serviceType", e.target.value as ServiceType)}
              >
                {serviceTypes.map((key) => (
                  <option key={key} value={key}>
                    {t.booking.services[key]}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>{t.booking.fulfillment}</span>
              <select
                name="fulfillment"
                value={form.fulfillment}
                onChange={(e) =>
                  update("fulfillment", e.target.value as FulfillmentType)
                }
              >
                {fulfillmentTypes.map((key) => (
                  <option key={key} value={key}>
                    {t.booking.fulfillments[key]}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {addressRequired ? (
            <label className="field">
              <span>
                {t.booking.address}{" "}
                <small className="hint">({t.booking.addressHint})</small>
              </span>
              <textarea
                name="address"
                rows={2}
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                aria-invalid={Boolean(errors.address)}
              />
              {errors.address ? (
                <em className="field-error">{errors.address}</em>
              ) : null}
            </label>
          ) : null}

          <div className="field-row">
            <label className="field">
              <span>{t.booking.preferredDate}</span>
              <input
                name="preferredDate"
                type="date"
                value={form.preferredDate}
                onChange={(e) => update("preferredDate", e.target.value)}
              />
            </label>
            <label className="field">
              <span>{t.booking.preferredTime}</span>
              <input
                name="preferredTime"
                type="time"
                value={form.preferredTime}
                onChange={(e) => update("preferredTime", e.target.value)}
              />
            </label>
          </div>

          <label className="field">
            <span>{t.booking.fabricNotes}</span>
            <input
              name="fabricNotes"
              value={form.fabricNotes}
              onChange={(e) => update("fabricNotes", e.target.value)}
            />
          </label>

          <label className="field">
            <span>{t.booking.message}</span>
            <textarea
              name="message"
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </label>

          <button type="submit" className="btn btn-gold btn-lg submit-btn">
            {t.booking.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
