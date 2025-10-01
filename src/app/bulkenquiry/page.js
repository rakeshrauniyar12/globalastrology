// components/WholesaleInquiry.jsx
'use client';

import { useState } from 'react';
import styles from './page.module.css';
import {
  FiUser, FiPhone, FiBriefcase, FiBox, FiChevronDown, FiLayers, FiSend
} from 'react-icons/fi';

const productCategories = [
  'Rudraksha Bracelets',
  'Nepali Rudraksha',
  'Karungali Wearables',
  'Energy Stones',
  'Rudraksha Malas',
  'Pyrite Wearables',
  'Spiritual Jewellery',
  'Other'
];

const quantityRanges = [
  '100-500 units',
  '500-1000 units',
  '1000-5000 units',
  'More than 5000 units'
];

export default function WholesaleInquiry({ endpoint = '/api/wholesale-inquiry' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    company: '',
    product: '',
    quantity: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      // basic client validation
      if (!form.name || !form.phone || !form.product || !form.quantity) {
        setStatus('error');
        setMessage('Please fill all required fields.');
        return;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setMessage('Inquiry submitted successfully.');
      setForm({ name: '', phone: '', company: '', product: '', quantity: '' });
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className={styles.card} aria-label="Wholesale Inquiry">
      <h2 className={styles.title}>Wholesale Inquiry</h2>

      <div className={styles.hero}>
        {/* Use any product banner image from assets/public as needed */}
      </div>

      <p className={styles.desc}>
        Om Shri Divine is a trusted brand that focuses on quality products, beautiful packaging, and authenticity; to partner and order in bulk, fill the form below. 
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FiUser className={styles.leftIcon} />
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={update('name')}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <FiPhone className={styles.leftIcon} />
          <input
            className={styles.input}
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={update('phone')}
            required
            pattern="[0-9+\-()\s]{7,}"
            title="Enter a valid phone number"
          />
        </div>

        <div className={styles.inputGroup}>
          <FiBriefcase className={styles.leftIcon} />
          <input
            className={styles.input}
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={update('company')}
          />
        </div>

        <div className={styles.inputGroup}>
          <FiBox className={styles.leftIcon} />
          <select
            className={styles.select}
            value={form.product}
            onChange={update('product')}
            required
          >
            <option value="">Select product category</option>
            {productCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        
        </div>

        <div className={styles.inputGroup}>
          <FiLayers className={styles.leftIcon} />
          <select
            className={styles.select}
            value={form.quantity}
            onChange={update('quantity')}
            required
          >
            <option value="">Select quantity range</option>
            {quantityRanges.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === 'loading'}
        >
          <FiSend className={styles.btnIcon} />
          {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
        </button>

        {message && (
          <div
            className={
              status === 'success' ? styles.successNote : styles.errorNote
            }
            role={status === 'success' ? 'status' : 'alert'}
          >
            {message}
          </div>
        )}
      </form>
    </section>
  );
}
